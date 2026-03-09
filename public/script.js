const socket = io();

function sendMessage() {
    const input = document.getElementById("messageInput");
    socket.emit("chat message", input.value);
    input.value = "";
}

socket.on("chat message", function(msg) {
    const li = document.createElement("li");
    li.textContent = msg;
    document.getElementById("messages").appendChild(li);
});

function sendReaction(emoji){
    socket.emit("reaction", emoji);
}

socket.on("reaction", function(emoji){
    const span = document.createElement("span");
    span.textContent = emoji;
    span.style.fontSize="30px";
    document.getElementById("reactions").appendChild(span);
});