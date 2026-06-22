// Add slight parallax effect to background shapes based on mouse movement
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
        const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
        
        // Only apply transform if we aren't interfering with the CSS animation significantly
        // The CSS animation handles the main float, we just add a subtle mouse reactive shift
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});
