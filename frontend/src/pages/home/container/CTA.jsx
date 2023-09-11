import React from 'react';
import { images } from '../../../constants';

const CTA = () => {
    return (
        <div>
            <>
                <svg className='w-full h-auto max-h-40 translate-y-[1px]' preserveAspectRatio='none' viewBox="0 0 2160 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Wave" fillRule="evenodd" clipRule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#FFD369" />
                </svg>
                <section className='relative bg-dark-hard px-5'>
                    <div className='container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center'>
                        <div className='col-span-12 lg:col-span-6 lg:ml-10'>
                            <h2 className='text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left'>Dapatkan informasi terbaru lainnya pada email kamu setiap minggunya.</h2>
                            <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0'>
                                <input type="text" className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light' placeholder='Masukan email anda' />
                                <button className='px-4 py-3 rounded-lg w-full bg-dark-light text-white font-bold md:w-fit md:whitespace-nowrap'>Kirim</button>
                            </div>
                            <p className='text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left'>
                                <span className='font-bold italic text-dark-light md:not-italic md:font-normal md:text-dark-light'>Dapatkan balasan langsung</span> ketika kamu kirim email jam 8 pagi hingga pukul 10 malam.
                                Jika kirim email setelah lewat jam 10 malam, kami akan balas dihari berikutnya.
                            </p>
                        </div>
                        <div className='col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last'>
                            <div className='w-3/4 mx-auto relative'>
                                <div className='w-1/2 h-1/2 bg-[#ffea73] rounded-lg absolute -top-[10%] -right-[8%]' />
                                <div className='w-1/2 h-1/2 bg-[#ffea73] rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]' />
                                <div className='w-full rounded-xl bg-white p-3 z-[1] relative'>
                                    <img src={images.CtaImage} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
                                    <div className='p-5'>
                                        <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Social Media</h2>
                                        <p className='text-dark-light mt-3 text-sm md:text-lg'>Kalian juga bisa hubungi social media kami.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default CTA
