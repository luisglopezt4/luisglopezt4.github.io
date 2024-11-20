document.addEventListener('DOMContentLoaded', function () {
    const introText = document.querySelector('.intro-content');
    introText.style.opacity = 0;
    introText.style.transform = 'translateY(20px)';
    setTimeout(() => {
      introText.style.transition = 'opacity 1s, transform 1s';
      introText.style.opacity = 1;
      introText.style.transform = 'translateY(0)';
    }, 300);
  });