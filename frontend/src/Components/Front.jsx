import BodyImg from "../Assets/mainimg1.webp";

import { FaRobot, FaWindowClose } from "react-icons/fa";
import "../Styles/Front.css";
import { useContext } from "react";
import { ChatbotOpen } from "./ChatbotOpen";

function Front() {
  const { open, setOpen } = useContext(ChatbotOpen);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          
          <h2 className="text-title">
            Prakruti: Chatbot To Know Your Phenotype
          </h2>
          <p className="text-descritpion">
            Discover Your Phenotype: Experience our AI-driven chatbot
            that determines your Prakruti and offers personalized dietary
            guidance for holistic well-being.
          </p>
          <button
            className={`${
              open ? "text-appointment-btn-close" : "text-appointment-btn"
            }`}
            type="button"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaWindowClose size={20} /> : <FaRobot size={20} />}
            <span>{open ? "Close" : "Open"} Chat Bot</span>
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={BodyImg} alt="Body" />
        </div>
      </div>
    </div>
  );
}
export default Front;
