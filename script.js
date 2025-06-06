function createHeart(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';

    // Tính toán vị trí ngẫu nhiên xung quanh vị trí chạm
    const offsetX = (Math.random() - 0.5) * 50; // Phân bố ngẫu nhiên
    const offsetY = (Math.random() - 0.5) * 50;

    const touch = e.touches ? e.touches[0] : e; // Lấy vị trí chạm
    heart.style.left = `${touch.clientX + offsetX}px`;
    heart.style.top = `${touch.clientY + offsetY}px`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 500);
}

document.addEventListener('mousemove', createHeart);
document.addEventListener('touchmove', createHeart);