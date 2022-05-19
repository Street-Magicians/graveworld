import React, { useReducer, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Button from "../Button/Button";
import { UPDATE_TOKENS, UPDATE_STAMINA } from "../../utils/actions";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER } from "../../utils/mutations";
import { useUser } from "./../AccountBox/accountContext";

const DesertQuiz = () => {
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const { addSpiritToken } = useUser();
  const questions = [
    {
      questionText:
        "I am a giant born from the sea, when I speak people flee. My blood destroys wherever it flows, but when it clots my body grows",
      answerOptions: [
        { answerText: "River", isCorrect: false },
        { answerText: "Volcano", isCorrect: true },
        { answerText: "Hurricane", isCorrect: false },
        { answerText: "Earthquake", isCorrect: false },
      ],
    },
    {
      questionText:
        "You love to watch me rise from sleep, but look my way and you will weep. You need me to have life at all, but as I grow you'll one day fall.",
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
    // push token to user's spiritToken array in DB
    console.log("receiving token");
    //Check local storage to see if they have token array, IF not create array
    const tokenArray = [];
    const flameToken = {
      name: "Flame Token",
      description: "It's a little firey keepsake",
      image: "imanimage",
    };
    tokenArray.push(flameToken);
    localStorage.setItem("tokens", JSON.stringify(tokenArray));
  };

  // function handleUpdateStamina() {

  //   };

  // TODO: comment to describe this
  return (
    <section className="box mx-4 my-2">
      {/* if ShowQuizEnd is true (once all questions have been answered), display message */}
      {showQuizEnd ? (
        <div className="has-text-centered">
          {score === 3 ? (
            <>
              <img
                src={require("./../../assets/images/sprites/placeholder.png")}
                alt="an 8-bit rendering of a golden coin"
                className="m-4 w-10"
              />
              <p className="c-navy m-2">
                Success! You piece together {score} out of {questions.length}{" "}
                clues, and and help the spirit realize their identity:
                Blazebright, the Spirit of Flames! True to their word, they
                grant you their boon: The Flame Token. You are one step closer
                to defeating the Demon Relphax!
              </p>
              <Button text="Return to Quests" link="/quest" />
              <Button text="Return to Profile" link="/profile" />
            </>
          ) : (
            <>
              <p className="c-navy m-2">
                "Hmmm, that doesn't seem right," the spirit says, "Let's keep
                trying, though. We'll figure it out soon, I just know it!"
              </p>
              <Button text="Return to Quests" link="/quest" />
              <Button text="Try Again" link="/theruin" />
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
            <div className="py-4">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="columns is-centered is-multiline ">
            {/* loops through question's answers array and displays as buttons */}
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <p
                onClick={() => handleAnswerButton(answerOption.isCorrect)}
                className="b-teal c-pink column f-1 font-reg is-2 button m-2 mx-2 has-text-weight-semibold"
              >
                {answerOption.answerText}
              </p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default DesertQuiz;
