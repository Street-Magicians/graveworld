import React, { useState } from "react";

const ChallengeAlt = () => {
  const questions = [
    {
      questionText: "I am a giant born from the sea, when I belch people flee. My blood destroys wherever it flows, but when it clots my body grows",
      answerOptions: [
        { answerText: "River", isCorrect: false },
        { answerText: "Volcano", isCorrect: true },
        { answerText: "Hurricane", isCorrect: false },
        { answerText: "Earthquake", isCorrect: false },
      ],
    },
    {
      questionText: "You love to watch me rise from sleep, but look my way and you will weep. You need me to have life at all, but as I grow you'll one day fall.",
      answerOptions: [
        { answerText: "A Dog", isCorrect: false },
        { answerText: "Birth", isCorrect: false },
        { answerText: "Dreams", isCorrect: false },
        { answerText: "The Sun", isCorrect: true },
      ],
    },
    {
      questionText:
        "I'm looking for my heart, it's red through and through. It has no mouth, but would swiftly consume you. It fears water but befriends the breeze. If you find it, I will move on with ease!",
      answerOptions: [
        { answerText: "Rubies", isCorrect: false },
        { answerText: "Flamin' Hot Cheetos", isCorrect: false },
        { answerText: "Fire", isCorrect: true },
        { answerText: "Light", isCorrect: false },
      ],
    },
  ];

  //   state object holds the current question the user is answering. Starts at 0 (the first question)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // state object stores whether we want to show score messge
  const [showQuizEnd, setShowQuizEnd] = useState(false);
  //   save user score
  const [score, setScore] = useState(0);

  // function to handles answers
  const handleAnswerButton = (isCorrect) => {
    //   shows User a message if answer is correct
    if (isCorrect) {
      setScore(score + 1);
    }
    // condition checks the length of our questions array before proceeding
    // Increments current question by 1, save to new variable, set to state
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowQuizEnd(true);
    }
  };

  return (
    <div className="">
      {showQuizEnd ? (
        <div className="">
          You found {score} out of {questions.length} elements!
        </div>
      ) : (
        <>
          <div className="">
            <div className="">
              <p></p>
              <p>
                <span>You are looking for clue {currentQuestion + 1}</span>/{questions.length}
              </p>
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="">
            {/* loops through answers array for question and displays as buttons */}
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChallengeAlt;
