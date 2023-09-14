import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { images, stables } from '../constants';
import { Link } from "react-router-dom";

const ProjectCard = ({ post, className }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>

            <Link to={`/project/${post.slug}`}>
                <img
                    src={post.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
                        : images.defaultPostImage
                    }
                    alt="title"
                    className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
            </Link>

            <div className='p-5'>
                <Link to={`/project/${post.slug}`}>
                    <h2 className='font-roboto font-bold text-xl text-primary md:text-2xl lg:text-[28px]'>
                        {post.title}
                    </h2>
                    <p className='text-dark-light mt-3 text-sm md:text-lg'>{post.caption}</p>
                </Link>
                <div className='flex justify-between flex-nowrap items-center mt-6'>
                    <div className='flex items-center gap-x-2 md:gap-2.5'>
                        <img
                            src={post.user.avatar
                                ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                                : images.defaultUserImage
                            }
                            alt="Post Profile"
                            className='w-9 h-9 md:w-10 md:h-10 rounded-full'
                        />
                        <div className='flex flex-col'>
                            <h4 className='font-bold italic text-primary text-sm md:text-base'>Angga Saputra</h4>
                            <div className='flex items-center gap-x-2'>
                                <span
                                    className={`${post.user.verified ? "bg-dark-soft" : "bg-red-500"} w-fit bg-opacity-20 p-1.5 rounded-full`}
                                >
                                    {post.user.verified ? (
                                        <BsCheckLg className="w-1.5 h-1.5 text-dark-soft" />
                                    ) : (<AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                                    )}

                                </span>
                                <span className='italic text-dark-light text-xs md:text-sm'>
                                    {post.user.verified ? "Verified" : "Unverified"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className='font-bold text-dark-light italic text-sm md:text-base'>
                        {new Date(post.createdAt).getDate()}{" "}
                        {new Date(post.createdAt).toLocaleString("default", {
                            month: "long",
                        })}
                    </span>
                </div>
            </div>
        </div >
    );
};

export default ProjectCard
