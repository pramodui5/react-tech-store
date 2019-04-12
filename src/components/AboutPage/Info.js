import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {
  return (
    <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-10 max-auto col-md-6 my-3">
                    <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about company" style={{background: "var(--darkGrey)"}} />
                </div>
                <div className="col-10 max-auto col-md-6 my-3">
                    <Title title="about us" />
                    <p className="text-lead text-muted my-3">Everyone needs a break. Sometimes we want to escape reality and venture into a world of fantasy images, be they pictures of dragons, fairies, super heroes, mythical figures or wizards. Browse our galleries to let yourself go into the realm of PNG imagination!</p>
                    <p className="text-lead text-muted my-3">Everyone needs a break. Sometimes we want to escape reality and venture into a world of fantasy images, be they pictures of dragons, fairies, super heroes, mythical figures or wizards. Browse our galleries to let yourself go into the realm of PNG imagination!</p>
                    <button className="main-link" type="button" style={{marginTop: "2rem"}}>more info</button>
                </div>
            </div>
        </div>        
    </section>      
  )
}
