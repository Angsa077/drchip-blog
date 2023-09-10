import React from 'react';
import {  BsInstagram, BsYoutube, BsTiktok } from 'react-icons/bs';
import {  AiOutlineCopyrightCircle } from 'react-icons/ai';
import { images } from '../constants';

const Footer = () => {
    return (
        <section className='bg-dark-hard'>
            <footer className='container mx-auto grid grid-cols-10 px-14 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
                <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                    <h3 className='text-dark-light font-bold md:text-lg'>Produk</h3>
                    <ul className='text-dark-light text-sm mt-5 space-y-4 md:text-base'>
                        <li>
                            <a href="/">Landing Page</a>
                        </li>
                        <li>
                            <a href="/">Fitur</a>
                        </li>
                        <li>
                            <a href="/">Dokumentasi</a>
                        </li>
                        <li>
                            <a href="/">Program Referal</a>
                        </li>
                        <li>
                            <a href="/">Harga</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                    <h3 className='text-dark-light font-bold'>Layanan</h3>
                    <ul className='text-dark-light text-sm mt-5 space-y-4'>
                        <li>
                            <a href="/">Konsultasi</a>
                        </li>
                        <li>
                            <a href="/">Analisis</a>
                        </li>
                        <li>
                            <a href="/">Desain</a>
                        </li>
                        <li>
                            <a href="/">Perbaikan</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
                    <h3 className='text-dark-light font-bold'>Perusahaan</h3>
                    <ul className='text-dark-light text-sm mt-5 space-y-4'>
                        <li>
                            <a href="/">Tentang</a>
                        </li>
                        <li>
                            <a href="/">Tim</a>
                        </li>
                        <li>
                            <a href="/">Ketentuan</a>
                        </li>
                        <li>
                            <a href="/">Karir</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                    <h3 className='text-dark-light font-bold'>Produk</h3>
                    <ul className='text-dark-light text-sm mt-5 space-y-4'>
                        <li>
                            <a href="/">Lisensi</a>
                        </li>
                        <li>
                            <a href="/">Changelog</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
                    <img src={images.Logo} alt="logo" className='brightness-0 invert mx-auto md:mx-0' />
                    <p className='text-sm text-white text-center md:text-center lg:text-center mt-4 md:text-base lg:text-sm'>Buat modern website yang cepat dengan Dr Chip</p>
                    <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300'>
                        <li>
                            <a href="/"><BsInstagram className='w-6 h-auto' /> </a>
                        </li>
                        <li>
                            <a href="/"><BsYoutube className='w-6 h-auto' /> </a>
                        </li>
                        <li>
                            <a href="/"><BsTiktok  className='w-6 h-auto' /> </a>
                        </li>
                    </ul>
                </div>

                <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
                    <div className='bg-primary text-white p-3 rounded-full'>
                        <AiOutlineCopyrightCircle className='w-7 h-auto'/>
                    </div>
                    <p className='font-bold italic text-dark-light'>
                        Copyright 2023. By: drchip.id
                    </p>
                </div>
            </footer>
        </section>
    )
}

export default Footer
