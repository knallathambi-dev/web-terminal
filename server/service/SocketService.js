const {Server} = require("socket.io");
const PTYService = require("./PTYService");
const logger = require("../utils/setupLogger");

class SocketService {

    attachServer(server) {
        if (!server) {
            throw new Error("Server not found..");            
        }

        const io = new Server(server, { 
            cors: {
                origin: "*",
                methods: ["GET", "PUT", "POST"]
            }
        });
        logger.info("Created socket server. Waiting for client connections.");

        io.on("connection", socket => {
            logger.info(`Client connected to socket - ${socket.id}`);
            socket.on("disconnect", () => {
                logger.info(`Disconnected socket - ${socket.id}`);
            });
            const pty = new PTYService(socket);
            socket.on("input", input => {
                pty.write(input);
            })
        })
    }
}

module.exports = SocketService;