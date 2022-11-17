/**
https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study/6
https://www.studyin.co.kr/study/6/chat
https://www.studyin.co.kr/study/6/memo
https://www.studyin.co.kr/notice
https://www.studyin.co.kr/notice/recruit
https://www.studyin.co.kr/notice/business

https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study
https://www.studyin.co.kr/notice
 */

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Notice from './page/Notice/Notice';
import Chat from './page/Study/Chat';
import Memo from './page/Study/Memo';
import Study from './page/Study/Study';
import StudyDetail from './page/Study/StudyDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/study" element={<Study />}></Route>
        <Route path="/study/:id/" element={<StudyDetail />}></Route>
        <Route path="/study/:id/*" element={<Outlet />}>
          <Route path="chat" element={<Chat />}></Route>
          <Route path="memo" element={<Memo />}></Route>
        </Route>

        <Route path="/notice/" element={<Notice />}></Route>
        <Route path="/notice/business" element={<Home />}></Route>
        <Route path="/notice/recruit" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
