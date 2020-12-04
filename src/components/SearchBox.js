import React from 'react';
import { useGlobalContext } from "../context";

const SearchBox = () => {
  return (
    <div className="nav-search">
      <form>
        <input type="text" />
        <button className="btn btn-primary">Szukaj</button>
      </form>
    </div>
  )
}

export default SearchBox
