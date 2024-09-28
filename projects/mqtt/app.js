// Variables para conexión
let client;
let brokerAddress = 'wss://3e0f36dd787547f385acdec492cfc4b6.s1.eu.hivemq.cloud:8884/mqtt'; // URL inicial del broker
let options = {
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'admin',
    password: 'admin',
    keepalive: 60,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    useSSL: true
};

function connectToBroker() {
    client = mqtt.connect(brokerAddress, options);
    client.on('connect', function () {
        console.log('Connected');
        updateGlobalStatus('green', 'Connected'); // Actualizamos el estado global
    });

    client.on('offline', function () {
        console.log('Disconnected');
        updateGlobalStatus('red', 'Disconnected'); // Actualizamos el estado global
    });

    client.on('message', function (topic, message) {
        const msg = message.toString();
        console.log(`Message received on ${topic}: ${msg}`);
        const messageBox = document.getElementById(`message-box-${topic}`);
        if (messageBox) {
            messageBox.innerText = msg; // Actualizar el último mensaje en el recuadro
            const messageLog = document.getElementById(`log-${topic}`);
            const newMessage = document.createElement('p');
            newMessage.innerText = msg;
            messageLog.appendChild(newMessage);
        }
    });
}

// Conectar al broker inicial
connectToBroker(brokerAddress);

// Función para cambiar el broker
function changeBroker() {
    const brokerInput = document.getElementById('broker-input').value.trim();
    const portInput = document.getElementById('port-input').value.trim();
    if (brokerInput && portInput) {
        brokerAddress = `wss://${brokerInput}:${portInput}/mqtt`; // Crear nueva dirección del broker
        document.getElementById('broker-address').innerText = `Connected to: ${brokerAddress}`; // Actualizar texto del broker
        if (client) {
            client.end(); // Desconectar el cliente actual
        }
        connectToBroker(); // Reconectar al nuevo broker
    } else {
        alert('Please enter a valid broker address and port.'); // Mensaje de error
    }
}

// Función para mostrar/ocultar inputs del broker
function toggleBrokerInputs() {
    const brokerInputs = document.getElementById('broker-inputs');
    const brokerStatus = document.getElementById('broker-status');
    if (brokerInputs.style.display === 'none' || brokerInputs.style.display === '') {
        brokerInputs.style.display = 'flex';
        brokerStatus.style.display = 'none';
    } else {
        brokerInputs.style.display = 'none';
        brokerStatus.style.display = 'flex';
    }
}

const subscribedTopics = [];

// Cuando el cliente se conecta
client.on('connect', function () {
    console.log('Connected');
    updateGlobalStatus('green', 'Connected'); // Actualizamos el estado global
});

// Cuando el cliente se desconecta
client.on('offline', function () {
    console.log('Disconnected');
    updateGlobalStatus('red', 'Disconnected'); // Actualizamos el estado global
});

// Función para actualizar el estado global de conexión
function updateGlobalStatus(color, statusText) {
    const statusDot = document.getElementById('global-status-dot');
    const statusLabel = document.getElementById('global-status-text');

    if (statusDot && statusLabel) {
        statusDot.className = `status-dot ${color}`;
        statusLabel.innerText = statusText;
    }
}

// Función para suscribirse a un tópico
function subscribeToTopic(topic) {
    client.subscribe(topic, function (err) {
        if (!err) {
            console.log('Subscribed to:', topic);
            subscribedTopics.push(topic);
            addTopicToList(topic); // Agregar el tópico a la lista en el HTML
        }
    });
}

// Manejar mensajes entrantes
client.on('message', function (topic, message) {
    const msg = message.toString();
    console.log(`Message received on ${topic}: ${msg}`);

    const messageBox = document.getElementById(`message-box-${topic}`);
    if (messageBox) {
        messageBox.innerText = msg; // Actualizar el último mensaje en el recuadro

        // Agregar el mensaje a la lista de mensajes históricos
        const messageLog = document.getElementById(`log-${topic}`);
        const newMessage = document.createElement('p');
        newMessage.innerText = msg;
        messageLog.appendChild(newMessage);
    }
});

// Publicar un mensaje
function publishMessage(topic) {
    const input = document.getElementById(`publish-input-${topic}`);
    const message = input.value;
    if (message) {
        client.publish(topic, message);
        input.value = ''; // Limpiar el input
    }
}

// Mostrar/Ocultar el log de mensajes
function toggleMessageLog(topic) {
    const log = document.getElementById(`log-${topic}`);
    if (log.innerText===''){
        log.innerHTML='No messages yet'
    }
    log.style.display = (log.style.display === 'none' || log.style.display === '') ? 'block' : 'none';
}

// Agregar un nuevo tópico
function addNewTopic() {
    const newTopicInput = document.getElementById('new-topic-input');
    const newTopic = newTopicInput.value.trim();
    if (newTopic) {
        subscribeToTopic(newTopic); // Suscribirse al nuevo tópico
        newTopicInput.value = ''; // Limpiar el input
    } else {
        alert('Please enter a valid topic.'); // Mensaje de error
    }
}

function updateSubscribedTopicsHeader() {
    const header = document.getElementById('subscribed-topics-header');
    if (subscribedTopics.length === 0) {
        header.innerText = 'No topics subscribed';
    } else {
        header.innerText = 'Subscribed Topics';
    }
}

// Modifica la función addTopicToList para llamar a updateSubscribedTopicsHeader
function addTopicToList(topic) {
    const topicList = document.getElementById('topic-list');
    const listItem = document.createElement('li');
    
    listItem.classList.add('topic-card');  // Agrega clase para el estilo
    
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
            console.log('Subscribed to:', topic);
            subscribedTopics.push(topic);
            addTopicToList(topic); // Agregar el tópico a la lista en el HTML
            updateSubscribedTopicsHeader(); // Actualizar el encabezado
        }
    });
}

// Modificar la función para desuscribirse de un tópico (si corresponde)
// Función para desuscribirse de un tópico
function unsubscribeFromTopic(topic) {
    client.unsubscribe(topic, function (err) {
        if (!err) {
            console.log('Unsubscribed from:', topic);
            // Eliminar el tópico de la lista y actualizar la interfaz
            const topicList = document.getElementById('topic-list');
            const listItem = Array.from(topicList.children).find(li => {
                return li.querySelector('.topic-name').innerText === topic;
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
            alert('Error unsubscribing from topic: ' + err);
        }
    });
}

// Chequeo del estado de conexión y actualiza el color del estado
setInterval(() => {
    if (client.isConnected()) {
        subscribedTopics.forEach(topic => updateTopicStatus(topic, 'green'));
    } else {
        subscribedTopics.forEach(topic => updateTopicStatus(topic, 'red'));
    }
}, 5000);


updateSubscribedTopicsHeader()
setTimeout(subscribeToTopic, 3000, 'admin')