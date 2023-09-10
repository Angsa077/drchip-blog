import React from 'react';
import { FaArrowRight } from 'react-icons/fa'

import ProjectCard from '../../../components/ProjectCard'

const Projects = () => {
    return (
        <section className='flex flex-col container mx-auto px-5 py-10 items-center'>
            <div className='flex flex-wrap md:gap-x-5 gap-y-5 justify-center pb-10'>
                <ProjectCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(32.5%-21px)]" />
                <ProjectCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(32.5%-21px)]" />
                <ProjectCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(32.5%-21px)]" />
            </div>
            <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg'>
                <span>Lihat lebih banyak</span>
                <FaArrowRight className='w-3 h-3' />
            </button>
        </section>
    );
};

export default Projects
