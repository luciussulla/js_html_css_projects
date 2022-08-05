const container = document.querySelector('.container'); 
const signupBtn = document.querySelector('.green-bg button.first'); 

console.log(signupBtn); 

signupBtn.addEventListener('click', ()=> {
  container.classList.toggle('change'); 
});