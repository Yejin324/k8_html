//문자열 연습
let s = 'Hello JS!';

console.log('문자열 : ', s);
console.log('문자열 길이 : ', s.length);
console.log('문자열 대문자 변환 : ', s.toUpperCase());
console.log('숫자 확인 : ', isNaN(s));
console.log('첫번째글자 : ', s[0]);
console.log('첫번째글자 : ', s.charAt(0));
console.log('마지막글자 : ', s[s.length - 1]);
console.log('마지막글자 : ', s.charAt(s.length - 1));
console.log('마지막글자 : ', s.slice(-1));
console.log('문자열 분리 : ', s.split('')); //배열

//문자열 순회
for(let c of s) {
  console.log(c);
  //문자열 출력
  //of는 값을 가져오는 것
}

for (let i in s){
  console.log(i, '=>', s[i]); 
  //i = index number 출력
  //in은 key(index 위치)을 가져오는 것
}

//문자열 확인
console.log('h문자열 확인 : ', s.includes('h')); //결과: false
console.log('h문자열 확인 : ', s.indexOf('h')); //결과: -1(위치가 없기 때문)
console.log('JS문자열 확인 : ', s.includes('JS')); //결과: true
console.log('JS문자열 확인 : ', s.indexOf('JS')); //결과: 6(6부터 시작)

//문자열 자르기
console.log('문자열 자르기 : ', s.substring(5,0)); //결과: Hello
console.log('문자열 자르기 : ', s.slice(5,0)); //결과: 

// s='1234';
// console.log('문자열 : ', s);
// console.log('숫자 확인 : ', isNaN(s));

