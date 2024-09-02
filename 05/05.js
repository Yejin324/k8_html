document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('button');
  const img = document.querySelector('#msg > img');
  
  btn.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;

    img.setAttribute('src', `../img/${n}.png`); //setter 값을 바꿀 수 있다. getter(getAttribute) 값을 가져올 수 있다
    img.setAttribute('alt', `${n}`);
  })
});