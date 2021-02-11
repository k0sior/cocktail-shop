import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error">
      <h2>Błąd #404 - strona nie istnieje</h2>
      <Link to="/">
        <button className="btn btn-primary">Wróć do strony głównej</button>
      </Link>
    </section>
  )
}

export default Error
