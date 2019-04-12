import React from 'react';
import Title from '../Title';

export default function Contact() {
  return (
    <section className="py-5">
        <div className="container">
            <div className="row">
            <div className="col-10 max-auto col-md-6 my-3">
                <Title title="contact us" />
                <form className="mt-5" action="https://formspree.io/pbhoi144@gmail.com" method="POST">
                    {/* first name */}
                    <div className="form-group">
                        <input type="text" name="firstName" className="form-control" placeholder="Pramod Bhoi" /> 
                    </div>

                    {/* email */}
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="email@email.com" /> 
                    </div>

                    {/* subject */}
                    <div className="form-group">
                        <input type="text" name="subject" className="form-control" placeholder="important!!!!" /> 
                    </div>

                     {/* message */}
                     <div className="form-group">
                        <textarea name="message" className="form-control" placeholder="hello there body"></textarea>
                    </div>

                    {/* button */}
                    <div className="form-group">
                        <button type="submit" className="mt-3 bg-primary text-white">submit</button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    </section>
  )
}
