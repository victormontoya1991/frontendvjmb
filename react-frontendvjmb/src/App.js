import './App.scss';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './components/UI/organisms/Header/Header';
import ErroPage from './components/Page/Err404/Err404';
import TransactionList from './components/Page/TransactionList/TransactionList';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={ <TransactionList /> }/>
          <Route path="*" element={<ErroPage /> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
