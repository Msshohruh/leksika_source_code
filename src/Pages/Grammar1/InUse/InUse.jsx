import React, { useEffect, useState } from "react";
import "../styles/InUse.css";
import "./style.css";
import QuizTest from "../Quiz.js";
import { findFile } from "../../../lib/fetchData";
import telegram from "../../../static/telegram.svg";
import insta from "../../../static/insta.svg";
import facebook from "../../../static/facebook.svg";
import twitter from "../../../static/twitter.svg";
import { BsBook } from "react-icons/bs";
import { TbCalendarEvent } from "react-icons/tb";

const GrammarInUse = () => {
  return (
    <div className="grammarItem">
      <div className="grammarContainer">
        <Unit />
        <div className="lessons">
          <div className="lesson">
            <p>Previous lesson</p>
            <h3>Lesson title here</h3>
          </div>
          <div className="lesson">
            <p>Next lesson</p>
            <h3>Lesson title here</h3>
          </div>
        </div>
        <div className="quiz">
          <QuizTest />
        </div>
        <div className="about-unit">
          <div className="about-unit-st">
            <p>
              <TbCalendarEvent /> 1 month ago
            </p>
            <p>
              <BsBook />
              number of reads: {52}
            </p>
          </div>
          <div className="about-unit-sm">
            <a>
              <img src={telegram} alt="telegram-icon" />
            </a>
            <a>
              <img src={facebook} alt="facebook-icon" />
            </a>
            <a>
              <img src={insta} alt="insta-icon" />
            </a>
            <a>
              <img src={twitter} alt="twitter-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Unit() {
  // Get ID from URL
  var query = window.location.href;
  var parts = query.split("/");
  var id = parts[parts.length - 1];

  const [html, setHtml] = useState("");
  useEffect(() => {
    async function getfile() {
      const data = await findFile(id);
      setHtml(await data.base64);
    }
    getfile();
  }, [id]);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
export default GrammarInUse;
