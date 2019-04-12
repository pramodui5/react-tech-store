import React from 'react';
import Hero from '../components/Hero';  
import {Link} from 'react-router-dom';
import Services from '../components/HomePage/services';
import Featured from '../components/HomePage/featureProduct';

export default function HomePage() {
    return (
        <>
        <Hero title="Awesome gadgets">
            <Link to='/products' className="main-link">our products</Link>
        </Hero>
        <Services />
        <Featured />
        </>
    )
}