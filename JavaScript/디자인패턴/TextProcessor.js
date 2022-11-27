// 입력한 텍스트를 HTML문법으로 출력하는 클래스
class TextProcessor {
  constructor() {
    this.data = [];
  }

  // 시작태그, 닫는태그, 자식을 넣는 메서드
  start(data) {
    data.push('<ul>');
  }
  end(data) {
    data.push('</ul>');
  }
  addListItem(data, item) {
    data.push(`<li>${item}</li>`);
  }

  // 입력값을 데이터에 추가
  appendList(items) {
    this.start(this.data);

    for (let item of items) {
      this.addListItem(this.data, item);
    }

    this.end(this.data);
  }

  // 데이터 초기화
  clear() {
    this.data = [];
  }

  // 저장된 데이터를 콘솔로 출력
  showData() {
    console.log(this.data.join('\n'));
  }
}

const myTp = new TextProcessor();

myTp.appendList(['hello', 'JS', 'World']);
myTp.showData();

myTp.clear();
myTp.appendList(['hello', 'HTML', 'World']);
myTp.showData();
