import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
