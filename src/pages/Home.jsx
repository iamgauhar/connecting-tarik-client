
import HeroSection from '../components/HeroSection';
import FeaturedCate from '../components/FeaturedCate';
import RelatedVideos from '../components/RelatedVideos';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="pt-14">
            <div className='bg-orange-50 relative  p-4 md:px-14'>
                <HeroSection />
                <FeaturedCate />
            </div>
            <div className='p-4 md:px-14'>
                <RelatedVideos />
                <Products />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
