function scrambleText(text) {
    let scrambledText = '';
    const chars = text.split('');

    while (chars.length) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      scrambledText += chars.splice(randomIndex, 1)[0];
    }

    return scrambledText;
  }

  // Function to animate the text scramble
  function animateTextScramble(element, originalText) {
    const interval = 150;
    let currentText = element.innerHTML;

    function updateText() {
      element.innerHTML = scrambleText(currentText);
    }

    function completeAnimation() {
      element.innerHTML = originalText;
      clearInterval(scrambleInterval);
    }

    const scrambleInterval = setInterval(updateText, interval);

    
    setTimeout(completeAnimation, 2000);
  }


  const titleElement = document.querySelector('.title-h1');

 
  animateTextScramble(titleElement, titleElement.innerHTML);