document.addEventListener('DOMContentLoaded', function() {
    const messagesDiv = document.getElementById('messages');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const usernameInput = document.getElementById('usernameInput');

    const eventSource = new EventSource('/sse');

    eventSource.onmessage = function(event) {
        const newMessage = document.createElement('div');
        newMessage.innerHTML = `<strong>${event.data.split(': ')[0]}:</strong> ${event.data.substring(event.data.indexOf(': ') + 1)}`;
        messagesDiv.appendChild(newMessage);
    };

    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = messageInput.value.trim();

        if (message) {
            const username = usernameInput.value.trim() || 'You'; 
            fetch(`/chat?username=${encodeURIComponent(username)}&message=${encodeURIComponent(message)}&fromForm=true`);
            messageInput.value = ''; 
        }
    });
});