let obj = {apple:'🍎', carrot:'🥕', banana:'🍌',}

console.log(obj['apple']);
console.log(obj.apple);

console.log('for..in 사용')
for(let k in obj){
   console.log(`${k} => ${obj[k]}`)
}

console.log('for..of 사용')
for(let k of Object.keys(obj)){
  console.log(`${k} => ${obj[k]}`)
}

console.log('for..of values 사용')
for(let k of Object.values(obj)){
  console.log(`${k}`)
}

console.log('for..of entries 사용')
for(let [k, item] of Object.entries(obj)){
  console.log(`${k} => ${item}`)
}

//자료 추가
obj['수박'] = '🍉';
console.log(obj);
//자료 변경
obj['수박'] = '🍈';
console.log(obj);
//자료 삭제
delete obj['수박'];
console.log(obj);

//object 병합
obj2 = {orange: '🍊'};
obj = {...obj2, ...obj} //결과> 🍊, 🍎, 🥕, 🍌
console.log(obj)