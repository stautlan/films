import { useState } from 'react'
import Star from './Star';
import PlaceStars from './PlaceStars';

//type Props = Star

const Stars = () => {
  const [stars, setStars] = useState<Star[]>([
    { name: "Фильм 1", count: 4 },
    { name: "Фильм 2", count: 3 },
    { name: "Фильм 3", count: 5 },
    { name: "Фильм 4", count: 1 },
    { name: "Фильм 5", count: 2 }
  ])
  return (
    <>
      <ul>
        {stars.map((item, index) => <li key={index}><p>{item.name}</p><PlaceStars count={item.count} /></li>)}
      </ul>
    </>
  )
}

export default Stars