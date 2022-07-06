import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Pages
import Home from  './pages/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
