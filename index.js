const progressFillElement = document.querySelector(".progressbar__fill");//declaring element to fill

let width = 0; //start value of fill element
const speed = 40; //interval time

const percentUp = () => { //function, updating width value, changing css style, checking clear interval
  width++;
  progressFillElement.style.width = `${width}%`;
  if (width >= 100) 
  clearInterval(interval);
}

const interval = setInterval(percentUp, speed);

