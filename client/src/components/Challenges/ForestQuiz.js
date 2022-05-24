import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const ForestQuiz = () => {
  const questions = [
    {
      questionText: "My towers are the highest in the land, yet once I was but a grain of sand. Born from crashing planes of mass, cut by rivers running past  ",
      answerOptions: [
        { answerText: "Mountains", isCorrect: true },
        { answerText: "Skyscrapers", isCorrect: false },
        { answerText: "Tornados", isCorrect: false },
        { answerText: "Trees", isCorrect: false },
      ],
    },
    {
      questionText: "I’m as light as can be but surprisingly strong. I can be small and soft or sturdy and long. I float like a whisper light through the air, I can be any color of plain or flair",
      answerOptions: [
        { answerText: "Spider Silk", isCorrect: false },
        { answerText: "A Whisper", isCorrect: false },
        { answerText: "Feathers", isCorrect: true },
        { answerText: "Clouds", isCorrect: false },
      ],
    },
    {
      questionText:
        "My feet sink through the ground while I reach to the sky, I offer my children to those who pass by. I start very small but am a giant fulfilled, I will never die unless I am killed",
      answerOptions: [
        { answerText: "Leaves", isCorrect: false },
        { answerText: "A Flag", isCorrect: false },
        { answerText: "Hope", isCorrect: false },
        { answerText: "Trees", isCorrect: true },
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
      console.log(score);
      setShowQuizEnd(true);
    }
  };
  useEffect(() => {
    if (score === 3) {
      // If score = 3 call update user mutation function
      handleAddToken();
    }
  }, [score]);

  const handleAddToken = () => {
    // Root Token object
    const rootToken = {
      name: "Root Token",
      description: "A small, hard seed. It’s warm to the touch, as though something is inside! ",
      image: "./../../assets/images/sprites/rootToken.png",
    };
    // if no existing data, create an array, otherwise convert string to object
    let tokenArray = JSON.parse(localStorage.getItem("tokens")) || [];
    // add flame token to localStorage tokens array
    tokenArray.push(rootToken);
    // save to localStorage
    localStorage.setItem("tokens", JSON.stringify(tokenArray));

    // function handleUpdateStamina() {
  };

  const handleSelection = () => {
    setCurrentQuestion(0);
    setShowQuizEnd(false);
    setScore(0);
  };

  return (
    <section className="box mx-4 my-2">
      {/* if ShowQuizEnd is true (once all questions have been answered), display message */}
      {showQuizEnd ? (
        <div className="has-text-centered">
          {/* if user answers all questions correctly, display 'success' message, otherwise 'failure' message */}
          {score === 3 ? (
            <>
              <img src={require("./../../assets/images/sprites/rootToken.png")} alt="an 8-bit rendering of a red swirly gem" className="m-4 w-10 mqPh-w25" />
              <p className="c-navy m-2">
                The being leads you off the path and into the wood, where you help {score} of its friends: An lost mountain goat, an injured kestrel, and thirsty sapling, “Thank you for your aid! You
                have earned the boon of Bramblestone, Spirit of the Wood! They grant you their boon: The Root Token. You are one step closer to defeating the Demon Relphax!
              </p>
              <Button link="/quest">Return to Quests</Button>
              <Button link="/profile">Return to Profile</Button>
            </>
          ) : (
            <>
              <p className="c-navy m-2">"Keep at it, I know you can do it; my friends need your help!"</p>
              <Button link="/quest">Return to Quests</Button>
              <Button handleSelection={handleSelection}>Try Again</Button>
            </>
          )}
        </div>
      ) : (
        // If ShowQuizEnd is not true (and there are more questions), continue quiz
        <>
          <div className="has-text-centered">
            <div className="">
              <p></p>
              <p className="has-text-weight-semibold">
                You are solving clue {currentQuestion + 1}/{questions.length}
              </p>
            </div>
            <div className="py-4">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="columns is-centered is-multiline ">
            {/* loops through question's answers array and displays as buttons */}
            {questions[currentQuestion].answerOptions.map((answerOption, i) => (
              <p onClick={() => handleAnswerButton(answerOption.isCorrect)} className="b-teal c-pink column f-1 font-reg is-2 button m-2 mx-2 has-text-weight-semibold" key={i}>
                {answerOption.answerText}
              </p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
// export DesertQuiz function
export default ForestQuiz;
