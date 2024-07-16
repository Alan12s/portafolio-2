const terminal = document.querySelector('.terminal');
const output = document.getElementById('output');
const input = document.getElementById('input');
const prompt = document.querySelector('.prompt');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let command = input.value.trim();
        executeCommand(command);
        input.value = '';
    }
});

function executeCommand(command) {
    let response;
    switch (command) {
        case 'help':
            response = 'Available commands: help, about, skills, projects, contact';
            break;
        case 'about':
            response = `Hello! I'm Alan Rodriguez, a software developer with a focus on backend development. I enjoy programming, reading, and learning new languages.`;
            break;
        case 'skills':
            response = `Technical Skills:\nHTML: 80%\nJavaScript: 30%\nCSS: 40%\nPHP: 40%\nMySQL: 60%\nBootstrap: 80%\nPython: 20%\nReact & React Native: 5%\nExcel: 46%`;
            break;
        case 'projects':
            response = `Project 1: [Description of Project 1]\nProject 2: [Description of Project 2]\nProject 3: [Description of Project 3]`;
            break;
        case 'contact':
            response = `You can reach me at rodriguezalanm731@gmail.com or +2645263370.`;
            break;
        default:
            response = 'Command not found. Type "help" for a list of available commands.';
    }
    appendOutput(response);
}

function appendOutput(text) {
    let newLine = document.createElement('div');
    newLine.textContent = text;
    output.appendChild(newLine);
    terminal.scrollTop = terminal.scrollHeight;
}

// Welcome message
appendOutput('Welcome to Alan Rodriguez\'s terminal portfolio! Type "help" to see the list of available commands.');
