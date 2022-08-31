import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/WrapperComponents/Footer/Footer';
import Header from './components/WrapperComponents/Header/Header';
import Main from './pages/Main/Main';
import Blog from './pages/Blog/Blog';
import Needles from './pages/Needles/Needles';
import Product from './pages/Product/Product';
import Wares from './pages/Wares/Wares';
import Person from './pages/Person/Person';
import ExtraHeader from './components/ExtraHeader/ExtraHeader';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';

import BlogItem from './pages/BlogItem.tsx/BlogItem';
import AddProduct from './pages/AddProduct/AddProduct';
import Master from './pages/Master/Master';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';

const About = React.lazy(() => import('./pages/About/About'));


const App: FC = () => {

  return (
    <Router>
      <ExtraHeader />
      <Header />
      <Routes>
        <Route path="/about" element={
          <React.Suspense fallback='loading'>
            <About />
          </React.Suspense>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/master" element={<Master />} />
        <Route path="/blog-item/:slugItem" element={<BlogItem />} />
        <Route path="/yarn" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/needles" element={<Needles />} />
        <Route path="/product" element={<Wares />} />
        <Route path="/item/:itemId" element={<Product />} />
        <Route path="/login" element={<Person />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login/addProduct" element={<AddProduct />} />
        <Route path="/login/product/:itemId" element={<UpdateProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
