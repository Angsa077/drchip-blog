import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

import { images } from '../constants';

const ProjectCard = ( {className} ) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
            <img src={images.Post1Image} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
            <div className='p-5'>
                <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Gallery Website ~ Kaminata</h2>
                <p className='text-dark-light mt-3 text-sm md:text-lg'>Kaminata adalah sebuah perusahaan architecture.</p>
                <div className='flex justify-between flex-nowrap items-center mt-6'>
                    <div className='flex items-center gap-x-2 md:gap-2.5'>
                        <img src={images.PostProfileImage} alt="Post Profile" className='w-9 h-9 md:w-10 md:h-10' />
                        <div className='flex flex-col'>
                            <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>Angga Saputra</h4>
                            <div className='flex items-center gap-x-2'>
                                <span className='bg-dark-soft w-fit bg-opacity-20 p-1.5 rounded-full'>
                                    <BsCheckLg className='w-1.5 h-1.5 text-dark-soft' />
                                </span>
                                <span className='italic text-dark-light text-xs md:text-sm'>
                                    Chief Technology Officer
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className='font-bold text-dark-light italic text-sm md:text-base'>10 Sept</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard
