import React from 'react'
//import appwriteService from "../appwrite/config"

function Card({id, from, avatar, subject, date}) {
    
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
            <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                    <img src={avatar} alt="" />
                </div>
                <div className="ml-4">
                    <p className="font-bold">{from} &lt;{from}&gt;</p>
                    <p className="text-sm text-gray-500">Subject: <span className="font-semibold text-gray-800">{subject}</span></p>
                </div>
            </div>
        
            <p className="text-gray-700 mb-4">Aenean ut odio eu risus sollicitudin vehicula volutpat vel ante</p>
            
            <div className="text-sm text-gray-500 flex justify-between">
                <span> {date} </span>
                <a href="#" className="text-pink-500 font-semibold">Favorite</a>
            </div>
        </div>
    </div>

  )
}


export default Card