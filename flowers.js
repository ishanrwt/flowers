function startFlowerRain() {
    document.getElementById('message').style.display = 'none';
  
    const flowers = ['🌸', '🌼', '💐', '🌺', '🌻', '🌷'];
  
    function createFlower() {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  
      const isUp = Math.random() < 0.5; // 50% chance for up or down
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.fontSize = (1 + Math.random() * 2) + 'rem';
      flower.style.animationName = isUp ? 'floatUp' : 'floatDown';
      flower.style.top = isUp ? 'auto' : '-10vh';
      flower.style.bottom = isUp ? '-10vh' : 'auto';
      flower.style.animationDuration = (3 + Math.random() * 3) + 's';
  
      document.body.appendChild(flower);
  
      setTimeout(() => {
        flower.remove();
      }, 6000);
    }
  
    // Initial burst
    for (let i = 0; i < 200; i++) {
      createFlower();
    }
  
    // Continuous rain
    setInterval(() => {
      createFlower();
    }, 100);
  }
  
