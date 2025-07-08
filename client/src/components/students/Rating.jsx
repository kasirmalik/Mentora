import React, { useEffect, useState } from 'react'

function Rating({initailRating,onRate}) {
  const [rating, setRating] = useState(initailRating || 0);
  const handleRating = (value)=>{
    setRating(value);
    if (onRate) onRate(value) 
  }
useEffect(() => {
  
  if(initailRating){
    setRating(initailRating)
  }
}, [initailRating]);
  return (
    <div>
      {Array.from({length:5},(_,index)=>{
        const starValue = index + 1;
        return (
          <span key={index} className={`text-xl sm:text-2xl cursor-pointer transition-colors ${starValue <= rating ? 'text-yellow-500':'text-gray-500'} `} onClick={()=>handleRating(starValue)}>
            
          </span>
        )
      })}
    </div>
  )
}

export default Rating
