import { useDispatch } from 'react-redux';
import One from './components/One/One';
import Three from './components/Three/Three';
import Two from './components/Two/Two';
import {
  changeRect,
  changeRadiusRect,
  changeRound,
} from './modules/changeRadius';

function App() {
  const dispatch = useDispatch();

  const onChangeRect = () => dispatch(changeRect());
  const onChangeRadiusRect = () => dispatch(changeRadiusRect());
  const onChangeRound = () => dispatch(changeRound());

  return (
    <main>
      <button onClick={onChangeRect}>사각형</button>
      <button onClick={onChangeRadiusRect}>둥근사각형</button>
      <button onClick={onChangeRound}>원</button>
      <br />
      <br />
      <One />
      <Two />
      <Three />
    </main>
  );
}
export default App;
