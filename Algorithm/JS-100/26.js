/**우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요. */

const krPlanets = [
  '수성',
  '금성',
  '지구',
  '화성',
  '목성',
  '토성',
  '천왕성',
  '해왕성',
];

const enPlanets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
];

const krPlanet = prompt('한글 이름의 태양계 행성을 입력하세요.');

if (krPlanet.includes(krPlanet)) {
  const index = krPlanets.indexOf(krPlanet);

  console.log(enPlanets[index]);
}
