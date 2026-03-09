Requirements

Make sure you have Node.js installed on your system.

Installation

Clone the repository or download the project folder, then open a terminal inside the project directory.

Initialize the Node project:

npm init -y

Install dependencies:

npm install express socket.io
Run the server

Start the server with:

node server.js

You should see:

Server running on http://localhost:3000
Open the website

Open your browser and go to:

http://localhost:3000
View on mobile

Make sure your phone and computer are connected to the same WiFi.

Find your computer's IP address.

Windows:

ipconfig

Look for IPv4 Address (example 192.168.1.5).

Open this on your phone browser:

http://YOUR_IP_ADDRESS:3000

Example:

http://192.168.1.5:3000

Now the chat and reactions will work across devices.

Tech Stack

Node.js

Express

Socket.IO

HTML

CSS

JavaScript

Project Structure
project
│
├── server.js
├── package.json
│
└── public
    ├── index.html
    ├── style.css
    └── script.js
