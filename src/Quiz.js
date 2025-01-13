import React, { useState, useEffect } from "react";
import "./App.css";
 
const quizData = [
  { question: "Een appel valt niet ver van de ___", correct: "Boom", options: ["Berg", "Boom", "Tafel"] },
  { question: "Beter één vogel in de hand dan tien in de ___", correct: "Lucht", options: ["Lucht", "Kooi", "Tuin"] },
  { question: "Waar rook is, is ___", correct: "Vuur", options: ["Water", "Vuur", "Stof"] },
  { question: "Met de deur in huis ___", correct: "Vallen", options: ["Klimmen", "Vallen", "Slaan"] },
  { question: "De kat uit de ___ kijken", correct: "Boom", options: ["Boom", "Doos", "Mand"] },
  { question: "Iets op de lange ___ schuiven", correct: "Baan", options: ["Baan", "Tafel", "Weg"] },
  { question: "Door de mand ___", correct: "Vallen", options: ["Kijken", "Vallen", "Glijden"] },
  { question: "Een stok achter de ___ hebben", correct: "Deur", options: ["Deur", "Hand", "Rug"] },
  { question: "Het is koek en ___", correct: "Ei", options: ["Melk", "Ei", "Brood"] },
  { question: "De laatste ___ willen zijn", correct: "Druppel", options: ["Druppel", "Man", "Steen"] },
  { question: "Met man en ___", correct: "Macht", options: ["Macht", "Paard", "Vuur"] },
  { question: "Een storm in een glas ___", correct: "Water", options: ["Water", "Wijn", "Thee"] },
  { question: "Het kind met het badwater ___", correct: "Weggooien", options: ["Wassen", "Weggooien", "Verliezen"] },
  { question: "Een oogje in het ___ houden", correct: "Zeil", options: ["Zeil", "Glas", "Huis"] },
  { question: "Twee vliegen in één ___ slaan", correct: "Klap", options: ["Klap", "Dag", "Slag"] },
  { question: "De ___ bij de horens vatten", correct: "Stier", options: ["Stier", "Beer", "Haas"] },
  { question: "Geen ___ voor de ogen zien", correct: "Hand", options: ["Licht", "Hand", "Weg"] },
  { question: "De handdoek in de ___ gooien", correct: "Ring", options: ["Mand", "Ring", "Vijver"] },
  { question: "Een wolf in ___ kleren", correct: "Schaaps", options: ["Schaaps", "Katten", "Beren"] },
  { question: "De ___ aan de wilgen hangen", correct: "Schoenen", options: ["Schoenen", "Handschoenen", "Hoed"] },
];
 
const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ sortKey, ...item }) => item);
};
 
const App = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
 
  useEffect(() => {
    setShuffledQuestions(shuffleArray(quizData));
  }, []);
 
  const handleAnswerButtonClick = (option) => {
    const isCorrect = option === shuffledQuestions[currentQuestionIndex].correct;
    setSelectedAnswer({ option, isCorrect });
 
    if (isCorrect) {
      setScore(score + 1);
    }
 
    setTimeout(() => {
      setSelectedAnswer(null);
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < shuffledQuestions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };
 
  const handleRestart = () => {
    setShuffledQuestions(shuffleArray(quizData));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };
 
  return (
    <div className="container3">
      {showScore ? (
        <div>
          <h1>Quiz Voltooid!</h1>
          <p className="score">Je hebt {score} van de {shuffledQuestions.length} vragen goed!</p>
          <button onClick={handleRestart}>Opnieuw Spelen</button>
        </div>
      ) : (
        <div>
          <h1>Spreekwoorden Quiz</h1>
          <p>
            Vraag {currentQuestionIndex + 1}/{shuffledQuestions.length}
          </p>
          {shuffledQuestions.length > 0 && (
            <>
              <h2>{shuffledQuestions[currentQuestionIndex].question}</h2>
              {shuffledQuestions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  className={`answer-button ${selectedAnswer
                      ? option === shuffledQuestions[currentQuestionIndex].correct
                        ? "correct"
                        : option === selectedAnswer.option && !selectedAnswer.isCorrect
                          ? "incorrect"
                          : ""
                      : ""
                    }`}
                  onClick={() => handleAnswerButtonClick(option)}
                  disabled={!!selectedAnswer}
                >
                  {option}
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};
 
export default App;