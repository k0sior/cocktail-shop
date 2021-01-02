import React from 'react'

//components
import Ad from "../components/Ad"
import Main from "../components/Main"

const Home = () => {
  return (
    <section className="home-page">
      <h2>Dzisiaj w polecanych</h2>
      <Ad />
      <Main />
    </section>
  )
}

export default Home
