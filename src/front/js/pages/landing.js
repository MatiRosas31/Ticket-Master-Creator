import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import frontimg from "../../img/imgfrontlanding.jpg"
import profilePic from "../../img/fakepic.jpg"
const LandingPage = () => {
    return (
        <div className="container-fluid p-5 bg-light text-dark">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold">Create Tickets Effortlessly</h1>
                    <p className="lead">
                        TicketMaster leverages AI to transform chat conversations into concise tickets, streamlining your ticket creation process.
                    </p>
                    <button className="btn btn-primary btn-lg">Get Started</button>
                    <div className="mt-4 d-flex align-items-center">
                        <img 
                            src={profilePic} 
                            alt="Jane Doe" 
                            className="rounded-circle me-3" 
                            width="60"
                            height="60"
                        />
                        <div>
                            <p className="mb-1"><i>"TicketMaster has revolutionized our ticketing experience, making it easy and efficient."</i></p>
                            <p className="fw-bold">Jane Doe <span className="text-primary">(Support Lead at Customer Solutions)</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img 
                        src={frontimg} 
                        alt="AI Bot Illustration" 
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
