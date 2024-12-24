import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

/* 
*3000- Front npm run start
*3001- Back python src/app.py
 */

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '40rem' }}>
                <h5 className="card-title d-flex align-items-center mb-3 fw-bolder">
                    <i className="bi bi-chat-right-dots me-2"></i>
                    Convert Chat to Ticket
                </h5>
                <div className="mb-3">
                    <textarea 
                        className="form-control textarea-glow" 
                        rows="5" 
                        placeholder="Paste your conversation here..."
                    ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn1 btn-violet btn-sm d-flex align-items-center">
                        <i className="bi bi-send me-2"></i>
                        Generate Ticket
                    </button>
                </div>
            </div>
        </div>  
    );
};
