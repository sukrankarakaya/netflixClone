import React from 'react'
import NavImage from "/Image/Logo.png";
import Bell from "/Image/icone/Bell.png";
import Search from "/Image/icone/Search.png";
import Gift from "/Image/icone/Gift.png";
import Arrow from "/Image/icone/Arrow.png";
import Sukran from "/Image/Şükran.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex flex-row w-[1440px] h-[1024]  items-start py-2 px-16 justify-between">
        <div className="flex flex-row py-3 ">
          <img src={NavImage} alt="" className="w-28 h-7 " />

          <ul className="flex flex-row gap-3 px-12  ">
            <Link to="/">
              <li className="text-[#E5E5E5] font-extrabold text-sm">
                Ana Sayfa
              </li>
            </Link>
            <li className="text-[#E5E5E5] text-sm">Diziler</li>
            <li className="text-[#E5E5E5] text-sm">Filmler</li>
            <li className="text-[#E5E5E5] text-sm">Yeni ve Popiler</li>
            <li className="text-[#E5E5E5] text-sm">Listem</li>
          </ul>
        </div>
        <div className=" flex flex-row gap-5 items-center py-3 ">
          <img src={Search} alt="" className="w-5 h-5  " />
          <p className="font-sans "> Çocuk</p>

          <img src={Gift} alt="" className="w-5 h-5  " />
          <img src={Bell} alt="" className="w-5 h-5  " />

          <div className=" flex flex-row gap-2 items-center ">
            <img src={Sukran} alt="" className="w-8 h-8" />
            <img src={Arrow} alt="" className="w-4 h-2  " />
          </div>
        </div>
      </nav>
  )
}

export default Navbar