import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCate from '../components/FeaturedCate';
import RelatedVideos from '../components/RelatedVideos';
import Products from '../components/Products';

const Home = () => {
    return (
        <div className="w-full calc(h-[100vh-60px]) bg-white/95">
            <HeroSection />
            <FeaturedCate />
            <RelatedVideos />
            <Products />
        </div>
    );
};

export default Home;
