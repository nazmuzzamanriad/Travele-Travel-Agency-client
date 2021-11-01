import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';

import PopularPackage from '../PopularPackage/PopularPackage';
import Qna from '../QnA/Qna';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations />


            <PopularPackage></PopularPackage>
            <Qna></Qna>

        </div>
    );
};

export default Home;