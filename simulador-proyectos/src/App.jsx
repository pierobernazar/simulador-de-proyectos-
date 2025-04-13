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
  //     answer: 2
  },
  {
    question: "¿Qué caracteriza a un servicio?",
    options: [
      "Es tangible y almacenable",
      "Es intangible y no almacenable",
      "Se puede ver y tocar",
      "Tiene forma física"
    ],
    answer: 1
  },
  {
    question: "¿Qué incluye un análisis PESTEL?",
    options: [
      "Solo factores políticos y sociales",
      "Solo costos financieros",
      "Factores políticos, económicos, sociales, tecnológicos, ecológicos y legales",
      "Solo análisis interno de la empresa"
    ],
    answer: 2
  },
  {
    question: "¿Qué representa el capital de trabajo?",
    options: [
      "Lo invertido en publicidad",
      "Fondos necesarios para operar el proyecto a corto plazo",
      "El costo total de construcción",
      "Los pagos de préstamos a largo plazo"
    ],
    answer: 1
  },
  {
    question: "¿Qué permite la evaluación de un proyecto?",
    options: [
      "Evitar la planificación",
      "Tomar decisiones con menor incertidumbre",
      "Ignorar escenarios económicos",
      "Reducir la inversión necesaria"
    ],
    answer: 1
  },
  {
    question: "¿Qué contiene el mix comercial clásico?",
    options: [
      "Producto, precio, plaza y promoción",
      "Producto, cliente, impacto y marca",
      "Persona, canal, inversión y diseño",
      "Precio, segmentación, valor y diferenciación"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es el primer paso para estimar la demanda?",
    options: [
      "Definir el alcance geográfico",
      "Determinar la competencia",
      "Calcular el precio",
      "Identificar el buyer persona"
    ],
    answer: 0
  },
  {
    question: "¿Qué evalúa la viabilidad técnica?",
    options: [
      "Si hay clientes suficientes",
      "Si se puede producir técnicamente",
      "El precio del producto",
      "La competencia directa"
    ],
    answer: 1
  },
  {
    question: "¿Qué tipo de evaluación se hace después de terminado un proyecto?",
    options: [
      "Evaluación de seguimiento",
      "Evaluación ex ante",
      "Evaluación ex post",
      "Evaluación financiera inicial"
    ],
    answer: 2
  },
  {
    question: "¿Cuál es el objetivo del análisis de mercado?",
    options: [
      "Determinar el clima político",
      "Medir el rendimiento de empleados",
      "Conocer la competencia y oportunidades del mercado",
      "Analizar leyes tributarias"
    ],
    answer: 2
  }
];
Puedes agregar más preguntas aquí
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
