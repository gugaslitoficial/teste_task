'use client'

import { IoIosBookmarks } from "react-icons/io";
import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Home() {

    const [query, setQuery] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Adicione a lógica para lidar com a pesquisa
        console.log('Searching for:', query);
    };

    const handleAddEventClick = () => {
        setShowForm(true);
    };

    return (
        <div className='h-full flex flex-col items-center w-full'>
            <div className='w-full h-1/6 bg-white shadow-lg p-5'>
                <div className="flex gap-3">
                    <h1 className='text-xl font-semibold gap-10'>Olá, "NOME DE USUÁRIO"</h1>
                    <IoIosBookmarks className='w-7 h-7' />
                </div>
                <h2 className='py-2 text-sm font-semibold'>A data de hoje é: xx/xx/xxx</h2>
            </div>
            <div className='border-2 w-full h-full flex flex-col items-center py-20'>
                <div className='flex flex-col w-full h-full items-center'>
                    {!showForm ? (
                        <div className='flex flex-col w-full'>
                            {/* Botão para mostrar o formulário */}
                            <div className="flex items-center justify-center">
                                <button 
                                    className='flex gap-1p-2 w-auto bg-blue-500 hover:bg-blue-600 text-white rounded-r px-4 py-2 shadow shadow-black font-semibold'
                                    onClick={handleAddEventClick}
                                >
                                    <IoMdAddCircleOutline className="w-6 h-6"/>Add New Event
                                </button>
                            </div>

                            {/* Barra de pesquisa, visível apenas quando o formulário não está exibido */}
                            <form onSubmit={handleSearch} className='flex items-center justify-center py-16 w-full'>
                                <IoSearch className="w-8 h-8 mr-2"/>
                                <input
                                    type="text"
                                    value={query}
                                    onChange={handleInputChange}
                                    placeholder="Pesquisar..."
                                    className='border border-gray-200 rounded-l px-4 py-2 w-1/3 shadow'
                                />
                                <button
                                    type="submit"
                                    className='bg-blue-500 hover:bg-blue-600 text-white rounded-r shadow px-4 py-2'
                                >
                                    Buscar
                                </button>
                            </form>
                        </div>
                    ) : (
                        // Se showForm for verdadeiro, mostra o formulário
                        <form className='flex flex-col gap-4 w-1/2'>
                            <label className='font-semibold'>Event Title:</label>
                            <input type='text' className='border-2 p-2' placeholder='Enter event title' />

                            <label className='font-bold'>Event Date:</label>
                            <input type='date' className='border-2 p-2' />

                            <label className='font-bold'>Category:</label>
                            <select className='border-2 p-2'>
                                <option value='personal'>None</option>
                                <option value='workshop'>Task</option>
                                <option value='meeting'>Lembrete</option>
                                <option value='conference'>Evento</option>
                            </select>

                            <label className='font-bold'>Event Description:</label>
                            <textarea className='border-2 p-2' rows={4} placeholder='Enter event description'></textarea>
                            <div className='flex w-full items-center justify-center gap-10'>
                                <button type='submit' className='w-1/5 border-2 p-2 bg-green-400 hover:bg-green-600 font-bold'>
                                    Save Event
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setShowForm(false)}
                                    className='w-1/5 border-2 p-2 bg-gray-300 hover:bg-gray-500 font-bold'
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}