import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import Complain from "./pages/complain"
import AddBook from "./pages/addBook"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/complain" element={<Complain/>}></Route>
      <Route path="/add-book" element={<AddBook/>}></Route>
    </Routes>
  );
}

export default App;
