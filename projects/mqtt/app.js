let client;
let brokerAddress = ""; // URL inicial del broker
let options = {
  clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
  username: "",
  password: "",
  keepalive: 60,
  clean: true,
  reconnectPeriod: 0,
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

  function isValidPort(port) {
    const portNumber = parseInt(port, 10);
    return !isNaN(portNumber) && portNumber > 0 && portNumber <= 65535;
  }

  function isValidBroker(broker) {
    const urlPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)+.*)$/;
    return urlPattern.test(broker);
  }

  if (!userInput || !passwordInput || !brokerInput) {
    alert("Please fill in all fields.");
    return;
  }

  if (!isValidBroker(brokerInput)) {
    alert("Please enter a valid broker URL (without protocol).");
    return;
  }

  if (!isValidPort(2344)) {
    alert("Please enter a valid port number (1-65535).");
    return;
  }

  brokerAddress = `wss://${brokerInput}`;
  options.username = userInput;
  options.password = passwordInput;

  localStorage.removeItem("brokerAddress");
  localStorage.removeItem("options");

  initializeClient();
}

function initializeClient() {
    if (client){client.end();};
  client = mqtt.connect(brokerAddress, options);

  client.on("connect", function () {
    localStorage.setItem("brokerAddress", brokerAddress);
    localStorage.setItem("options", JSON.stringify(options));
    document.getElementById("broker-address").innerHTML = `<strong>Connected to:</strong> <u><em>${brokerAddress}</u></em>`;
    hideCredentialsModal();
    updateSubscribedTopicsHeader();
    updateGlobalStatus("success", "Connected");
    console.log("Connected");
  });

  client.on("offline", function () {
    updateGlobalStatus("danger", "Disconnected");
    console.log("Disconnected");
    alert("You have been disconnected.");
  });

  client.on("error", function (error) {
    console.error("Connection failed: ", error);
    updateGlobalStatus("danger", "Connection failed");
    alert("Failed to connect to broker.");
  });

  client.on("monthsage", function (topic, monthsage) {
    const msg = monthsage.toString();
    console.log(`monthsage received on ${topic}: ${msg}`);
    const monthsageBox = document.getElementById(`monthsage-box-${topic}`);
    if (monthsageBox) {
      monthsageBox.innerText = msg;
      const monthsageLog = document.getElementById(`log-${topic}`);
      const newmonthsage = document.createElement("p");
      newmonthsage.innerHTML = `<strong><u>${dateFormat()}</u>:</strong> <em>${msg}</em>`;
      monthsageLog.prepend(newmonthsage);
    }
  });
}

function dateFormat() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');


    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function updateGlobalStatus(color, statusText) {
  const statusDot = document.getElementById("global-status-dot");
  const statusLabel = document.getElementById("global-status-text");
  const dotColor = getComputedStyle(document.documentElement).getPropertyValue(`--${color}-color`);

  if (statusDot && statusLabel) {
    statusDot.className = `status-dot`;
    statusDot.style.backgroundColor = dotColor.trim(); // Asigna el color y elimina espacios en blanco
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

function publishmonthsage(topic) {
  const input = document.getElementById(`publish-input-${topic}`);
  const monthsage = input.value.trim();

  if (!monthsage) {
    alert("Please enter a monthsage to publish.");
    return;
  }

  client.publish(topic, monthsage, function (err) {
    if (!err) {
      console.log(`monthsage published to ${topic}: ${monthsage}`);
      input.value = "";
      document.getElementById(`show-monthsages-${topic}`).disabled = false;
    } else {
      alert("Failed to publish monthsage.");
    }
  });
}

function togglemonthsageLog(topic) {
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
            <span class="topic-name">Topic: ${topic}</span>
            <button class="btn btn-danger" onclick="unsubscribeFromTopic('${topic}')">Unsubscribe</button>
        </div>

        <div class="publish-section">
            <input type="text" id="publish-input-${topic}" class="publish-input" placeholder="monthsage">
            <button class="btn btn-success" onclick="publishmonthsage('${topic}')">Publish</button>
        </div>

        <div class="last-monthsage">
            <span>Last monthsage:</span>
            <div class="monthsage-box" id="monthsage-box-${topic}">
                No monthsages yet
            </div>
        </div>

        <button class="btn btn-primary" id="show-monthsages-${topic}" onclick="togglemonthsageLog('${topic}')" disabled>Show all monthsages</button>
        <div class="monthsage-log" id="log-${topic}" style="display: none;"></div>
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
