import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import frontimg from "../../img/imgfrontlanding.jpg"
import profilePic from "../../img/fakepic.jpg"
import simplifyimg from "../../img/simplifyimg.jpg"
import transformimg from "../../img/transformimg.jpg"
import TrueFocus from '../component/TrueFocus';


const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div>
        <div id='jumbotron' className="container-fluid p-5 bg-light text-dark">
            <div className="row align-items-center">
                <div className="col-md-6">
                <TrueFocus/>
                    <h2 className="display-5 fw-bold">Create Tickets Effortlessly</h2>
                    <p className="lead">
                        TicketMaster leverages AI to transform chat conversations into concise tickets, streamlining your ticket creation process.
                    </p>
                    <button className="btn1 btn-violet btn-lg" onClick={()=>{navigate("/")}}>Get Started</button>
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
        {/*How Ticket Master Works*/}
        <div className="container flex text-center">
        <h1 className='display-5'>How TicketMaster Works</h1>
        <p>Revolutionize your ticket generation with TicketMaster</p>
        <div className="row">
          <div className="col-md-3 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title fw-bold">1</h2>
                <h5 className="card-text fw-bolder mt-2">Paste Your Conversation</h5>
                <p className="card-text py-4">Easily paste a chat conversation into TicketMaster to start generating your ticket.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title fw-bold">2</h2>
                <h5 className="card-text fw-bolder mt-2">AI Ticket Generation</h5>
                <p className="card-text py-4">Let our AI work its magic to create a professional ticket based on your conversation.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5" >
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title fw-bold">3</h2>
                <h5 className="card-text fw-bolder mt-2">Customize Your Ticket</h5>
                <p className="card-text py-4">Review and customize the generated ticket to fit your specific needs before finalizing.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title fw-bold">4</h2>
                <h5 className="card-text fw-bolder mt-2">Share Your Ticket</h5>
                <p className="card-text py-4">Easily share your professionally generated ticket with others through various platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img src={transformimg} alt="AI Bot" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">Transform Your Ticket Creation Process</h1>
          <p>TicketMaster streamlines ticket generation from your chat conversations.</p>
          <ul>
            <li>Easily paste chat conversations for instant ticket creation</li>
            <li>Customize your ticket details for clarity and precision</li>
            <li>Collaborate with your team in a user-friendly interface</li>
            <li>Keep your ticketing process efficient and organized</li>
          </ul>
          <button className="btn1 btn-violet">Get Started for Free!</button>
          <blockquote className="mt-3">
            <p><em>"TicketMaster has changed how we create tickets! It's fast and effective!"</em></p>
            <footer>- <strong>Sarah Davis</strong> (Support Lead at Tech Innovations)</footer>
          </blockquote>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold">Simplify Your Ticket Creation with TicketMaster</h2>
          <p>
            Effortlessly generate tickets from chat conversations with our intelligent web app. Enjoy streamlined ticket management.
          </p>
          <ul>
            <li>Paste chat conversations and let our AI create tickets</li>
            <li>Customize ticket details as needed</li>
            <li>Share tickets securely with your team</li>
            <li>Ensure seamless support ticket handling and tracking</li>
          </ul>
          <button className="btn1 btn-violet">Start Your Free Trial!</button>
          <blockquote className="mt-3">
            <p><em>"TicketMaster has transformed our support process—fast, efficient, and reliable!"</em></p>
            <footer>- <strong>Emily Johnson</strong> (Customer Support Manager at XYZ Corp)</footer>
          </blockquote>
        </div>
        <div className="col-md-6">
          <img src={simplifyimg} alt="Phone and Chat" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
    );
};

export default LandingPage;


    
    //     {/*Transform Your Ticket Creation Process*/}
    //     <div className="container text-center">
    //   <h1>Transform Your Ticket Creation Process</h1>
    //   <p>TicketMaster streamlines ticket generation from your chat conversations.</p>
    //   <div className="row">
    //     <div className="col-md-12">
    //       <div className="card">
    //         <div className="card-body">
    //           <h3 className="card-title">Easily paste chat conversations for instant ticket creation</h3>
    //           <h5 className="card-text">Customize your ticket details for clarity and precision</h5>
    //           <h5 className="card-text">Collaborate with your team in a user-friendly interface</h5>
    //           <h5 className="card-text">Keep your ticketing process efficient and organized</h5>
    //           <button className="btn btn-primary mt-3">Get Started for Free!</button>
    //           <blockquote className="blockquote mt-3">
    //             <p className="mb-0">"TicketMaster has changed how we create tickets! It's fast and effective!"</p>
    //             <footer className="blockquote-footer">Sarah Davis <cite title="Source Title">Support Lead at Tech Innovations</cite></footer>
    //           </blockquote>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
