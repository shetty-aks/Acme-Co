import * as React from 'react'
import BasicLayout from '../components/layout/Basic';
import Navbar from '../components/navbar/Navbar';
import Welcome from '../components/sections/Welcome';
import LearnMore from '../components/sections/LearnMore';
import Testimonials from '../components/sections/Testimonials';
import ExploreSDK from '../components/sections/ExploreSDK';
import Footer from '../components/footer/Footer';


export default function Home() {
    return (
        <BasicLayout>
            <Navbar/>
            <Welcome/>
            <LearnMore/>
            <Testimonials/>
            <ExploreSDK/>
            <Footer/>
        </BasicLayout>
    )
}
