import React, { useState } from 'react'

const DiveSite = ({id, name, img, depth, desc}) => {
  const [readMore,setReadMore] = useState(false);
  return (
    <div className="flex justify-center m-4 w-80">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg h-64 w-full object-cover object-center" src={img} alt={name}/>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
      <p className='text-lg text-gray-700 mb-2'>{depth}</p>
      <p className="text-gray-700 text-base mb-4">
      {readMore?desc:`${desc.substring(0,150)}...`
                    }
                    <br/>
                <button className='text-blue-700' onClick={()=> setReadMore(!readMore)}>
                    {readMore?'show less':'read more'}
                </button>
      </p>

    </div>
  </div>
</div>
  )
}

export default DiveSite