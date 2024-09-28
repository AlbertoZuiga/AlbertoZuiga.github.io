let client;
let brokerAddress = ""; // URL inicial del broker
let options = {
  clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
  username: "",
  password: "",
  keepalive: 60,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  useSSL: true,
};

const subscribedTopics = [];

window.onload = function () {
  const savedBrokerAddress = localStorage.getItem("brokerAddress");
  const savedOptions = localStorage.getItem("options");

  if (savedBrokerAddress && savedOptions) {
    brokerAddress = savedBrokerAddress;
    options = JSON.parse(savedOptions);
    document.getElementById("broker-address").innerText = `Connected to: ${brokerAddress}`;
    initializeClient();
  } else {
    showCredentialsModal();
  }
};

function showCredentialsModal() {
  const modal = document.getElementById("credentials-modal");
  modal.style.display = "flex";
}

function hideCredentialsModal() {
  const modal = document.getElementById("credentials-modal");
  modal.style.display = "none";
}

function submitCredentials() {
  const userInput = document.getElementById("modal-user-input").value.trim();
  const passwordInput = document.getElementById("modal-password-input").value.trim();
  const brokerInput = document.getElementById("modal-broker-input").value.trim();
  const portInput = document.getElementById("modal-port-input").value.trim();

  function isValidPort(port) {
    const portNumber = parseInt(port, 10);
    return !isNaN(portNumber) && portNumber > 0 && portNumber <= 65535;
  }

  function isValidBroker(broker) {
    const urlPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)+.*)$/;
    return urlPattern.test(broker);
  }

  if (!userInput || !passwordInput || !brokerInput || !portInput) {
    alert("Please fill in all fields.");
    return;
  }

  if (!isValidBroker(brokerInput)) {
    alert("Please enter a valid broker URL (without protocol).");
    return;
  }

  if (!isValidPort(portInput)) {
    alert("Please enter a valid port number (1-65535).");
    return;
  }

  brokerAddress = `wss://${brokerInput}:${portInput}/mqtt`;
  options.username = userInput;
  options.password = passwordInput;

  initializeClient();
}

function initializeClient() {
  client = mqtt.connect(brokerAddress, options);

  client.on("connect", function () {
    localStorage.setItem("brokerAddress", brokerAddress);
    localStorage.setItem("options", JSON.stringify(options));
    document.getElementById("broker-address").innerText = `Connected to: ${brokerAddress}`;
    hideCredentialsModal();
    updateSubscribedTopicsHeader();
    updateGlobalStatus("green", "Connected");
    console.log("Connected");
  });

  client.on("offline", function () {
    updateGlobalStatus("red", "Disconnected");
    console.log("Disconnected");
    alert("You have been disconnected.");
  });

  client.on("error", function (error) {
    console.error("Connection failed: ", error);
    updateGlobalStatus("red", "Connection failed");
    alert("Failed to connect to broker.");
  });

  client.on("message", function (topic, message) {
    const msg = message.toString();
    console.log(`Message received on ${topic}: ${msg}`);
    const messageBox = document.getElementById(`message-box-${topic}`);
    if (messageBox) {
      messageBox.innerText = msg;
      const messageLog = document.getElementById(`log-${topic}`);
      const newMessage = document.createElement("p");
      newMessage.innerText = msg;
      messageLog.appendChild(newMessage);
    }
  });
}

function updateGlobalStatus(color, statusText) {
  const statusDot = document.getElementById("global-status-dot");
  const statusLabel = document.getElementById("global-status-text");

  if (statusDot && statusLabel) {
    statusDot.className = `status-dot ${color}`;
    statusLabel.innerText = statusText;
  }
}

function subscribeToTopic(topic) {
  if (!client || !client.connected) {
    alert("You need to connect to a broker first.");
    return;
  }

  client.subscribe(topic, function (err) {
    if (!err) {
      console.log("Subscribed to:", topic);
      subscribedTopics.push(topic);
      addTopicToList(topic);
      updateSubscribedTopicsHeader();
    } else {
      alert("Failed to subscribe to topic.");
    }
  });
}

function publishMessage(topic) {
  const input = document.getElementById(`publish-input-${topic}`);
  const message = input.value.trim();

  if (!message) {
    alert("Please enter a message to publish.");
    return;
  }

  client.publish(topic, message, function (err) {
    if (!err) {
      console.log(`Message published to ${topic}: ${message}`);
      input.value = ""; // Clear input after publishing
    } else {
      alert("Failed to publish message.");
    }
  });
}

function toggleMessageLog(topic) {
  const log = document.getElementById(`log-${topic}`);
  log.style.display = log.style.display === "none" || log.style.display === "" ? "block" : "none";
}

function addNewTopic() {
  const newTopicInput = document.getElementById("new-topic-input");
  const newTopic = newTopicInput.value.trim();

  if (newTopic) {
    subscribeToTopic(newTopic);
    newTopicInput.value = ""; // Clear input after subscribing
  } else {
    alert("Please enter a valid topic.");
  }
}

function updateSubscribedTopicsHeader() {
  const header = document.getElementById("subscribed-topics-header");
  if (subscribedTopics.length === 0) {
    header.innerText = "No topics subscribed";
  } else {
    header.innerText = "Subscribed Topics";
  }
}

function addTopicToList(topic) {
  const topicList = document.getElementById("topic-list");
  const listItem = document.createElement("li");

  listItem.classList.add("topic-card");

  listItem.innerHTML = `
        <div class="topic-header">
            <span class="topic-name">${topic}</span>
            <button class="unsubscribe-btn" onclick="unsubscribeFromTopic('${topic}')">Unsubscribe</button>
        </div>

        <div class="publish-section">
            <input type="text" id="publish-input-${topic}" class="publish-input" placeholder="Message">
            <button class="publish-btn" onclick="publishMessage('${topic}')">Publish</button>
        </div>

        <div class="last-message">
            <span>Last message:</span>
            <div class="message-box" id="message-box-${topic}">
                No messages yet
            </div>
        </div>

        <button class="show-hide-btn" onclick="toggleMessageLog('${topic}')">Show all Messages</button>
        <div class="message-log" id="log-${topic}" style="display: none;"></div>
    `;

  topicList.appendChild(listItem);
  updateSubscribedTopicsHeader();
}

function unsubscribeFromTopic(topic) {
  client.unsubscribe(topic, function (err) {
    if (!err) {
      console.log("Unsubscribed from:", topic);
      const topicList = document.getElementById("topic-list");
      const listItem = Array.from(topicList.children).find((li) => li.querySelector(".topic-name").innerText === topic);

      if (listItem) {
        topicList.removeChild(listItem);
      }

      const index = subscribedTopics.indexOf(topic);
      if (index > -1) {
        subscribedTopics.splice(index, 1);
      }
      updateSubscribedTopicsHeader();
    } else {
      alert("Error unsubscribing from topic.");
    }
  });
}
