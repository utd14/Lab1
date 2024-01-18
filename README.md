# Chat Application
This is a real-time chat application named "MyChat" created using Node.js, Express, HTML and JavaScript. Follow the instructions below to set up and run the application.

## Setup Instruction
Make sure you have the following installed on your machine:

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\
— Node.js LTS: [Download](https://nodejs.org/en)
\
— (Optional) Visual Studio Code: [Download](https://code.visualstudio.com/)
\
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

If you're experiencing troubles with packages, make sure they're installed. In Visual Studio Code they can be installed through the terminal.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\
— `npm init -y`
\
— `npm install express`
\
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

---
Run the application with `node server.js` in the terminal. The default port is set as '3000'. You're free to change it to your personal preferences in `server.js` ('const PORT = process.env.PORT || yourport;').

The server will start running at `http://localhost:yourport` (default: `http://localhost:3000`).

## Contents of the chat application
- `http://localhost:3000/static/chat.html`: the chat application. There you can enter your username, send and recieve messages in the chat. The messages are received from `http://localhost:3000/chat`.
- `http://localhost:3000/`: a page with a plain text message "hi". 
- `http://localhost:3000/json`: responds with a JSON object containing a text property set to "hi" and a numbers property set to an array [1, 2, 3].
- `http://localhost:3000/echo`: echoes back the input query parameter in various formats (normal, shouty, character count, and backwards). Example: `http://localhost:3000/echo?input=hello`.
- `http://localhost:3000/chat`: emits a 'message' event with the message from the query parameter. Example: `http://localhost:3000/chat?message=hello`. The default username is set to "Anonymous".
- `http://localhost:3000/sse`: establishes a Server-Sent Events (SSE) connection and sends messages in real-time to the client.
- `/static/*` serves static files from the "mychat" directory.

## Troubleshooting
If you're encountering error `EADDRINUSE: address already in use :::3000`, do the following:

### On Windows:
1. Open the Command Prompt.
2. Run the following command to find the process ID (PID) using your port: `netstat -ano | find "yourport"`.
3. Use the following command to kill the process: `taskkill /F /PID <PID>`. (Replace <PID> with the actual process ID you obtained.)
4. Try running your Node.js application again using: `node server.js`.

### On Linux:
1. Open the terminal.
2. Run the following command to find the process ID (PID) using your port: `lsof -i :yourport`.
3. Use the following command to kill the process: `kill -9 <PID>`. (Replace <PID> with the actual process ID you obtained.)
4. Try running your Node.js application again using: `node server.js`.

---

For any other issues:
- Ensure that all necessary files and dependencies are installed.
- Ensure that `server.js` is running.