function startFlowerRain() {
    document.getElementById('message').style.display = 'none';
  
    const flowers = ['🌸', '🌼', '💐', '🌺', '🌻', '🌷'];
  
    function createFlower() {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  
      const isUp = Math.random() < 0.5;
  
      const size = 1 + Math.random() * 1.5;
      flower.style.fontSize = `${size}rem`;
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.animationName = isUp ? 'floatUpWavy' : 'floatDownWavy';
      flower.style.animationDuration = (4 + Math.random() * 3) + 's';
      flower.style.animationDelay = Math.random() * 2 + 's';
      flower.style.top = isUp ? 'auto' : '-10vh';
      flower.style.bottom = isUp ? '-10vh' : 'auto';
      flower.style.opacity = 0;
  
      document.body.appendChild(flower);
  
      setTimeout(() => {
        flower.remove();
      }, 8000);
    }
  
    for (let i = 0; i < 50; i++) createFlower();
  
    setInterval(() => {
      for (let i = 0; i < 2; i++) createFlower();
    }, 150);
  }
  
