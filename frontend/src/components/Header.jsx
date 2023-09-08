import React from 'react';
import { images } from "../constants";

const navItemInfo = [
    {name: "Home"},
    {name: "Articles"},
    {name: "Pages"},
    {name: "Pricing"},
    {name: "Faq"}
]

const NavItem = ({ name }) => {
    return (
        <li className='relative group'>
            <a href="/" className='px-4 py-2'>Home</a>
            <span className="text-yellow-300 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">/</span>
        </li>
    );
};

const Header = () => {
    return (
        <section>
            <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
                <div>
                    <img src={images.Logo} alt="Logo" width="150px" />
                </div>
                <div className='flex gap-x-9 items-center'>
                    <ul className='flex gap-x-2 font-semibold'>
                        {navItemInfo.map((item) =>(
                            <NavItem key={item.name} name={item.name} />
                        ))}
                    </ul>
                    <button className='border-2 border-yellow-300 px-6 py-2 rounded-full text-yellow-300 font-semibold hover:bg-yellow-300 hover:text-white transition-all duration-300'>Sign in</button>
                </div>
            </header>
        </section>
    )
}

export default Header
