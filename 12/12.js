//OPEN API 데이터 가져오기
const getData = (setDt, ul, rdo1V)=>{
  console.log(rdo1V);
  const testAPI = '82ca741a2844c5c180a208137bb92bd7';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${setDt}`;

  if(rdo1V != 'T'){
    url = `${url}&repNationCd=${rdo1V}`;
  }
  console.log(url);
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.boxOfficeResult.dailyBoxOfficeList)
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

      let tm = dailyBoxOfficeList.map(item => 
        `<li class="mvli">
          <span class="rank">${item.rank}</span>
          <span class="movieNm">${item.movieNm}</span>
          <span class="openDt">${item.openDt}</span>
          <span class="rankInten" id="${item.rankInten == 0 ? "black" : (item.rankInten > 0 ? "blue" : "red")}">
          ${item.rankInten == 0 ? "-  " : (item.rankInten > 0 ? "▲" : "▼")} 
          ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}</span>
        </li>`) 
      ul.innerHTML = tm.join(''); 
    })
    .catch(err => console.error(err));
}

//어제 날짜 구하기 함수
const getYesterday= () => {
  const yesterday = new Date(); 
  //const는 상수라 값을 바꿀 수 없지만 setter에 의해 변경이 가능해짐
  yesterday.setDate(yesterday.getDate()-1);
  const year = yesterday.getFullYear();
  let month = yesterday.getMonth()+1;
  let day = yesterday.getDate();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;

  // month = 10;
  // month = `0${month}`.slice(-2); //끝에서 두 자리만 입력 // 010->10
  // month = `${month}`.padStart(2,0); //2자리를 만들되 2자리가 되지 않는다면 0으로 채워라
  // console.log(month); //slice, padStart는 문자열 함수이므로 백틱 사용해줘야함.

  const maxDate = `${year}-${month}-${day}`
  return maxDate;
}

const getRdo = () => {
  //radio 요소 가져오기
  const rdoT = document.querySelector('#rdoT');
  const rdoK = document.querySelector('#rdoK');
  const rdoF = document.querySelector('#rdoF');

  console.log(rdoT.checked);
  console.log(rdoK.checked);
  console.log(rdoF.checked);

  if(rdoT.checked) return rdoT.value;
  else if (rdoK.checked) return rdoK.value;
  else return rdoF.value;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sect ul');
  // const sel1 = document.querySelector('#selmovie');
  const radios = document.querySelectorAll('input[type=radio]');
  

  let yesterday = getYesterday();
  // console.log(yesterday);  // console.log(getYesterday()); 위의 결과와 같음
  
  //date 요소의 최댓값 설정 // .max는 method
  dt.max = yesterday;
  
  //date 기본 값
  dt.value = yesterday;

  //기본 첫 페이지
  getData(dt.value.replaceAll('-',''), ul, getRdo());

  dt.addEventListener('change', (e)=>{
   e.preventDefault();
    getData(dt.value.replaceAll('-',''), ul, getRdo());
  });

  // fieldset.addEventListener('click', (e)=>{
  //   e.preventDefault();
  //    getData(dt.value.replaceAll('-',''), ul, getRdo());
  //  });

  for (let radio of radios){
    radio.addEventListener('click', ()=>{
      if(radio.checked) getData(dt.value.replaceAll('-',''), ul, radio.value);
    })
  }
});