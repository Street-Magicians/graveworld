import React, { useReducer, useState } from "react";
import Button from "../Button/Button";
import { UPDATE_TOKENS, UPDATE_STAMINA } from "./../../utils/actions";
import { useDispatch, useSelector } from "react-redux";

const DesertRuin = () => {
  const questions = [
    {
      questionText: "I am a giant born from the sea, when I speak people flee. My blood destroys wherever it flows, but when it clots my body grows",
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
        { answerText: "A Baby", isCorrect: false },
        { answerText: "Dreams", isCorrect: false },
        { answerText: "The Sun", isCorrect: true },
      ],
    },
    {
      questionText:
        "I'm looking for my heart, it's red through and through. It has no mouth, but would swiftly consume you. It fears water but befriends the breeze. If you find it, I will be at ease",
      answerOptions: [
        { answerText: "Rubies", isCorrect: false },
        { answerText: "Flamin' Hot Cheetos", isCorrect: false },
        { answerText: "Fire", isCorrect: true },
        { answerText: "Light", isCorrect: false },
      ],
    },
  ];

  const dispatch = useDispatch();
  // const state = useSelector((state) => state);

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
      // if score === 3
      // call update user mutation
      // push token to user's spiritToken array in DB and
      // else show 'better luck next time!' message and redirect to Quest page
      let tokens = "Flame Token";
      let stamina = 30;
      // dispatch the Update_Tokens action to update the global state (spirit tokens)
      dispatch({
        type: UPDATE_TOKENS,
        spiritTokens: [...tokens],
      });
      // dispatch the Update_STAMINA action to update the global state (user's stamina)
      dispatch({
        type: UPDATE_STAMINA,
        stamina: stamina,
      });
    }
  };

  // TODO: comment to describe this
  return (
    <div className="box m-4">
      {/* if ShowQuizEnd is true (once all questions have been answered), display message */}
      {showQuizEnd ? (
        <div className="has-text-centered">
          {score === 3 ? (
            <>
              <img src={require("./placeholder.png")} alt="an 8-bit rendering of a golden coin" className="m-4 w-10" />
              <p className="m-2">
                Success! You piece together {score} out of {questions.length} clues, and and help the spirit realize their identity: Blazebright, the Spirit of Flames! True to their word, they grant
                you their boon: The Flame Token. You are one step closer to defeating the Demon Relphax!
              </p>
            </>
          ) : (
            <div>Fail!</div>
          )}

          <Button text="Return to Quests" link="/quest" />
          <Button text="Return to Profile" link="/profile" />
        </div>
      ) : (
        // If ShowQuizEnd is not true (and there are more questions), continue quiz
        <>
          <div className="has-text-centered">
            <div className="">
              <p></p>
              <p>
                <span>You are solving clue {currentQuestion + 1}</span>/{questions.length}
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
    </div>
  );
};

export default DesertRuin;
