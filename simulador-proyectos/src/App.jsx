import React, { useState, useEffect } from "react";
import questionsBank from "./questions";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const shuffled = [...questionsBank].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10)); // 10 preguntas aleatorias
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    const reshuffled = [...questionsBank].sort(() => 0.5 - Math.random());
    setQuestions(reshuffled.slice(0, 10));
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  if (questions.length === 0) return <div>Cargando preguntas...</div>;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Simulador Proyectos - Prueba N°1</h1>

      {showScore ? (
        <div>
          <h2>Tu puntaje fue: {score} de {questions.length}</h2>
          <button onClick={handleRestart}>Hacerlo otra vez</button>
        </div>
      ) : (
        <div>
          <h2>
            {currentQuestion + 1}. {questions[currentQuestion].question}
          </h2>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} style={{ marginBottom: "0.5rem" }}>
              <button
                style={{
                  padding: "0.5rem",
                  backgroundColor: selectedOption === index ? "#d0d0d0" : "#f0f0f0",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left"
                }}
                onClick={() => handleOptionClick(index)}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            </div>
          ))}
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
