document.addEventListener('DOMContentLoaded', ()=>{
  const num = document.querySelector('#num');
  const img = document.querySelector('.ii img');
  const btn = document.querySelector('#btn');

  // let random = Math.floor(Math.random() * 50) + 1;
  // console.log('n=', random);

  // btn.addEventListener('click', (e)=>{
  //   e.preventDefault(); //defult로 넘어가는 걸 막아줌

  //   if(num.value == random){
  //     img.setAttribute('src', `../img/good.png`);
  //   }
  //   else if(num.value > random){
  //     img.setAttribute('src', `../img/down.png`);
  //   }
  //   else{
  //    img.setAttribute('src', `../img/up.png`);
  //   }
  // });

  let random ;
  let flag = false;

  btn.addEventListener('click', (e)=>{
    e.preventDefault(); //defult로 넘어가는 걸 막아줌

    if(!flag){ // if(flag == false)
      random = Math.floor(Math.random() * 100) + 1;
      console.log('n=', random);

      flag = true; //flag가 false인 경우에만 랜덤수 구현되도록 했으니, true로 막아줌

      if(num.style.display == 'none'){ //input 박스 비활성화시 해당 코드 실행(비교 코드이므로 ==로 해야됨.)
        img.setAttribute('src', `../img/what.png`);
        num.style.display = 'inline'; //input 박스 활성화
        num.value = ''; //input 박스 내 값 초기화
        num.focus();
        btn.innerHTML='확인'; //'확인' 버튼 활성화
        return; //if 문을 빠져나가서 처음부터 실행 > what? 이미지 그대로 출력됨
      }
    }
    
    if(num.value == random){
      img.setAttribute('src', `../img/good.png`);
      num.style.display = 'none'; //input 박스 비활성화
      btn.innerHTML='번호를 다시 생성하세요.';
      flag = false; // 다시 실행가능하도록 false로 변경
    }
    else if(num.value > random){
      img.setAttribute('src', `../img/down.png`);
    }
    else{
     img.setAttribute('src', `../img/up.png`);
    }
  });
});