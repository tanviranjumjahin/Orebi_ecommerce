
import './App.css'
import { Routes, Route } from "react-router";
import Shop from './componentes/Pages/Shop'
import About from './componentes/Pages/About'
import Contacts from './componentes/Pages/Contacts'
import Home from './componentes/Pages/Home'
import RootLayouts from './componentes/layouts/RootLayout';
import Error from './componentes/Parts/Error';
import Login from './componentes/Pages/Login';
import Myaccount from './componentes/Pages/Myaccount';
import Signup from './componentes/Pages/Signup';
import Carts from './componentes/Pages/Carts';
import Checkout from './componentes/Pages/Checkout';
import ProductDescription from './componentes/Pages/ProductDescription';



function App() {


  return (
    <>


      <Routes>
        <Route element={<RootLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productdescription" element={<ProductDescription />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </>
  )
}


export default App





