document.addEventListener('DOMContentLoaded', ()=>{

  const btn1 = document.querySelectorAll('.sectbtn1');
  const btn2 = document.querySelectorAll('.sectbtn2');
  const btn3 = document.querySelectorAll('.sectbtn3');
  const txt1 = document.querySelector('#txt1');

  const btn41 = document.querySelector('#sectbtn41');
  const btn42 = document.querySelector('#sectbtn42');

  //Object 생성
  let obj = {apple:'🍎', carrot:'🥕', banana:'🍌',}
  let jsonDt;

  btn41.addEventListener('click', (e)=>{
    e.preventDefault();

    jsonDt = JSON.stringify(obj);
    console.log('obj=', obj);//obj= {apple: '🍎', carrot: '🥕', banana: '🍌'}
    console.log('obj=', obj["apple"]);//obj= 🍎
    console.log('jsonDt=', jsonDt); //jsonDt= {"apple":"🍎","carrot":"🥕","banana":"🍌"}
    console.log('jsonDt=', jsonDt["apple"]);//jsonDt= undefined
  });

  btn42.addEventListener('click', (e)=>{
    e.preventDefault();

    let obj2 = JSON.parse(jsonDt);
    console.log('obj2=', obj2);//obj2= {apple: '🍎', carrot: '🥕', banana: '🍌'}
    console.log('obj2=', obj2["apple"]);//obj2= 🍎
  });

  //추가
  for(let bt of btn1){
    bt.addEventListener('click', (e)=>{
      e.preventDefault();

      let addItem = bt.innerHTML.replace('추가', ''); //replace : 바꾸기
      txt1.value = txt1. value + addItem;

      
      console.log(bt.innerHTML);
    });
  }
  //삭제
  for(let bt of btn2){
    bt.addEventListener('click', (e)=>{
      e.preventDefault();

      // 1. 방법 1
      // let addItem = bt.innerHTML.replace('삭제', ''); //replace : 바꾸기
      // txt1.value = txt1.value.replaceAll(addItem, '');

      // 2. 방법 2 (교수님)
      let addItem = bt.innerHTML.replace('삭제', ''); //replace : 바꾸기
      let tmArr = Array.from(txt1.value); //이모지형태로 분리됨.
      // let tmArr = txt1.value.split(''); //유니코드로 분리됨.

      tmArr = tmArr.filter(item => item != addItem);
      tmArr = tmArr.join('');
      txt1.value = tmArr;
      console.log(tmArr);

      // 3. 방법 3
      // let addItem = bt.innerHTML.replace('삭제', ''); //replace : 바꾸기
      // let tmArr = Array.from(txt1.value); //이모지형태로 분리됨.

      // for(let i = 0; i < tmArr.length; i++){
      //  if (tmArr[i] == addItem) tmArr[i]= '';
      // }

      // tmArr = tmArr.join('');
      // txt1.value = tmArr;
      // console.log(tmArr);
    }); 
  }
//변경
  for(let bt of btn3){
    bt.addEventListener('click', (e)=>{
      e.preventDefault();
      
      let items = bt.innerHTML.split('→'); //'문자열'을 기준으로 split
      console.log(items);

      // 방법 1
      // txt1.value = txt1.value.replaceAll(items[0], items[1]);

      // 방법 2(교수님)
      let tmArr = Array.from(txt1.value);
      tmArr = tmArr.map(item => item == items[0] ? items[1] : item);
      //Array.from을 이용하여 input box내의 텍스트를 배열로 선언함.
      //map을 이용하여 input box 배열을 그대로 가져오되, 'item == items[0]'의 조건이 일치하면 items[1]을 배열에 가져오고, 
      //일치하지 않으면 item을 그대로 가져온다(해당하는 이모지가 없을때 문자열에 변경이 생기지 않도록)

      txt1.value = tmArr.join('');
      console.log(tmArr);
    });
    
  }
});