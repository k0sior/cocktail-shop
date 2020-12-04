import React, { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import DATA from PATH
import "./ad.css"
import { advertises } from "../../data";
// ready to use by passing json data
// displaying ads by sliding, also enables user to slide manualy

const Ad = () => {
  const [displayAds, setDisplayAds] = useState(advertises)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = displayAds.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index === lastIndex) {
      setIndex(0)
    }
  }, [index, displayAds])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => clearInterval(slider)
  }, [index])

  return (
    <div className="ads">
      {displayAds.map((item, i) => {
        const { id, name, image } = item;

        let position = "next-slide"

        if (i === index) {
          position = "active-slide"
        }

        if (i === index - 1 ||
          (index === 0 && i === displayAds.length - 1)
        ) {
          position = "prev-slide"
        }

        return (
          <div className={`${position} single-ad`} key={id}>
            <img src={image} alt={name} className="ad-img" />
          </div>
        )
      })}
      <button className="prev-btn" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next-btn" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  )
}

export default Ad;