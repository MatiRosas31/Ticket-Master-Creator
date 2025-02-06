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
        <div className="containerhome d-flex my-auto">
            <div className="cardhome p-4 shadow" style={{ width: '40rem' }}>
                <h5 className="display-3 fw-bold mb-4 gradient-text">
                    Convert Chat to Ticket
                </h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-white">
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
