import * as net from "net";

const PORT = 3000;
const IP = "127.0.0.1";
const BACKLOG = 100;

net
  .createServer()
  .listen(PORT, IP, BACKLOG)
  .on("connection", socket =>
    console.log(
      `New connection from ${socket.remoteAddress}:${socket.remotePort}`
    )
  );
