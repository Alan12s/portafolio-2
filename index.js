// Selecciona todos los enlaces dentro del menú
const menuLinks = document.querySelectorAll('ul li a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// javaScrip para reiniciar el efecto de maquina de escribir

const typinText = document.querySelector('span');

function resetTypingEffect(){
    typinText.classList.remove('typing');
    void typinText.offsetWidth;
    typinText.classList.add('typing');   
}

typinText.addEventListener('animationend', resetTypingEffect);

resetTypingEffect();

//About menu
// Ejemplo básico de animación con JavaScript
const aboutMeCard = document.querySelector('.AboutMe');

aboutMeCard.addEventListener('mouseenter', () => {
    aboutMeCard.style.transform = 'scale(1.05)';
    aboutMeCard.style.transition = 'transform 0.3s ease';
});

aboutMeCard.addEventListener('mouseleave', () => {
    aboutMeCard.style.transform = 'scale(1)';
});


//proyectos
const app = document.getElementById('app');

const projects = [
    { nr: '001', name: 'Calculadora', path: 'proyectos/calculadora/index.html', image: 'Calculadora.png' },
    { nr: '002', name: 'To-Do List', path: 'proyectos/todo-list/index.html', image: 'To do list app.png' },
    { nr: '003', name: 'Weather App con API', path: 'proyectos/react_weather_app-main/src/App.js', image: 'Clima.png' },
    { nr: '004', name: 'reloj mundial', path: 'proyectos/reloj-mundial-app-main/src/App.js', image: 'Reloj-mundial.png' },
    { nr: '005', name: 'PortafolioTerminal', path: 'proyectos/portafolio Estilo terminal/index.html', image: 'Terminal.png' },
    // Añade más proyectos aquí
];

const imgBaseURL = 'proyectos/images/'; // Asegúrate de tener imágenes en esta ruta

projects.forEach(project => {
    const title = `${project.name} - #${project.nr}`;
    const imgURL = imgBaseURL + project.image;
    
    const projectEl = document.createElement('a');
    projectEl.classList.add('project');
    projectEl.href = project.path;
    projectEl.target = '_blank';

    projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
        <p>
            ${title}
        </p>
    `;

    app.appendChild(projectEl);
});



// Boton de descarga del cv

function descargarCV() {
    // Ruta del archivo PDF
    var archivo = 'cv/CV Alan Rodríguez .pdf';

    // Crear un enlace temporal
    var link = document.createElement('a');
    link.href = archivo;
    link.download = 'CV Alan Rodríguez.pdf';

    // Agregar el enlace al cuerpo del documento
    document.body.appendChild(link);

    // Simular clic en el enlace para iniciar la descarga
    link.click();

    // Eliminar el enlace del documento después de la descarga
    document.body.removeChild(link);

    // Agregar clase de animación al botón al iniciar la descarga
    var boton = document.querySelector('.download');
    boton.classList.add('descargando');

    // Eliminar la clase de animación después de un tiempo
    setTimeout(function() {
        boton.classList.remove('descargando');
    }, 2000); // 2000 milisegundos (2 segundos) como ejemplo
}
