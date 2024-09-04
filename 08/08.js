document.addEventListener('DOMContentLoaded', ()=>{
  const num = document.querySelector('#num');
  const img = document.querySelector('.ii img');
  const btn = document.querySelector('#btn');

  let random = Math.floor(Math.random() * 50) + 1;
  console.log('n=', random);

  btn.addEventListener('click', (e)=>{
    e.preventDefault(); //defult로 넘어가는 걸 막아줌

    if(num.value == random){
      img.setAttribute('src', `../img/good.png`);
    }
    else if(num.value > random){
      img.setAttribute('src', `../img/down.png`);
    }
    else{
     img.setAttribute('src', `../img/up.png`);
    }
  });
});