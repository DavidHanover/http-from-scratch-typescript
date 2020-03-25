import * as net from "net";

const PORT = 3000;
const IP = "127.0.0.1";
const BACKLOG = 100;

net
  .createServer()
  .listen(PORT, IP, BACKLOG)
  .on("connection", socket =>
    socket.on("data", buffer => {
      const request = buffer.toString();
      socket.write("hello world!");
      socket.end();
    })
  );
