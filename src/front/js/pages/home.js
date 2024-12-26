import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

/* 
*3000- Front npm run start
*3001- Back python src/app.py
 */

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [textareaValue, setTextareaValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textareaValue.trim()) {
            navigate("/ticket", { state: { text: textareaValue } });
        } else {
            alert("Please enter information in the textarea.");
        }
    };

    return (
        <div className="containerhome d-flex">
            <div className="cardhome p-4 shadow" style={{ width: '40rem' }}>
                <h5 className="card-title d-flex align-items-center mb-3 fw-bolder">
                    <i className="bi bi-chat-right-dots me-2"></i>
                    Convert Chat to Ticket
                </h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <textarea 
                            className="form-control textarea-glow" 
                            rows="5" 
                            placeholder="Paste your conversation here..."
                            value={textareaValue}
                            onChange={(e) => setTextareaValue(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn1 btn-violet btn-sm d-flex align-items-center">
                            <i className="bi bi-send me-2"></i>
                            Generate Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>  
    );
};
