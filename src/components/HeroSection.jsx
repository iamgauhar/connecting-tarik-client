
import SlideCrousel from '../components/Crousel'
import smartWatch from '../assets/images/Minimalist Description.png'
import earbuds from '../assets/images/Minimalist Earbuds.png'
import { NavLink } from 'react-router-dom';
import { useYourContext } from '../../context/itemContext';


const HeroSection = () => {
  const { swId, ebId } = useYourContext()

  return (
    <div>
      <div className=' bg-orange-50 relative'>
        <div className=' h-auto md:h-[64vh] grid gap-4 grid-cols-4 md:grid-cols-3 pt-4 pb-4'>
          <div className='col-span-4 row-span-2 md:col-span-2 rounded-md'> <SlideCrousel /> </div>
          <div className='col-span-2  md:col-span-1 rounded-md overflow-hidden object-center cursor-pointer'>
            <NavLink to={`/category/${swId}`}><img src={smartWatch} alt="" className=' object-cover w-full h-full hover:scale-110 transition-all duration-500' /></NavLink>
          </div>
          <div className='bg-purple-400 col-span-2 md:col-span-1 rounded-md overflow-hidden object-cover cursor-pointer'>
            <NavLink to={`/category/${ebId}`}><img src={earbuds} alt="" className='object-cover w-full h-full hover:scale-110 transition-all duration-500' /></NavLink>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
