import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { generateHTML } from '@tiptap/html';
import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Italic from '@tiptap/extension-italic';
import parse from 'html-react-parser';

import BreadCrumbs from '../../components/BreadCrumbs';
import MainLayout from '../../components/MainLayout';
import { images, stables } from '../../constants';
import SuggestedPosts from './container/SuggestedPosts';
import CommentsContainer from '../../components/comments/CommentsContainer';
import SocialShareButtons from '../../components/SocialShareButtons';
import { useQuery } from '@tanstack/react-query';
import { getAllPosts, getSinglePost } from '../../services/index/posts';
import ProjectDetailSkeleton from './components/ProjectDetailSkeleton';
import ErrorMessage from '../../components/ErrorMessage';
import { useSelector } from 'react-redux';

const ProjectDetailPage = () => {
    const { slug } = useParams();
    const userState = useSelector((state => state.user))
    const [breadCrumbsData, setbreadCrumbsData] = useState([]);
    const [body, setBody] = useState(null);

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getSinglePost({ slug }),
        queryKey: ['project', slug],
        onSuccess: (data) => {
            setbreadCrumbsData([
                { name: "Home", link: '/' },
                { name: "Project", link: '/project' },
                { name: "Project title", link: `/project/${data.slug}` },
            ]);
            setBody(
                parse(generateHTML(data?.body, [Bold, Italic, Paragraph, Document, Text])
                )
            )
        },
    });

    const { data: postsData } = useQuery({
        queryFn: () => getAllPosts(),
        queryKey: ["posts"]
    });

    return (
        <MainLayout>
            {isLoading ? (
                <ProjectDetailSkeleton />
            ) : isError ? <ErrorMessage message="Tidak dapat menampilkan halaman" /> : (
                <section className='container mx-auto max-w-7xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                    <article className='flex-1'>
                        <BreadCrumbs data={breadCrumbsData} />
                        <img
                            className='rounded-xl w-full'
                            src={data?.photo ? stables.UPLOAD_FOLDER_BASE_URL | data?.photo : images.defaultPostImage}
                            alt={data?.title}
                        />

                        <div className='mt-4 flex gap-2'>
                            {data?.categories.map((kategori) => (
                                <Link
                                    to={`/project?kategori=${kategori.name}`}
                                    className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'
                                >
                                    {kategori.name}
                                </Link>
                            ))}
                        </div>

                        <h1 className='text-xl font-medium font-roboto mt-4 text-dark-light md:text-[26px]'>{data?.title}</h1>
                        <div className='mt-4 prose prose-sm sm:prose-base'>{body}</div>
                        <CommentsContainer
                            comments={data?.comments}
                            className="mt-10"
                            logginedUserId={userState?.userInfo?._id}
                            postSlug={slug}
                        />
                    </article>
                    <div>
                        <SuggestedPosts
                            header="Project Terbaru"
                            posts={postsData}
                            tags={data?.tags}
                            className='mt-8 lg:mt-0 lg:max-w-xs'
                        />
                        <div className='mt-7'>
                            <h2 className='font-roboto font-medium text-dark-hard mb-4 md:text-xl'>
                                Bagikan kepada:
                            </h2>
                            <SocialShareButtons
                                url={encodeURI(window.location.href)}
                                title={encodeURIComponent(data?.title)}
                            />
                        </div>
                    </div>
                </section>
            )}
        </MainLayout>
    );
};

export default ProjectDetailPage
