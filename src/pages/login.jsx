'use client'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-black">
        <div className="w-1/3 h-auto p-16 bg-gray-800 rounded-lg shadow-sm shadow-white">
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-white text-5xl font-bold mb-10">Login</h1>
            <input className=" w-full p-2 " placeholder="E-mail" />
            <input className=" w-full p-2" placeholder="Senha" type="password" />
              <div className="flex w-full justify-center items-center gap-10 mb-5">
                <button onClick={handleDashboardClick} className=" p-2 w-1/4 mt-2 text-white bg-blue-600 cursor-pointer hover:bg-blue-800">Sign In</button>
                <button onClick={handleSignUpClick} className=" p-2 w-1/4 mt-2 text-white bg-blue-600 cursor-pointer hover:bg-blue-800">Sign Up</button>
              </div>
          </div>
        </div>
      </div>
    )
}