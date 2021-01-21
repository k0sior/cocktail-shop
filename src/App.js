//react
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Categories from './pages/Categories'
// import SingleCategory from './pages/SingleCategory'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Error from './pages/Error'
// components
import SingleDrink from './components/SingleDrink'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Loading from './components/Loading'
//context 
import { useGlobalContext } from "./context"

function App() {

  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cat">
          <Categories />
        </Route>
        <Route path="/cat/:category">
          <Categories />
        </Route>
        <Route path="/drink/:id">
          <SingleDrink />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route>
          <Cart exact path="/cart"/>
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
