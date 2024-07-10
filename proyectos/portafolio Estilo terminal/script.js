const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processCommand(input.value);
        input.value = '';
    }
});

function processCommand(command) {
    let outputText;
    switch (command.toLowerCase()) {
        case 'help':
            outputText = 'Available commands: about, projects, contact';
            break;
        case 'about':
            outputText = 'I am Alan Rodríguez, a software developer based in San Juan, Argentina.';
            break;
        case 'projects':
            outputText = '1. Project One\n2. Project Two\n3. Project Three';
            break;
        case 'contact':
            outputText = 'Email: alan@example.com\nLinkedIn: linkedin.com/in/alan-rodriguez';
            break;
        default:
            outputText = `'${command}' is not recognized as an internal or external command, operable program or batch file.`;
    }
    output.innerHTML += `<div><span class="prompt">guest@portfolio:~$</span> ${command}</div>`;
    output.innerHTML += `<div>${outputText}</div>`;
    output.scrollTop = output.scrollHeight;
}
