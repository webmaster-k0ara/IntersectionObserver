'use strict';
{
  const element = document.querySelector('.animate');

  function callback(entries,obs){
    if(!entries[0].isIntersecting){
      return
    }

    const changeContents = entries[0].target.children;
    changeContents[0].classList.add('current');
    entries[0].target.classList.add('appear');
    let currentIndex = 0;
      function playContent() {
        setTimeout(() => {
          changeContents[currentIndex].classList.remove('current');
          currentIndex++;
          if(currentIndex > changeContents.length -1){
            currentIndex = 0;
          }
          console.log(changeContents[currentIndex]);
          changeContents[currentIndex].classList.add('current');
          playContent();
        },15000);
      }
      playContent();

      obs.unobserve(entries[0].target);
  }

  const observer = new IntersectionObserver(callback);

  observer.observe(element);
}