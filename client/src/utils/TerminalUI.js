import { Terminal } from 'xterm';
import { FitAddon } from "xterm-addon-fit";

class TerminalUI {
    constructor(socket) {
        this.terminal = new Terminal();
        this.fitAddon = new FitAddon();
        this.socket = socket;
    }

    attachTo(container) {
        this.terminal.loadAddon(this.fitAddon);
        this.terminal.open(container);
        this.fitAddon.fit();
        this.terminal.write("Terminal Connected");
        this.terminal.write("");
        this.prompt();
    }

    clear() {
        this.terminal.clear();
    }

    sendInput(input) {
        this.socket.emit("input", input);
    }

    prompt() {
        this.terminal.write('\r\n$ ');
    }

    startListening() {
        this.terminal.onData(data => this.sendInput(data));
        this.socket.on("output", data => {
            this.write(data);
        })
    }

    write(text) {
        this.terminal.write(text);
    }
}

export default TerminalUI;