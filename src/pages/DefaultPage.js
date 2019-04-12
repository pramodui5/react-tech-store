import React from 'react';
import styled from 'styled-components';
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero';  
import {Link} from 'react-router-dom';

export default function Default() {
    return (
        <>
        <Hero img={defaultBcg} title="404" max="true">
            <h2 className="text-uppercase">Page not found</h2>
            <Link to="/" className="main-link" style={{'margin-top': '2rem'}}>
                return home
            </Link>
        </Hero>
        </>
    )
}