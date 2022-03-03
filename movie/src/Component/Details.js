import React from 'react'
import { useLocation } from 'react-router'
export default function Details(props) {
  // const data = props.location.state;
  // const { hed, val } = data;
  const { state } = useLocation();
  const { id, color, url, time } = state;
  return (<div>
    <div className="text-center text-white pt-[50px] bg-black h-[4000px]">
      <h1 className="text-[100px]">{id}</h1>
      <img className="ml-[200px] h-[1000px] w-[1000px]" src={url}></img>

      <p className="pl-[200px] pr-[200px] mt-[50px] text-[20px]">{color}</p>
      <div className="border-2 w-[1100px] ml-[150px] border-white"></div>
      <p className="text-[50px] text-white mt-[100px]">SHOW TIME</p>
      <p>{time}</p>
    </div>

  </div>
  )
}
