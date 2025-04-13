import React, { useState } from "react";

const questions = [
  {
    question: "¿Qué es un proyecto?",
    options: [
      "Una propuesta para usar recursos sin restricciones",
      "Un esfuerzo sin fin que busca soluciones",
      "Una propuesta que busca satisfacer una necesidad utilizando recursos limitados",
      "Un trámite administrativo sin objetivo claro",
    ],
    answer: 2,
  },
  // Puedes agregar más preguntas aquí
];

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    setSelected(index);
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Simulador Proyectos - Prueba Nº1</h1>
      {!showResult ? (
        <>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((opt, i) => (
            <div key={i}>
              <button
                style={{
                  padding: "0.5rem",
                  margin: "0.3rem 0",
                  backgroundColor: selected === i ? "#87CEFA" : "#f0f0f0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleAnswer(i)}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            </div>
          ))}
          <br />
          <button onClick={nextQuestion} disabled={selected === null}>
            Siguiente
          </button>
        </>
      ) : (
        <div>
          <h2>¡Tu puntaje fue {score} de {questions.length}!</h2>
          <button onClick={resetQuiz}>Hacerlo otra vez</button>
        </div>
      )}
    </div>
  );
}

export default App;
