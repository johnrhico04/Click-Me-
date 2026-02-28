const btn = document.getElementById('escape');

btn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btn.clientWidth);
    const y = Math.random() * (window.innerHeight - btn.clientHeight);
    
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

btn.addEventListener('click', () => {
    alert("You actually caught it!");
});
