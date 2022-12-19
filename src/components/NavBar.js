import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar = ({ searchOnSubmit }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  return (
    <nav className="bg-white font-semibold flex items-center justify-between px-6 py-5" >
      <div className="flex items-center">
        <a href="/" className="text-xl tracking-tight text-red-700">Nonton</a>
      </div>
      <div className="flex">
        <form className="relative rounded-md shadow-md"  onSubmit={(e) => {navigate("/"); e.preventDefault(); if (search !== "") searchOnSubmit(search); setSearch("")}}>
          <input type="search" className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-slate-900" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
        </form>
      </div>
    </nav>
  )
}

export default NavBar