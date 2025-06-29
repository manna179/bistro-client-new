import React from 'react';
import Banner from './Banner/Banner';
import HotDeals from './HotDeals/HotDeals';
import NewArrivals from './NewArrivals/NewArrivals';
import PopularCategory from './PopularCategories/PopularCategory';
import AccessoriesAndParts from './AccessoriesAndParts/AccessoriesAndParts';

const Home = () => {
    return (
        <div className='  object-cover' >
                     <Banner></Banner>
                     <HotDeals></HotDeals>
                     <NewArrivals></NewArrivals>
                     <PopularCategory></PopularCategory>
                     <AccessoriesAndParts></AccessoriesAndParts>
        </div>
    );
};

export default Home;