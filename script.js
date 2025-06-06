document.addEventListener('mousemove', function(e) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${e.clientX}px`;
            heart.style.top = `${e.clientY}px`;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transform = 'scale(1.5)';
            }, 0);

            setTimeout(() => {
                heart.remove();
            }, 500);
        });