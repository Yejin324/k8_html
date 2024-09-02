const ClickTest = () => {
  alert(`${n}`);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const btn1 = document.querySelector('#btn1');
  const btn2 = document.querySelector('#btn2');
  const btn3 = document.querySelector('#btn3');
  const btn4 = document.querySelector('#btn4');
  const btn5 = document.querySelector('#btn5');
  const btn6 = document.querySelector('#btn6');

  const img = document.querySelector('#msg > img');
  const img2 = document.querySelector('#user > img');

  const result = document.querySelector('#result');
    
  btn1.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;
    let m = btn1.innerHTML;
    
    img.setAttribute('src', `../img/${n}.png`); //setter 값을 바꿀 수 있다. getter(getAttribute) 값을 가져올 수 있다
    img.setAttribute('alt', `${n}`);
    img2.setAttribute('src', `../img/${m}.png`);

    if (n === m) result.innerHTML = '맞음';
    else result.innerHTML = '틀림';
  })
  btn2.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;
    let m = btn2.innerHTML;

    img.setAttribute('src', `../img/${n}.png`); //setter 값을 바꿀 수 있다. getter(getAttribute) 값을 가져올 수 있다
    img.setAttribute('alt', `${n}`);
    img2.setAttribute('src', `../img/${m}.png`);
  })
  btn3.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;

    img.setAttribute('src', `../img/${n}.png`); //setter 값을 바꿀 수 있다. getter(getAttribute) 값을 가져올 수 있다
    img.setAttribute('alt', `${n}`);
    img2.setAttribute('src', `../img/3.png`);
  })
  btn4.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;

    img.setAttribute('src', `../img/${n}.png`); //setter 값을 바꿀 수 있다. getter(getAttribute) 값을 가져올 수 있다
    img.setAttribute('alt', `${n}`);
    img2.setAttribute('src', `../img/4.png`);
  })
  btn5.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;

    img.setAttribute('src', `../img/${n}.png`); //setter 값을 바꿀 수 있다. getter(getAttribute) 값을 가져올 수 있다
    img.setAttribute('alt', `${n}`);
    img2.setAttribute('src', `../img/5.png`);
  })
  btn6.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;

    img.setAttribute('src', `../img/${n}.png`); //setter 값을 바꿀 수 있다. getter(getAttribute) 값을 가져올 수 있다
    img.setAttribute('alt', `${n}`);
    img2.setAttribute('src', `../img/6.png`);
  })
});