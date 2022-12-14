// describe 함수: 테스트할 유닛들의 모음
describe('자스민 테스트입니다.', () => {
  // it 함수: 함수의 유닛 입니다. 첫번째 인자는 함수의 설명, 두번째 인자는 테스트할 함수를 전달
  it('더하기 1을 하는 함수입니다.', () => {
    const num = 30;

    // expect: 기대식. 실행할 함수의 결과값을 인자로 전달함
    // toBe 함수: 매쳐 함수이다. 내가 기대한 결과가 일치하는지 판단
    expect(plusOne(num)).toBe(num + 1);
  });
});
