
import CateCard from "./CateCard";

const FeaturedCate = () => {
  return (
    <div className="py-4">
      <div className="flex gap-4 flex-wrap justify-center md:justify-between">
        <CateCard />
        <CateCard />
        <CateCard />
        <CateCard />
        <CateCard />
        <CateCard />
      </div>
    </div>
  );
};

export default FeaturedCate;
