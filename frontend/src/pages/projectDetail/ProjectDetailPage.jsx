import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import MainLayout from '../../components/MainLayout';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import SuggestedPosts from './container/SuggestedPosts';
import CommentsContainer from '../../components/comments/CommentsContainer';
import SocialShareButtons from '../../components/SocialShareButtons';

const breadCrumbsData = [
    { name: "Home", link: '/' },
    { name: "Project", link: '/project' },
    { name: "Project title", link: '/project/1' },
];

const postsData = [
    {
        _id: "1",
        image: images.Post1Image,
        title: "Website Gallery Kaminata Architecture",
        createdAt: "2023-09-10T16:56:59.607+0000"
    },
    {
        _id: "2",
        image: images.Post1Image,
        title: "Website Gallery Kaminata Architecture",
        createdAt: "2023-09-10T16:56:59.607+0000"
    },
    {
        _id: "3",
        image: images.Post1Image,
        title: "Website Gallery Kaminata Architecture",
        createdAt: "2023-09-10T16:56:59.607+0000"
    },
    {
        _id: "4",
        image: images.Post1Image,
        title: "Website Gallery Kaminata Architecture",
        createdAt: "2023-09-10T16:56:59.607+0000"
    },
];

const tagsData = [
    "Kasir Online",
    "Penjualan",
    "Aplikasi CRM",
    "Karyawan",
    "Inventori",
    "Aplikasi Sewa",
    "Profil Perusahaan",
    "Pendidikan",
    "Film",
    "Toko Online",
    "Gallery",
    "Analisa Bisnis"
];

const ProjectDetailPage = () => {
    return (
        <MainLayout>
            <section className='container mx-auto max-w-7xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                <article className='flex-1'>
                    <BreadCrumbs data={breadCrumbsData} />
                    <img className='rounded-xl w-full' src={images.Post1Image} alt="Kaminata" />
                    <Link to="/project?kategori=kategoriDipilih" className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'>
                        GALLERY
                    </Link>
                    <h1 className='text-xl font-medium font-roboto mt-4 text-dark-light md:text-[26px]'>Website Gallery Kaminata Architecture</h1>
                    <div className='mt-4 text-dark-light'>
                        <p className='text-dark-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos iste eaque obcaecati, animi quos beatae minima consequuntur temporibus quam.</p>
                    </div>
                    <CommentsContainer className="mt-10" logginedUserId="a" />
                </article>
                <div>
                    <SuggestedPosts
                        header="Project Terakhir"
                        posts={postsData}
                        tags={tagsData}
                        className='mt-8 lg:mt-0 lg:max-w-xs'
                    />
                    <div className='mt-7'>
                        <h2 className='font-roboto font-medium text-dark-hard mb-4 md:text-xl'>
                            Bagikan kepada:
                        </h2>
                        <SocialShareButtons
                            url={encodeURI("https://portfolio-angsa077.vercel.app/"
                            )}
                            title={encodeURIComponent(
                                "My portfolio"
                            )}
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ProjectDetailPage
