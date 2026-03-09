const socket = io();

const userId = Math.floor(Math.random()*1000);

function sendMessage(){

const input = document.getElementById("messageInput");

if(input.value.trim() === "") return;

socket.emit("chat message",{
user:userId,
text:input.value
});

input.value="";

}

socket.on("chat message", function(data){

const li=document.createElement("li");

const avatar=document.createElement("div");
avatar.className="avatar";
avatar.innerText=data.user;

const msg=document.createElement("span");
msg.innerText=data.text;

li.appendChild(avatar);
li.appendChild(msg);

document.getElementById("messages").appendChild(li);

});

function sendReaction(emoji){
socket.emit("reaction",emoji);
}

socket.on("reaction", function(emoji){

const span=document.createElement("span");
span.textContent=emoji;
span.style.fontSize="30px";
span.style.margin="5px";

document.getElementById("reactions").appendChild(span);

});