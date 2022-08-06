let container = document.querySelector('.container'); 

const color1 = document.querySelector('.color-1'); 
const color2 = document.querySelector('.color-2'); 

[container, color1, color2].forEach(ele => {
  console.log(ele); 
}); 

color2.addEventListener('click', ()=> {
  container.classList.add('change'); 
})

color1.addEventListener('click', ()=> {
  container.classList.remove('change'); 
})