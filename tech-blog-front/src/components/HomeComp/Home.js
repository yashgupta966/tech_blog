import React from 'react';
import CardComp from './../CardComp/CardComp';
import NewsComp from './../NewsComp/NewsComp';
import "./home.css";

function Home() {
    return (
        <div>
            {/* ------- landing photo ------ */}
            <div className="landing">
                <img src="/assets/images/1.jpg" alt='' />
                <div className="landing-text">
                    <h2 className="landing-title">TECH BLOGS</h2>
                    <p className="landing-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            {/* ---- nav buttons ------ */}

            <div className="container">
                <div className="d-flex flex-wrap justify-content-center m-5">
                    <div className="btn nav-button"><a href="/webd">Web Development</a></div>
                    <div className="btn nav-button">Blockchain</div>
                    <div className="btn nav-button">Machine learning</div>
                    <div className="btn nav-button">C/C++</div>
                    <div className="btn nav-button">Tech News</div>
                </div>
            </div>

            <CardComp />
            
            <NewsComp />
            
            

        </div>
    )
}

export default Home
