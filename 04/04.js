//dom 생성된 후 이벤트 감지
// document.addEventListener('DOMContentLoaded', ()=>{});
document.addEventListener('DOMContentLoaded', ()=>{
  //버튼 요소 가져오기
  const btn1 = document.getElementById('btn1'); //id를 가져온다
  const btn2 = document.querySelector('#btn2'); //selector #
  const btn3 = document.querySelector('#btn3'); //selector #
  const msg = document.querySelector('#msg');
  //버튼 이벤트 달기
  btn1.addEventListener('click', ()=>{ //click 이벤트 발생 시
    alert(btn1.innerHTML);            //해당 코드 실행_button 내의 html 텍스트 가져오기
  });
  btn2.addEventListener('click', ()=>{
    alert(btn2.textContent);           //해당 코드 실행_button 내의 텍스트 가져오기
  });
  btn3.addEventListener('click', ()=>{
    // msg.innerHTML = '<h2>랜덤수생성</h2>';          //해당 코드 실행_button 내의 텍스트 가져오기
    let n = Math.floor(Math.random() * 6) + 1; //1~6 중 랜덤 수 생성
    console.log('n=', n);  //개발자 환경에서 확인 가능, 배포 시에는 삭제해야함.

    msg.innerHTML = `<h2>${btn3.textContent}:<span>${n}</span></h2>`
  });
});