import React from 'react';
import "../footer/footer.css";

function Footer() {
    return (
        <div>
            <div className="fluid-container text-center overflow-auto">
            <div className="main">
                <div class="social-menu">
                    <a href="/"><i class="fa fa-google"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                    <a href="/"><i class="fa fa-github"></i></a>
                    <a href="/"><i class="fa fa-instagram"></i></a>
                </div>
                {/* <a class="btn btn-primary icons" style={{ background: "#3b5998" }} href="/" role="button"><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a class="btn btn-primary icons" style={{ background: "#ac2bac" }} href="/" role="button"><i class="fab fa-instagram fa-2x"></i></a>
                    <a class="btn btn-primary icons" style={{ background: "#333333" }} href="/" role="button"><i class="fab fa-github fa-2x"></i></a>
                    <a class="btn btn-primary icons" style={{ background: "#0082ca" }} href="/" role="button"><i class="fab fa-linkedin-in fa-2x"></i></a> */}

                <div className="line"></div>
                <div className="copy-right">Created By Yash Gupta @Copyright</div>
            </div>
        </div>
        </div>
    )
}

export default Footer
