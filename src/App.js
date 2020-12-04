import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Categories from './pages/Categories'
import ShopCategory from './pages/ShopCategory'
import Error from './pages/Error'
// components
import ShopItem from './components/ShopItem'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  // if (loading) {
  // return <Loading />
  // }
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/categories/:category">
          <ShopCategory />
        </Route>
        <Route path="/categories/:category/:id">
          <ShopItem />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
