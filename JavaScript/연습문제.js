const nums = [10, 20, 30, 10, 20, 30, 40, 10];

//1.1 다음 값의 평균을 구하세요.
const average = nums.reduce((acc, cur) => (acc += cur)) / nums.length;

//1.2 다음 값의 분산를 구하세요.
const variance =
  nums.map((num) => (num - average) ** 2).reduce((acc, cur) => (acc += cur)) /
  nums.length;

// 2. 다음 string의 평균 값을 구하세요
const str = "5, 4, 10, 2, 5";
const strArr = str.split(",");
const average2 =
  strArr.map((e) => parseInt(e)).reduce((acc, cur) => (acc += cur)) /
  strArr.length;

// 3. 다음 array의 각 자리수의 합을 구하세요.
const arr = [11, 22, 33, 111, 2];
const sum = arr
  .join("")
  .split("")
  .reduce((acc, cur) => (acc += parseInt(cur)), 0);

// 4-1 반복문만 사용하여 숫자 단위 콤마 찍기
const str4 = "1234567890";
const reversedStr4 = str4.split("").reverse();
let count = 0;
for (let i = 0; i < reversedStr4.length; i++) {
  count++;
  if (count > 3) {
    reversedStr4.splice(i, 0, ",");
    count = 0;
  }
}
const result4 = reversedStr4.reverse().join("");

// 4-2 반복문만 사용하여 숫자단위 콤마 없애기
const str5 = "1,234,567,890";
let result5 = "";
for (let i = 0; i < str5.length; i++) {
  if (str5[i] !== ",") {
    result5 += str5[i];
  }
}

// 반복문 사용 안할 경우
str5.replaceAll(",", "");

// 4-3 문자열 뒤집기
const str6 = "Hello World!";
let result6 = "";
for (let i = str6.lenght - 1; i >= 0; i--) {
  result6 += str6[i];
}

// 반복문 사용 안할 경우
const result6_1 = str6.split("").reverse().join("");

// 로또 만들기
const lotto = [];
while (true) {
  const random = Math.floor(Math.random() * 45) + 1;
  if (lotto.length === 6) {
    lotto["bonus"] = random;
    break;
  }
  lotto.push(random);
}
