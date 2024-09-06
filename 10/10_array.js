let arr = [1,2,3,4,5];
//let arr = new Array;

console.log('arr = ', arr);
console.log('arr 개수 ', arr.length);

//배열 요소 접근
console.log('첫번째 요소 접근 : ', arr[0]);
console.log('두번째 요소 접근 : ', arr[1]);

//배열의 전체 요소에 접근 : 배열의 순회
for(let i in arr){ //for...in 은 index num 호출
  console.log(`${parseInt(i)+1}번째 : ${arr[i]}`);
}

for(let i of arr){//for...of는 index내 요소 호출
  console.log(`${i} : ${i % 2 == 0 ? "짝" : "홀"}`);
}

for(let [i, item] of arr.entries()){//entries()는 값을 2개 //구조분해
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
}

//배열에서 호출할 수 있는 method
arr.forEach((item, i) => { //항목이 먼저 나오고, 다음에 index 값이 옴.
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
});

//arr = []; : arr 내의 요소를 모두 지워줌. 초기화.
// arr.length = 0; //초기화. arr 비워줌.
// console.log('arr = ', arr);

//배열의 마지막에 데이터 추가
arr.push(6)
console.log('arr push : ', arr);

//배열의 마지막 데이터 삭제
arr.pop()
console.log('arr pop : ', arr);

//배열의 첫번째에 데이터 추가
arr.unshift(6)
console.log('arr unshift : ', arr);

//배열의 첫번째 데이터 삭제
arr.shift(6)
console.log('arr shift : ', arr);

//splice(index, index부터의 갯수)
// let arr2 = arr.splice(2,2) //두번째 요소를 포함한 두 번째 순서의 요소를 잘라냄 -> arr2에 넣어줌.
// console.log('arr splice : ', arr); //결과: arr [1, 2, 5]
// console.log('arr splice : ', arr2); //결과: arr2 [3, 4]

//특정 위치의 요소 변경 ('3' -> 'a') 결과: [1, 2, 'a', 4, 5]
arr.splice(2,1,'a');
console.log('arr splice : ', arr);
 
//특정 위치에 요소 추가 () 결과: [1, 2, 3, 'a', 4, 5]
arr.splice(2,0,3);
console.log('arr splice : ', arr);

// for(let item of arr){
//   let item2 = item * 2;
//   arr.push(item2);
// }
// console.log('arr for of 결과: ', arr2);

arr = [1,2,3,4,5];
arr2 = arr.map((item)=>{
  let item2 = item * 2;
  return item2;
});
console.log('arr map 결과: ', arr2);

//call back 함수의 매개변수가 1개이면 () 생략 가능
//call back 함수의 body에 return만 있으면 {}와 return 생략 가능
arr2 = arr.map((item,i)=> item * i);
console.log('arr map 결과: ', arr2);

arr2 = arr.map(item=> item %2 == 0 ? "짝" : "홀");
console.log('arr map 결과: ', arr2);

arr2=[];
for(let item of arr){
  if(item % 2 == 0) arr2.push(item);
}
console.log('arr for of(filter) 결과: ', arr2);

arr2 = arr.filter(item=> item %2 == 0);
console.log('arr filter 결과: ', arr2);

arr = [4,5,2,1,3]
console.log(`${arr} => 정렬 ${arr.sort((a,b) => b-a)}`); //결과: 정렬 5,4,3,2,1
console.log(`${arr} => 정렬 ${arr.sort()}`); //결과: 정렬 1,2,3,4,5