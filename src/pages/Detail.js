import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import useGetDetail from '../hooks/useGetDetail.hook';

const Detail = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useGetDetail(id, setIsLoading, setData)

  if (isLoading) {
    return (
        <div className='grid h-screen place-items-center'>
            <ReactLoading type="spin" color="red" />
        </div>
    );
  }
  return (
    <div className="py-8 shadow-inner">
      <button onClick={() => navigate(-1)} className="fixed top-20 left-10 border-red-900 bg-red-900 text-white text-lg font-bold px-4 py-2 hover:text-red-900 hover:bg-white rounded-full transition duration-300 ease-in-out">
          <FaAngleLeft />
      </button>

      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <img src={data.Poster} alt="Movie Poster" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <h1 className="text-4xl font-semibold leading-tight mb-2 text-gray-800">{data.Title}</h1>
            <p className="text-sm font-medium tracking-tight text-gray-600 mb-2">{data.Year}</p>
            <div className="text-xl font-semibold leading-tight mb-2 text-gray-600">Overview</div>
            <p className="text-gray-600 leading-relaxed mb-8">
              {data.Plot}
            </p>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <div className="text-xl font-semibold leading-tight mb-2 text-gray-600">Director</div>
                <div className="text-gray-600 leading-relaxed">{data.Director}</div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="text-xl font-semibold leading-tight mb-2 text-gray-600">Cast</div>
                <div className="text-gray-600 leading-relaxed">{data.Actors}</div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="text-xl font-semibold leading-tight mb-2 text-gray-600">Genres</div>
                <div className="text-gray-600 leading-relaxed">Action, Adventure, Sci-Fi</div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="text-xl font-semibold leading-tight mb-2 text-gray-600">Released</div>
                <div className="text-gray-600 leading-relaxed">{data.Released}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail