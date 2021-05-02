const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);
const args = require("yargs/yargs")(process.argv.slice(2)).argv;
const SocketService = require("./service/SocketService");
const logger = require("./utils/setupLogger");

const port = (args.port && parseInt(args.port)) || 8081;

const socketService = new SocketService();
socketService.attachServer(server);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    })
});

// const staticPath = path.normalize(
//     path.join(__dirname, "build")
// );
const staticPath = path.normalize(
    path.join(__dirname, "../client/build")
);
logger.info(`Serving static files from ${staticPath}`);

app.use(express.static(staticPath));

app.get("/*", (req, res) => {
 res.sendFile(path.join(staticPath, "index.html"));
});

server.listen(port,() => {
    logger.info(`Server listening to port - ${port}`);
});
