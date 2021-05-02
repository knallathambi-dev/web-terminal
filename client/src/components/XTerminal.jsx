import React from "react";
import {io} from "socket.io-client";
import TerminalUI from "../utils/TerminalUI";
import "xterm/css/xterm.css";

const SOCKET_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8081' : '';
const socket = io(SOCKET_URL);

const XTerminal = () => {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const terminalUI = new TerminalUI(socket);
        terminalUI.attachTo(containerRef.current);
        terminalUI.startListening();
    }, []);

    return (
        <div ref={containerRef} styles={{width: '100%', height: '100%'}}>
        </div>
    )
}

export default XTerminal;

