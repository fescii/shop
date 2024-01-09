document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('section.featured div#products-container .category')
  if (categories) {
    categories.forEach(category => {
      let productsContainer = category.querySelector('.products')
      let nextBtn = category.querySelector('.nav#right-nav')
      let prevBtn = category.querySelector('.nav#left-nav')

      nextBtn.addEventListener('click', ev => {
        ev.preventDefault()
        ev.stopPropagation()

        productsContainer.scrollBy({
          left: 300,
          behavior: "smooth"
        })
      })

      prevBtn.addEventListener('click', ev => {
        ev.stopPropagation()
        ev.preventDefault()

        productsContainer.scrollBy({
          left: -300,
          behavior: "smooth"
        })
      })
    })			
  }

  const video = document.querySelector("video#background-video");
  if (video) {
    video.playbackRate = 0.5;
  }


  // Slider
  const dots = document.querySelectorAll('div.categories > div.category.long > .dots > span.dot');
  let activeDot = document.querySelector('div.categories > div.category.long > .dots > span.dot.active');
  const slides = document.querySelectorAll('div.categories > div.category.long > .slide');
  let currentIndex = 0;
  let reverse = 1; // 1 for forward, -1 for backward

  if (dots && activeDot && slides) {
    function showSlide(index) {
      if (dots && activeDot){
        activeDot.classList.remove('active')
        dots[index].classList.add('active')
        activeDot = dots[index]
      }
      slides.forEach((slide, i) => {
        if( !index === i) {
          const offset = -(i - index)  * 100 * reverse;
          slide.style.transform = `translateX(${offset}%)`;
        }
        else{
          const offset = -index  * 100;
          slide.style.transform = `translateX(${offset}%)`;
        }
      });
   }
  
    function nextSlide() {
      if (currentIndex >= 3){
        reverse = -1 // Reverse direction at the start or end
        //currentIndex += reverse
      }
      else if(currentIndex <= 0) {
        reverse = 1; // Reverse direction at the start or end
        //currentIndex += reverse
      }
  
      currentIndex += reverse;
  
  
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 2500); // Adjust the interval (in milliseconds) for automatic sliding
  }

  // Switcher
  const numbers = document.querySelectorAll('body > main.main > section.landing > .numbers > span.no');
  let activeNo = document.querySelector('body > main.main > section.landing > .numbers > span.no.active');
  const switches = document.querySelectorAll('body > main.main > section.landing > .content-one');
  let switchIndex = 0;
  let flow = 1; // 1 for forward, -1 for backward
  
  if (switches) {
    function showSwitch(index) {
      if (numbers && activeNo){
        activeNo.classList.remove('active')
        numbers[index].classList.add('active')
        activeNo = numbers[index]
      }
      switches.forEach((switchItem, i) => {
        if(!index === i) {
          console.log(`Running\n Index: ${index} --- i:${i}`)
          const offset = -(i - index)  * 100 * flow;
          switchItem.style.transform = `translateX(${offset}%)`;
        }
        else{
          const offset = -index  * 100;
          switchItem.style.transform = `translateX(${offset}%)`;
        }
      });
    }
    
    function nextSwitch() {
      if (switchIndex >= 4){
        flow = -1 // Reverse direction at the start or end
        //currentIndex += reverse
      }
      else if(switchIndex <= 0) {
        flow = 1; // Reverse direction at the start or end
        //currentIndex += reverse
      }
    
      switchIndex += flow;
    
    
      showSwitch(switchIndex);
    }
    
    setInterval(nextSwitch, 6000); // Adjust the interval (in milliseconds) for automatic sliding
  }

})

