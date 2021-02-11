import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrashAlt, FaCartPlus } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Favorite = () => {

  const { favorite, removeFromFavorites, fromFavoriteToCart } = useGlobalContext();

  return (
    <section className="section-favorites">
      {favorite.length <= 0 && <div className="empty-favorites">
        <h2>Brak przedmiotów w ulubionych</h2>
        <Link to="/">
          <button className="btn btn-primary">Wróć do strony głównej</button>
        </Link>
      </div>
      }

      {favorite.length > 0 && <div className="favorites">
        <h2>Ulubione przedmioty</h2>
        {favorite.map((item) => {
          const { id, name, category, glass, image } = item;
          return <div className="cart-item" key={"single-fav-item" + id}>
            <div className="cart-item-info">
              <img src={image} alt="" />
              <h4 className="fav-item-name" style={{margin:'0 20px'}}>{name}</h4>
              <p
                className='fav-item-category'
                style={{ marginLeft: 15 }}
              >
                {category}
              </p>
              <p
                className='fav-item-glass'
                style={{ marginLeft: 15 }}
              >
                {glass}
              </p>
            </div>
            <div className="fav-btn-container">
              <button
                className="btn btn-danger remove-btn"
                onClick={() => removeFromFavorites(id)}
              >
                <FaTrashAlt className='fav-icon'/>
              </button>
              <button
                className="btn btn-primary"
                onClick={() => fromFavoriteToCart(id)}
              >
                <FaCartPlus className='fav-icon'/>
              </button>
            </div>
          </div>
        })}

      </div>
      }

    </section>
  )
}

export default Favorite
