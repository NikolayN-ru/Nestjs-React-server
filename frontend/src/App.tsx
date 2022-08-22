import React, { createContext, FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/WrapperComponents/Footer/Footer';
import Header from './components/WrapperComponents/Header/Header';
import Main from './pages/Main/Main';
// import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Needles from './pages/Needles/Needles';
import Product from './pages/Product/Product';
import Wares from './pages/Wares/Wares';
import Person from './pages/Person/Person';
import ExtraHeader from './components/ExtraHeader/ExtraHeader';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Store from './store/store';

interface IStore {
  store: Store,
}

const store = new Store();

export const Context = createContext<IStore>({
  store,
});


const About = React.lazy(() => import('./pages/About/About'));


const App: FC = () => {
  return (
    <Context.Provider value={{
      store
    }}>
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
          <Route path="/yarn" element={<Main />} />
          <Route path="/needles" element={<Needles />} />
          <Route path="/product" element={<Wares />} />
          <Route path="/" element={<Main />} />
          <Route path="/item/:itemId" element={<Product />} />
          <Route path="/login" element={<Person />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;
