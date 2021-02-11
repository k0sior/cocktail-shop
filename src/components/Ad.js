// react
import React, { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// data
import { advertises } from "../data";

const Ad = () => {
  // eslint-disable-next-line
  const [displayAds, setDisplayAds] = useState(advertises)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = displayAds.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, displayAds])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 4000);
    return () => clearInterval(slider)
  }, [index])

  return (
    <div className="div-ads">
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
          <img
            key={i}
            className={`${position} ads`} 
            id={`${id}-id`}
            src={image}
            alt={name}
          />
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