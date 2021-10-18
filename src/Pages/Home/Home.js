import React from 'react';
import Dentist from '../../Components/Dentist/Dentist';
import Header from '../../Components/Header/Header';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Dentist></Dentist>
        </div>
    );
};

export default Home;