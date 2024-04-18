import './App.css';
import {Route,Routes} from 'react-router-dom'

import Main from './pages/Main';
import About from './pages/About';
import MyPage from './pages/Mypage';
import NotFound from './pages/Notfound';
import Product from './pages/Product';
import './App.css';

function App() {


  /** React Router
   *  - 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 역할
   *  
   * 1) React Router 설치
   *    - npm i react-router-dom
   * 
   * 2) BrowserRouter
   *    - App 전체를 감싸줘야함
   *    - 보통은 index.js에 가서 App을 BrowserRouter로 감싸준다
   *    - 브라우저의 주소를 감지하는 역할 ★ 매우중요!!
   * 
   * 3) 내가 이동할 페이지들을 준비
   * 
   * 4) Routes - Route
   *  - Routes : 여러 Route를 가지고 있다가 사용자가 요청한 조건에 맞는 Route가 있을때, 그 Route를 렌더링한다.
   *  - Route : 여러 Route
   *  - 과거에는 Routes가 아니라 Switch를 사용했다.
   *  - Route가 가지는 필수 요소 path, element
   *    * path (경로): 사용자가 이렇게 URL을 요청했을때
   *    * element (컴포넌트) : 어떤 컴포넌트를 보여줄 것인가?
   * 
   */
  return (
    <div>
      <h1>React Router 실습하기</h1>

      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product/:num' element={<Product/>}></Route>
        {/* <Route path='/' element={</>}></Route> */}
      </Routes>


    </div>
  );
}

export default App;
