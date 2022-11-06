function calendar(newYear, newMonth) {
  const time = new Date(newYear, newMonth - 1, 1);
  // 만약 2022년 11월 30일이라면 new Date(2022, 10, 31)은 1을 반환한다. (30일까지라서 다음달 1일을 반환, 28일까지라면 다음달 3일을 반환)
  // 그래서 32 - 1은 31, 32 - 2는 30, 32 - 4는 28일임을 구할 수 있음
  // const timeLength = 32 - new Date(newYear, newMonth - 1, 31).getDate();
  //하지만 (year, month, 0)으로 쉽게 구할 수 있음
  const timeLength = new Date(newYear, newMonth, 0).getDate();

  let year = time.getFullYear();
  let month = time.getMonth();
  let date = time.getDate();
  let day = time.getDay();

  const captionYear = document.querySelector('.year');
  const captionMonth = document.querySelector('.month');
  const timeEl = document.querySelector('time');
  const days = document.querySelectorAll('tr td');

  for (let i = 0; i < days.length; i++) {
    days[i].innerHTML = '&nbsp';
  }

  // 시작일부터 (요일로 구하기) 일자를 구하기 위해
  for (let i = day; i < day + timeLength; i++) {
    days[i].textContent = date++;
  }

  captionYear.textContent = year;
  captionMonth.textContent = month + 1;
  timeEl.dateTime = `${year}-${month + 1}`;
}

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
calendar(year, month);

const btns = document.querySelectorAll('button');

btns.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.contains('prev-month')
      ? calendar(year, month--)
      : calendar(year, month++);
  });
});
