import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Collection from './pages/Collection.jsx';
import Contact from './pages/Contact.jsx';
import Product from './pages/Porduct.jsx'
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Order from './pages/Orders.jsx';
import Login from './pages/Login.jsx';
import './App.css';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     
      <Navbar />
       <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/porduct/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/order/:orderId' element={<Order />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;