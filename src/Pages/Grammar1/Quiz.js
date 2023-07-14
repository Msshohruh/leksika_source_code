import React, { useEffect, useState } from "react";
import { questions } from "../../lib/fetchQuestions";
import Quiz from "react-quiz-component";

function QuizTest() {
  const [quiz, setQuiz] = useState([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [modified, setModified] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const result = await questions();
      const data = await result.json();
      setQuiz(data);
      setShowPrompt(true);
    }
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (quiz.length !== 0) {
      if (modified) return;
      quiz[0]["questions"].map((q) => {
        const correctAnswer = q["answers"][q["correctAnswer"] - 1];
        q["answers"] = q["answers"].sort(() => Math.random() - 0.5);
        if (correctAnswer === q["answers"][0]) {
          q["correctAnswer"] = "1";
        } else if (correctAnswer === q["answers"][1]) {
          q["correctAnswer"] = "2";
        }

        console.log(q["correctAnswer"], correctAnswer);
        return q;
      });

      setModified(true);
    }
  }, [quiz]);
  return (
    <>
      <div className="quiz-start">
        <h3>Increase your knowledge with solve quizes</h3>
        <p>Unit {1}</p>
        {Boolean(quiz.length) && showPrompt && <Quiz quiz={quiz[0]} />}
      </div>
    </>
  );
}

export default QuizTest;
