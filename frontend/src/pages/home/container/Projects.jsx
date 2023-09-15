import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import ProjectCard from '../../../components/ProjectCard';
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../../../services/index/posts';
import { toast } from "react-hot-toast";
import ProjectCardSkeleton from '../../../components/ProjectCardSkeleton';
import ErrorMessage from '../../../components/ErrorMessage';

const Projects = () => {
    const { data, isLoading, isError } = useQuery({
        queryFn: () => getAllPosts(),
        queryKey: ["posts"],
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    return (
        <section className='flex flex-col container mx-auto px-5 py-10'>
            <div className='flex flex-wrap md:gap-x-5 gap-y-5 justify-center pb-10'>
                {isLoading ? (
                    [...Array(3)].map((item, index) => (
                        <ProjectCardSkeleton
                            key={index}
                            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(32.5%-21px)]"
                        />
                    ))
                ) : isError ? (
                    <ErrorMessage message="Tidak dapat menampilkan halaman" />
                ) : (
                    data?.data.map((post) => (
                        <ProjectCard
                            key={post._id}
                            post={post}
                            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(32.5%-21px)]"
                        />
                    ))
                )}
            </div>
            <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg'>
                <span>Lihat lebih banyak</span>
                <FaArrowRight className='w-3 h-3' />
            </button>
        </section>
    );
};

export default Projects
