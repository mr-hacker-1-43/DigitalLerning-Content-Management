import React from "react";
import {AiOutlineClose} from 'react-icons/ai'

const SearchModal = ({ isOpen, onClose }) => {
    return (
        <div id="searchModel" className={`fixed inset-0 flex items-center min-h-screen backdrop-blur-sm justify-center  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="fixed inset-0 transition-opacity ">
                <div className="absolute inset-0 bg-gray-900/95 opacity-90"></div>
            </div>
            <div className="bg-transparent rounded-lg p-6 transform transition-transform ease-in-out duration-300 sm:w-4/5 md:w-3/5 lg:w-1/2 "
                style={{
                }}
            >
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-lg py-4 px-4 w-full outline-none focus:border-pink-400"
                    />
                    <button
                        className="absolute right-3 top-5 text-lg text-gray-400 hover:text-pink-400 focus:outline-none"
                        onClick={onClose}
                    ><AiOutlineClose/> </button>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
