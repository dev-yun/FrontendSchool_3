// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)

// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)

// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.

// 4. error 처리를 해주세요.

// Promise
fetch('http://test.api.weniv.co.kr/mall')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((e) => console.log(e.productName));
    return data;
  })
  .then((data) => {
    data.forEach((e) => {
      if (e.price >= 10000) {
        console.log(e);
      }
    });

    return data;
  })
  .then((data) => {
    data.forEach((e) => {
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      h2.innerText = e.productName;
      p.innerText = e.price;
      document.body.appendChild(h2);
      document.body.appendChild(p);
    });
  })
  .catch((error) => {
    console.error('에러발생 !!' + error);
  });

// async
async function requestItem() {
  try {
    const response = await fetch('http://test.api.weniv.co.kr/mall');
    const result = await response.json();

    console.log(result);
    result.forEach((item) => console.log(item.productName));
    result.forEach((item) => item.price >= 10000 && console.log(item));

    const domFrag = new DocumentFragment();
    result.forEach((item) => {
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      h2.innerText = item.productName;
      p.innerText = item.price;
      domFrag.appendChild(h2);
      domFrag.appendChild(p);
    });
    document.body.appendChild(domFrag);
  } catch (error) {
    console.log('에러발생 !!' + error);
  }
}
