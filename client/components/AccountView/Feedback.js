const React = require("react");
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addFeedback } from "../../slices/feedbackslice";

const Feedback = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addFeedback({ name, feedback }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name"> Full Name </label>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br></br>

                <label htmlFor="feedback"> Please Write Your Feedback Here </label>
                <input name="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                <br></br>
                <button type="submit"> Submit Feedback </button>
            </div>

        </form>
    )
};
export default Feedback;