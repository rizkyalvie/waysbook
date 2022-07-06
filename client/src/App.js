import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Pages
import Home from  './pages/home'
import Detail from './pages/detail'
import Cart from './pages/cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
