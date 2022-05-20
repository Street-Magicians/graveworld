import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const GraveyardQuiz = () => {
  const questions = [
    {
      questionText: "My dance has lasted since my birth, I’m friend to all who live on earth. I push and pull and fall and climb, you even use me to tell the time",
      answerOptions: [
        { answerText: "The Stars", isCorrect: false },
        { answerText: "Godzilla", isCorrect: false },
        { answerText: "A Compass", isCorrect: false },
        { answerText: "The Moon", isCorrect: true },
      ],
    },
    {
      questionText: "I can help you clean your shirt, when I fall I’m never hurt. I can run without any feet, and am your dearest friend amid the heat",
      answerOptions: [
        { answerText: "Gatorade", isCorrect: false },
        { answerText: "Water", isCorrect: true },
        { answerText: "Time", isCorrect: false },
        { answerText: "A Fan", isCorrect: false },
      ],
    },
    {
      questionText: "I have an eye but cannot see, at my worst I can cause  misery. I run with water through the sky, When I’m bad we both may cry",
      answerOptions: [
        { answerText: "A Storm", isCorrect: true },
        { answerText: "Lightening", isCorrect: false },
        { answerText: "A Cyclops", isCorrect: false },
        { answerText: "A Tsunami", isCorrect: false },
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
    //Check local storage to see if they have token array, if not create array
    // TODO: Figure out how to push token to array without overwriting previous tokens
    const tokenArray = [];
    const waveToken = {
      name: "Wave Token",
      description: "A small silver seashell. When you hold it up to your ear you can hear the sound of running water! ",
      image: "./../../assets/images/sprites/waveToken.png",
    };
    // push token to user's spiritToken array in local storage
    tokenArray.push(waveToken);
    localStorage.setItem("tokens", JSON.stringify(tokenArray));
    // }
  };

  // function handleUpdateStamina() {

  //   };

  return (
    <section className="box mx-4 my-2">
      {/* if ShowQuizEnd is true (once all questions have been answered), display message */}
      {showQuizEnd ? (
        <div className="has-text-centered">
          {/* if user answers all questions correctly, display 'success' message, otherwise 'failure' message */}
          {score === 3 ? (
            <>
              <img src={require("./../../assets/images/sprites/waveToken.png")} alt="an 8-bit rendering of a golden coin" className="m-4 w-10" />
              <p className="c-navy m-2">
                Success! You play the ghost pirtate’s games, and blow all {score} out of the water! At last they lean back and have a laugh, “that’s the most fun we’ve ‘ad in years! Ye’ve surely won
                the favor o’ Stormsail, Spirit o’ the Waves!” True to their word, they grant you their boon: The Wave Token! It looks like a small silver seashell, and when you hold it up to your ear
                you can hear the sound of running water. You are one step closer to defeating the Demon Relphax!
              </p>
              <Button link="/quest">Return to Quests</Button>
              <Button link="/profile">Return to Profile</Button>
            </>
          ) : (
            <>
              <p className="c-navy m-2">"'Yer no fun at all," the ghostly pirate says, "I'm not lettin' ye outta this 'ol brig until ye play with some heart!"</p>
              <Button link="/quest">Return to Quests</Button>
              <Button link="/theruin">Try Again</Button>
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
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <p onClick={() => handleAnswerButton(answerOption.isCorrect)} className="b-teal c-pink column f-1 font-reg is-2 button m-2 mx-2 has-text-weight-semibold">
                {answerOption.answerText}
              </p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
// export GraveyardQuiz function
export default GraveyardQuiz;
