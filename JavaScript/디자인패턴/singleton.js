// 싱글턴 패턴: 오직 하나의 인스턴스만을 생성해야할때 필요한 패턴

/* 기존 class는 서로 다른 여러 인스턴스를 생성한다.
class Test {
  constructor() {

  }
}

const test1 = new Test();
const test2 = new Test();

console.log(test1 === test2) // false
*/

// 만약 instance에 할당된 값이 있다면 해당 값을 return 하기 때문에 변하지 않음
class Singleton {
  constructor(data) {
    this.data = data;

    // this.constructor => Singleton Class
    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }
}

const test1 = new Singleton();
const test2 = new Singleton();

console.log(test1 === test2); // true
