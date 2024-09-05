document.addEventListener('DOMContentLoaded', ()=>{

  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');

  const btn1 = document.querySelector('#btn1');
  const btn2 = document.querySelector('#btn2');

  //회문처리
  btn1.addEventListener('click', (e)=>{
    e.preventDefault();
    let s1 = txt1.value.replaceAll(' ', ''); //replaceAll: ' '을 ''로 바꾼다
    let s2 = '';

    // 반복문 이용
    // for(let i = s1.length - 1; i >= 0; i--) {
    //   s2 = s2 + s1[i];부
    // }

    s2 = s1.split('').reverse().join('');
    //split: 배열로 문자열 하나씩 출력  --> ['부','산','역']
    //reverse: 배열의 순서를 거꾸로  --> ['역','산','부']
    //join: 모든 배열을 합침  --> 역산부

    console.log(s1);
    console.log(s2);

    if(s1 === s2) txt2.value = '회문입니다.'
    else txt2.value = '회문이 아닙니다.'
    // }
  });
  btn2.addEventListener('click', (e)=>{
    e.preventDefault();

    // let s1 = txt1.value;
    // let s2 = s1.split('');
    // let sum = 0;
    
    // for(let i = 0; i < s2.length; i++){
    //   if(isNaN(s2[i]) == false){
    //     sum = sum + parseInt(s2[i]);
    //   }
    // }

    let total = 0;
    let cnt = 0;

    for(let c of txt1.value){
      if(!isNaN(c)){
        total = total + parseInt(c);
        cnt++;
      }
    }
    if(cnt == 0){
      txt2.value = '숫자가 존재하지 않습니다.';
    } else txt2.value = total;
  });
});