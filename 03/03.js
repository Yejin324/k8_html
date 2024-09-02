
// function 키워트로 함수 만들기
function handleClick(){
  alert('외부스크립트 : 안녕하세요');
}

//ES6부터 화살표 함수 지원함
//js는 상수(const)냐 변수(let)냐 밖에 없음
const handleClick2 = () => {
    alert('화살표 함수');
}