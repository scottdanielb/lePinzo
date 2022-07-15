import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  LogIn,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        {/* <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <LogIn />
        </Route>
        <Route exact path='/nosotros'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/productos'>
          <Products />
        </Route>
        <Route
          exact
          path='/productos/:id'
          children={<SingleProduct />}
        />
        <PrivateRoute exact path='/checkout'>
          <Checkout />
        </PrivateRoute>
        <Route path='*'>
          <Error />
        </Route> */}
        <Route path='/' element={<Home />} />
        <Route path='login' element={<LogIn />} />
        <Route path='nosotros' element={<About />} />
        <Route path='cart' element={<Cart />} />
        <Route path='productos' element={<Products />} />
        <Route path='productos/:id' element={<SingleProduct />} />
        <Route
          path='checkout'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
