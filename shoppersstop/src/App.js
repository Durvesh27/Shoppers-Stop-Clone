import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";


function App() {

  return (
    <div className="App" style={{position:"relative"}}>
    <Navbar/>
    <Routes> 
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/single-product/:single' element={<SingleProduct/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
