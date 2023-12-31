import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { images } from "../constants";
import { logout } from '../store/actions/user';

const navItemsInfo = [
    { name: "Home", type: "link", href: "/" },
    { name: "Project", type: "link", href: "/project" },
    { name: "Harga", type: "link", href: "/harga" },
    { name: "Ketentuan", type: "link", href: "/ketentuan" },
    { name: "Tentang", type: "dropdown", items: [{ title: "Tentang Kami", href: "/tentang" }, { title: "Hubungi Kami", href: "/kontak" }] },
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
                    <Link to={item.href} className='px-4 py-2'>
                        {item.name}
                    </Link>
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
                        <ul className="bg-dark-light lg:bg-primary text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                            {item.items.map((page, index) => (
                                <Link key={index} to={page.href} className="hover:bg-white lg:hover:bg-[#ffc05b] hover:text-dark-light lg:hover:text-white px-4 py-2 text-white">
                                    {page.title}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    );
};

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [navIsVisible, setNavIsVisible] = useState(false);
    const userState = useSelector((state) => state.user);
    const [profileDropdown, setProfileDropdown] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
            <header className='container mx-auto px-5 flex justify-between py-4 items-center mb-4'>
                <Link to="/">
                    <img src={images.Logo} alt="Logo" className="w-40" />
                </Link>
                <div className='lg:hidden z-50'>
                    {navIsVisible ? (
                        <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler} />
                    ) : (
                        <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />
                    )}
                </div>
                <div className={`${navIsVisible ? "right-0" : "-right-full"
                    } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-soft lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                    <ul className='text-white lg:text-primary items-center gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold'>
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </ul>
                    {userState.userInfo ? (
                        <div className='text-white lg:text-primary items-center gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold'>
                            <div className='relative group'>
                                <div className='flex flex-col items-center '>
                                    <button
                                        className="flex gap-x-1 items-center lg:mt-0 mt-5 border-2 bg-dark-light lg:bg-primary lg:border-primary border-dark-light hover:border-white px-6 py-2 rounded-full lg:text-white text-white font-semibold lg:hover:bg-[#ffc05b] hover:bg-white hover:text-dark-light lg:hover:text-white transition-all duration-300"
                                        onClick={() => setProfileDropdown(!profileDropdown)}>
                                        <span>Akun</span>
                                        <MdKeyboardArrowDown />
                                    </button>
                                    <div className={`${profileDropdown ? "block" : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                                        <ul className="bg-dark-light lg:bg-primary text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                                            {userState?.userInfo?.admin && (
                                                <button
                                                    onClick={() => navigate("/dashboard")}
                                                    type='button'
                                                    className="hover:bg-white lg:hover:bg-[#ffc05b] hover:text-dark-light lg:hover:text-white px-4 py-2 text-white">
                                                    Dashboard
                                                </button>
                                            )}
                                            <button
                                                onClick={() => navigate("/profile")}
                                                type='button'
                                                className="hover:bg-white lg:hover:bg-[#ffc05b] hover:text-dark-light lg:hover:text-white px-4 py-2 text-white">
                                                Profile
                                            </button>
                                            <button onClick={logoutHandler} type='button' className="hover:bg-white lg:hover:bg-[#ffc05b] hover:text-dark-light lg:hover:text-white px-4 py-2 text-white">
                                                Logout
                                            </button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className='lg:mt-0 mt-5 border-2 bg-dark-light lg:bg-primary lg:border-primary border-dark-light hover:border-white px-6 py-2 rounded-full lg:text-white text-white font-semibold lg:hover:bg-[#ffc05b] hover:bg-white hover:text-dark-light lg:hover:text-white transition-all duration-300'>
                            Sign in
                        </button>
                    )}
                </div>
            </header>
        </section>
    )
}

export default Header
