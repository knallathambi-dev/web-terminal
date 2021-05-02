export function runFakeTerminal(xterm) {
    //const term = xterm.getTerminal();
    var shellprompt = '$ ';

    function prompt () {
        xterm.write('\r\n' + shellprompt);
    }
    xterm.writeln('Welcome to xterm.js');
    xterm.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    xterm.writeln('Type some keys and commands to play around.');
    xterm.writeln('');
    prompt();

    // term.on('key', function (key, ev) {
    //     var printable = (
    //         !ev.altKey && !ev.ctrlKey && !ev.metaKey
    //     );

    //     if (ev.keyCode == 13) {
    //         prompt();
    //     } else if (printable) {
    //         xterm.write(key);
    //     }
    // });

    // term.on('paste', function (data, ev) {
    //     xterm.write(data);
    // });
}
