const centerItem = document.querySelector('.center-item'); 
const menu       = document.querySelector('.menu'); 

[centerItem, menu].forEach(elem => {console.log(elem)})

centerItem.addEventListener('mouseover', ()=> {
  menu.classList.add('change'); 
}); 

menu.addEventListener('mouseleave', ()=> {
  menu.classList.remove('change'); 
})