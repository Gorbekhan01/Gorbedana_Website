// components/Navbar.jsx
import React from 'react';
import Logo from '../assets/Pics/Group.svg';

const Navbar = () => {
    return (
        <nav className="fixed top-7 left-1/2 transform -translate-x-1/2 h-18 w-[80%] max-w-4xl z-50 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xs rounded-full px-4 py-2">
            <div className="absolute bottom-2 left-0 w-full px-10 flex items-center justify-between align-middle text-white">
                <img src={Logo} alt="Logo" className="w-14 h-14 " />
                <a className="rounded-full font-bold bg-indigo-600 px-8 py-3 text-sm text-white transition hover:scale-110 hover:shadow-xl hover:bg-amber-50 hover:text-indigo-600  backdrop-blur-xl focus:ring-3 focus:outline-none"
                    href="#">
                    حمایت
                </a>
            </div>

        </nav>

    );
};

export default Navbar;
