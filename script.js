document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';

    // Tính toán vị trí ngẫu nhiên xung quanh con trỏ chuột
    const offsetX = (Math.random() - 0.5) * 50; // Phân bố ngẫu nhiên trong khoảng -25 đến 25 pixels
    const offsetY = (Math.random() - 0.5) * 50; // Phân bố ngẫu nhiên trong khoảng -25 đến 25 pixels

    heart.style.left = `${e.clientX + offsetX}px`;
    heart.style.top = `${e.clientY + offsetY}px`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 500);
});