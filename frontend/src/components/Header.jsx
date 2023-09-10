import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { images } from "../constants";

const navItemsInfo = [
    { name: "Home", type: "link" },
    { name: "Project", type: "link" },
    { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
    { name: "Harga", type: "link" },
    { name: "Ketentuan", type: "link" },
];

const NavItem = ({ item }) => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdownHandler = () => {
        setDropdown((curState) => {
            return !curState;
        });
    };

    return (
        <li className='relative group'>
            {item.type === "link" ? (
                <>
                    <a href="/" className='px-4 py-2'>
                        {item.name}
                    </a>
                    <span className="cursor-pointer text-dark-light absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
                        /
                    </span>
                </>
            ) : (
                <div className='flex flex-col items-center'>
                    <button className="px-4 py-2 flex gap-x-1 items-center" onClick={toggleDropdownHandler}>
                        <span>{item.name}</span>
                        <MdKeyboardArrowDown />
                    </button>
                    <div className={`${dropdown ? "block" : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                        <ul className="bg-dark-light lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                            {item.items.map((page) => (
                                <a href="/" className="hover:bg-white lg:hover:bg-dark-light hover:text-dark-light lg:hover:text-white px-4 py-2 text-white lg:text-dark-light">
                                    {page}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    );
};

const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };

    return (
        <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
            {/* <div className="bg-primary bg-opacity-5 p-2 text-primary font-bold text-sm absolute top-0 left-0 right-0 mb-5">
                No HP: 087741001100, Email: teams@drchip.id, Alamat: Serang, Indonesia
            </div> */}
            <header className='container mx-auto px-5 flex justify-between py-4 items-center mb-4'>
                <div>
                    <img src={images.Logo} alt="Logo" className="w-40" />
                </div>
                <div className='lg:hidden z-50'>
                    {navIsVisible ? (
                        <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler} />
                    ) : (
                        <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />
                    )}
                </div>
                <div className={`${navIsVisible ? "right-0" : "-right-full"
                    } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-soft lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                    <ul className='text-white lg:text-dark-light items-center gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold'>
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </ul>
                    <button className='lg:mt-0 mt-5 border-2 bg-dark-light lg:bg-white lg:border-dark-light border-dark-light hover:border-white px-6 py-2 rounded-full lg:text-dark-light text-white font-semibold lg:hover:bg-dark-light hover:bg-white hover:text-dark-light lg:hover:text-white transition-all duration-300'>Sign in</button>
                </div>
            </header>
        </section>
    )
}

export default Header
