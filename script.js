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

const message = document.getElementById('glory-message');

btn.addEventListener('click', () => {
    // Hide the button so it doesn't run away anymore
    btn.style.display = 'none';
    
    // Show the glorious message
    message.innerText = "🏆 ALL HAIL THE CHOSEN ONE! 🏆\nYOU HAVE DEFEATED THE UNCLICKABLE.";
    message.style.display = 'block';
    
    // Optional: Turn the background gold
    document.body.style.background = "#2c2c00";
});

// There is no message.