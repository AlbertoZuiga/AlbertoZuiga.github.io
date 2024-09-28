// Variables para conexión
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

window.onload = function () {
  const savedBrokerAddress = localStorage.getItem("brokerAddress");
  const savedOptions = localStorage.getItem("options");

  if (savedBrokerAddress && savedOptions) {
    brokerAddress = savedBrokerAddress;
    options = JSON.parse(savedOptions);

    document.getElementById(
      "broker-address"
    ).innerText = `Connected to: ${brokerAddress}`;
    connectToBroker(); // Conectar al broker automáticamente si ya existen credenciales guardadas
  } else {
    showCredentialsModal();
  }
};

function showCredentialsModal() {
  const modal = document.getElementById("credentials-modal");
  modal.style.display = "flex";
}

document.getElementById("close-modal").onclick = function () {
  document.getElementById("credentials-modal").style.display = "none";
};

function submitCredentials() {
  const userInput = document.getElementById("modal-user-input").value.trim();
  const passwordInput = document
    .getElementById("modal-password-input")
    .value.trim();
  const brokerInput = document
    .getElementById("modal-broker-input")
    .value.trim();
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
  options["username"] = userInput;
  options["password"] = passwordInput;

  // Intentar conectarse al broker
  connectToBroker()
    .then(() => {
      // Guardar en localStorage si la conexión es exitosa
      localStorage.setItem("brokerAddress", brokerAddress);
      localStorage.setItem("options", JSON.stringify(options));
      document.getElementById(
        "broker-address"
      ).innerText = `Connected to: ${brokerAddress}`;
      document.getElementById("credentials-modal").style.display = "none";
      updateSubscribedTopicsHeader();
    })
    .catch((error) => {
      const savedBrokerAddress = localStorage.getItem("brokerAddress");
      const savedOptions = localStorage.getItem("options");

      if (savedBrokerAddress && savedOptions) {
        brokerAddress = savedBrokerAddress;
        options = JSON.parse(savedOptions);
        document.getElementById(
          "broker-address"
        ).innerText = `Connected to: ${brokerAddress}`;
      }
      // Mostrar el error si la conexión falla
      alert(error);
    });
}

function connectToBroker() {
  return new Promise((resolve, reject) => {
    client = mqtt.connect(brokerAddress, options);

    if (client) {
      client.on("connect", function () {
        console.log("Connected");
        updateGlobalStatus("green", "Connected");
        resolve("Connection successful"); // Resolución exitosa
      });

      client.on("offline", function () {
        console.log("Disconnected");
        updateGlobalStatus("red", "Disconnected");
      });

      client.on("error", function (error) {
        console.error("Connection failed: ", error);
        updateGlobalStatus("red", "Connection failed");
        reject("Failed to connect to broker"); // Rechazo en caso de error
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
    } else {
      reject("Failed to initialize MQTT client");
    }
  });
}

const subscribedTopics = [];

if (client) {
  // Cuando el cliente se conecta
  client.on("connect", function () {
    console.log("Connected");
    updateGlobalStatus("green", "Connected"); // Actualizamos el estado global
  });

  // Cuando el cliente se desconecta
  client.on("offline", function () {
    console.log("Disconnected");
    updateGlobalStatus("red", "Disconnected"); // Actualizamos el estado global
  });

  // Manejar mensajes entrantes
  client.on("message", function (topic, message) {
    const msg = message.toString();
    console.log(`Message received on ${topic}: ${msg}`);

    const messageBox = document.getElementById(`message-box-${topic}`);
    if (messageBox) {
      messageBox.innerText = msg; // Actualizar el último mensaje en el recuadro

      // Agregar el mensaje a la lista de mensajes históricos
      const messageLog = document.getElementById(`log-${topic}`);
      const newMessage = document.createElement("p");
      newMessage.innerText = msg;
      messageLog.appendChild(newMessage);
    }
  });
}

// Función para actualizar el estado global de conexión
function updateGlobalStatus(color, statusText) {
  const statusDot = document.getElementById("global-status-dot");
  const statusLabel = document.getElementById("global-status-text");

  if (statusDot && statusLabel) {
    statusDot.className = `status-dot ${color}`;
    statusLabel.innerText = statusText;
  }
}

// Función para suscribirse a un tópico
function subscribeToTopic(topic) {
  client.subscribe(topic, function (err) {
    if (!err) {
      console.log("Subscribed to:", topic);
      subscribedTopics.push(topic);
      addTopicToList(topic); // Agregar el tópico a la lista en el HTML
    }
  });
}

// Publicar un mensaje en un tópico
function publishMessage(topic) {
  const input = document.getElementById(`publish-input-${topic}`);
  const message = input.value.trim();
  if (message) {
    client.publish(topic, message, function (err) {
      if (!err) {
        console.log(`Message published to ${topic}: ${message}`);
        input.value = ""; // Limpiar el campo de entrada después de publicar
      }
    });
  } else {
    alert("Please enter a message to publish.");
  }
}

// Mostrar/Ocultar el log de mensajes
function toggleMessageLog(topic) {
  const log = document.getElementById(`log-${topic}`);
  if (log.innerText === "") {
    log.innerHTML = "No messages yet";
  }
  log.style.display =
    log.style.display === "none" || log.style.display === "" ? "block" : "none";
}

// Agregar un nuevo tópico
function addNewTopic() {
  const newTopicInput = document.getElementById("new-topic-input");
  const newTopic = newTopicInput.value.trim();
  if (newTopic) {
    subscribeToTopic(newTopic); // Suscribirse al nuevo tópico
    newTopicInput.value = ""; // Limpiar el input
  } else {
    alert("Please enter a valid topic."); // Mensaje de error
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

// Modifica la función addTopicToList para llamar a updateSubscribedTopicsHeader
function addTopicToList(topic) {
  const topicList = document.getElementById("topic-list");
  const listItem = document.createElement("li");

  listItem.classList.add("topic-card"); // Agrega clase para el estilo

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

  updateSubscribedTopicsHeader(); // Actualizar el encabezado después de agregar un tópico
}

// Llama a updateSubscribedTopicsHeader también cuando se suscriba a un nuevo tópico
function subscribeToTopic(topic) {
  client.subscribe(topic, function (err) {
    if (!err) {
      console.log("Subscribed to:", topic);
      subscribedTopics.push(topic);
      addTopicToList(topic); // Agregar el tópico a la lista en el HTML
      updateSubscribedTopicsHeader(); // Actualizar el encabezado
    }
  });
}

// Función para desuscribirse de un tópico
function unsubscribeFromTopic(topic) {
  client.unsubscribe(topic, function (err) {
    if (!err) {
      console.log("Unsubscribed from:", topic);
      // Eliminar el tópico de la lista y actualizar la interfaz
      const topicList = document.getElementById("topic-list");
      const listItem = Array.from(topicList.children).find((li) => {
        return li.querySelector(".topic-name").innerText === topic;
      });
      if (listItem) {
        topicList.removeChild(listItem); // Eliminar el elemento de la lista
      }
      // Eliminar el tópico de la lista de tópicos suscritos
      const index = subscribedTopics.indexOf(topic);
      if (index > -1) {
        subscribedTopics.splice(index, 1);
      }
      updateSubscribedTopicsHeader();
    } else {
      alert("Error unsubscribing from topic: " + err);
    }
  });
}

updateSubscribedTopicsHeader();
