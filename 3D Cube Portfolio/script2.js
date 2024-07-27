document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href').substring(1);
            rotateCube(target);
        });
    });
});

function rotateCube(face) {
    const cube = document.querySelector('.cube');
    switch(face) {
        case 'home':
            cube.style.transform = 'translateZ(-40vmin) rotateY(0deg)';
            break;
        case 'about':
            cube.style.transform = 'translateZ(-40vmin) rotateY(180deg)';
            break;
        case 'skills':
            cube.style.transform = 'translateZ(-40vmin) rotateY(-90deg)';
            break;
        case 'projects':
            cube.style.transform = 'translateZ(-40vmin) rotateY(90deg)';
            break;
        case 'contact':
            cube.style.transform = 'translateZ(-40vmin) rotateX(-90deg)';
            break;
        case 'gallery':
            cube.style.transform = 'translateZ(-40vmin) rotateX(90deg)';
            break;
    }
}






