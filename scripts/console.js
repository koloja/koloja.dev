const container = document.getElementById('container');

function appendChild(child, message) {
    const formatted = message.replace(/\n/g, '<br>');
    child.innerHTML = formatted;
    container.appendChild(child);
}

const console = {
    log: (message) => {const child = document.createElement('p'); child.classList.add('info'); appendChild(child, message)},
    warn: (message) => {const child = document.createElement('p'); child.classList.add('warn'); appendChild(child, message)},
    error: (message) => {const child = document.createElement('p'); child.classList.add('error'); appendChild(child, message)},
    clear: () => container.innerHTML = ''
};
const hex = (color) => function(message) {return `<span style="color: ${color};">${message}</span>`};
const bold = (message) => `<span style="font-weight: 900;">${message}</span>`;
const link = (href, text) => `<span class="link" onclick="window.open('${href}', '_blank')">${text}</span>`;

export {console, hex, bold, link};