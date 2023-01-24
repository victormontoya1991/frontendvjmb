import './App.scss';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './components/UI/organisms/Header/Header';
import ErroPage from './components/Page/Err404/Err404';
import { Footer } from './components/UI/organisms/Footer/Footer';
import Account from './components/Page/Account/Account';

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={ <Account /> }/>
            <Route path="*" element={<ErroPage /> }/>
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
