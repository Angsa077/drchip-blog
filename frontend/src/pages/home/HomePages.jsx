import React from 'react';
import MainLayout from "../../components/MainLayout";
import Hero from './container/Hero';
import Projects from './container/Projects';
import CTA from './container/CTA';

const HomePages = () => {
    return (
        <MainLayout>
            <Hero />
            <Projects />
            <CTA />
        </MainLayout>
    );
};

export default HomePages
