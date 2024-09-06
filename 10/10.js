const disp = (divNum, divPlus, divBonus, dsp)=>{
  divNum.style.display = dsp;
  divPlus.style.display = dsp;
  divBonus.style.display = dsp;
}

document.addEventListener('DOMContentLoaded', ()=>{

  const divNum = document.querySelector('#divNum');
  const divPlus = document.querySelector('.divplus');
  const divBonus = document.querySelector('#divBonus');
  const btn = document.querySelector('#buttondiv button');

  //요소 숨기기
  // divNum.style.display = 'none';
  // divPlus.style.display = 'none';
  // divBonus.style.display = 'none';
  disp(divNum, divPlus, divBonus, 'none');

  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    // while(arrLT.length < 7){
    //   let randomnum = Math.floor(Math.random() * 45) + 1;
    //   console.log('randomnum');
    //   if(arrLT.includes(randomnum)){
    //     continue;
    //   } else {
    //     arrLT.push(randomnum);
    //   }
    // }
    let arrLT = [];
    while(arrLT.length < 7){
      let randomnum = Math.floor(Math.random() * 45) + 1;
      if(!arrLT.includes(randomnum)){
        arrLT.push(randomnum);
      }
    }

    let arrBonus = arrLT.splice(6,1);
    arrLT.sort((a,b) => a-b);
    console.log(arrBonus);

    arrLT = arrLT.map(item => `<span class = 'sp${Math.floor(item/10)}'>${item}</span>`);
    arrLT = arrLT.join('');

    divNum.innerHTML = arrLT;
    console.log(arrLT);

    arrBonus = arrBonus.map(item => `<span class = 'sp${Math.floor(item/10)}'>${item}</span>`);
    arrBonus = arrBonus.join('');
    divBonus.innerHTML = arrBonus;

    disp(divNum, divPlus,divBonus, 'block');
  });
});