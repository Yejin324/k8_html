const getData = (ul) => {
  console.log('getData');
  let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240908'

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.boxOfficeResult.dailyBoxOfficeList)
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

      let tm = dailyBoxOfficeList.map(item => `<li>${item.movieNm}</li>`) //it`em은 Object
      console.log(tm);
      ul.innerHTML = tm.join(''); //문자열로 변경
    })
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', ()=>{
  const ul = document.querySelector('.sect > ul');
  getData(ul);
});

