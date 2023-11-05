import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCate from '../components/FeaturedCate';
import RelatedVideos from '../components/RelatedVideos';
import Products from '../components/Products';

const Home = () => {
    return (
        <div className="py-14">
            <div className='bg-orange-50 relative  p-4 md:px-14'>
                <HeroSection />
                <FeaturedCate />
            </div>

            <RelatedVideos />
            <Products />
        </div>
    );
};

export default Home;
