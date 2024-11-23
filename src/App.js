import './App.css';
import Header from './Pages/Header';
import AppRoutes from './Routes';  // Routes.js 파일을 임포트
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />  {/* AppRoutes 컴포넌트로 라우팅을 관리 */}
      </div>
    </BrowserRouter>
  );
}

export default App;