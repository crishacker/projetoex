function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
  
    if (message.trim() !== "") {
      var chatBox = document.getElementById("chat");
      var newMessage = document.createElement("div");
      newMessage.textContent = "You: " + message;
      chatBox.appendChild(newMessage);
  
      // Simulate a response from the other user after a short delay
      setTimeout(function() {
        var reply = document.createElement("div");
        reply.textContent = "Bot: I received your message!";
        chatBox.appendChild(reply);
        messageInput.value = ""; // Clear the input field
      }, 1000);
    }
  }
  