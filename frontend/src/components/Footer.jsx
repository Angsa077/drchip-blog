import React from 'react';
import {  BsInstagram, BsYoutube, BsTiktok } from 'react-icons/bs';
import {  AiOutlineCopyrightCircle } from 'react-icons/ai';
import { images } from '../constants';

const Footer = () => {
    return (
        <section className='bg-dark-light'>
            <footer className='container mx-auto grid grid-cols-10 px-14 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
                <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                    <h3 className='text-primary font-bold md:text-lg'>Produk</h3>
                    <ul className='text-white text-sm mt-5 space-y-4 md:text-base'>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Landing Page</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Fitur</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Dokumentasi</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Program Referal</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Harga</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                    <h3 className='text-primary font-bold'>Layanan</h3>
                    <ul className='text-white text-sm mt-5 space-y-4'>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Konsultasi</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Analisis</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Desain</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Perbaikan</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
                    <h3 className='text-primary font-bold'>Perusahaan</h3>
                    <ul className='text-white text-sm mt-5 space-y-4'>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Tentang</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Tim</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Ketentuan</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Karir</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-5 md:col-span-4 lg:col-span-2'>
                    <h3 className='text-primary font-bold'>Produk</h3>
                    <ul className='text-white text-sm mt-5 space-y-4'>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Lisensi</a>
                        </li>
                        <li>
                            <a href="/" className='text-white hover:text-primary'>Changelog</a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
                    <img src={images.Logo} alt="logo" className='brightness-0 invert mx-auto md:mx-0' />
                    <p className='text-sm text-white text-center md:text-center lg:text-center mt-4 md:text-base lg:text-sm'>Buat modern website yang cepat dengan Dr Chip</p>
                    <ul className='flex justify-center items-center mt-5 space-x-4'>
                        <li>
                            <a href="/"><BsInstagram className='w-6 h-auto text-white hover:text-primary' /> </a>
                        </li>
                        <li>
                            <a href="/"><BsYoutube className='w-6 h-auto text-white hover:text-primary' /> </a>
                        </li>
                        <li>
                            <a href="/"><BsTiktok  className='w-6 h-auto text-white hover:text-primary' /> </a>
                        </li>
                    </ul>
                </div>

                <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
                    <div className='bg-primary text-white p-3 rounded-full'>
                        <AiOutlineCopyrightCircle className='w-7 h-auto'/>
                    </div>
                    <p className='font-bold italic text-white'>
                        Copyright 2023. By: drchip.id
                    </p>
                </div>
            </footer>
        </section>
    )
}

export default Footer
