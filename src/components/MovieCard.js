import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({id, image, title, year}) => {
  const navigate = useNavigate()
  return (
    <div className="relative rounded-lg shadow-md overflow-hidden m-6 cursor-pointer hover:shadow-2xl transition duration-700 ease-in-out bg-white" onClick={() => {navigate("/"+id+"/detail")}}>
      <img className="w-full h-64 object-cover object-center" src={image} alt={title} />
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold text-red-700 mb-2">{title}</h3>
        <div className="rounded-full py-2 px-4 text-xs bg-red-700 text-white w-fit">{year}</div>
      </div>
    </div>
  )
}

export default MovieCard