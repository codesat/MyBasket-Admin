import './App.css';
import Home from './components/Pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Route,Routes } from 'react-router-dom';
import Userlist from './components/Pages/Userlist/Userlist';
import { BrowserRouter } from 'react-router-dom';
import User from './components/Pages/User/User';
import Newuser from './components/Pages/Newuser/Newuser';
import Productslist from './components/Pages/Products/Productslist';
import Product from './components/Pages/Product/Product';
import Newproduct from './components/Pages/Newproduct/Newproduct';

function App() {
  return (
   <BrowserRouter>
    <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/users" exact element={<Userlist/>}/>
          <Route path="/user/:userid" exact element={<User/>}/>
          <Route path="/newuser" exact element={<Newuser/>}/>
          <Route path="/newproduct" exact element={<Newproduct/>}/>
          <Route path="/product/:pid" exact element={<Product/>}/>
          <Route path="/products" exact element={<Productslist/>}/>
          {/* <Route path="/" exact element={<Home/>}/> */}
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
