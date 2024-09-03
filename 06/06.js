document.addEventListener('DOMContentLoaded', ()=>{

  const btn = document.querySelectorAll('.clickbtn > button');
  const img = document.querySelectorAll('.image img');
  const result = document.querySelector('#result > a');
  // const imgCOM = document.querySelector('#com img');
  // const imgUSER = document.querySelector('#user img');

  
  console.log(img);

  for (let bt of btn){
    bt.addEventListener('click', ()=>{
      let comN = Math.floor(Math.random() * 6) + 1;
      let userN = parseInt(bt.textContent.charAt(0));
      //bt.textContent : bt의 문자열 추출 / charAt(0) : 0번째 문자열 추출 / parseInt : 데이터 타입 'char' type을 Int 로 변환

      img[0].setAttribute('src', `../img/${comN}.png`); 
      img[0].setAttribute('alt', `${comN}`);

      img[1].setAttribute('src', `../img/${userN}.png`);
      img[1].setAttribute('alt', `${userN}`);

      // imgCOM.setAttribute('src', `../img/${comN}.png`); 
      // imgCOM.setAttribute('alt', `${comN}`);
      // imgUSER.setAttribute('src', `../img/${userN}.png`);

      if(userN === comN){
        result.innerHTML = '맞음';
      }
      else {
        result.innerHTML = '틀림';
      }
    });
  }
});