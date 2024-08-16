import { useState } from "react";

const questions = [
  { key: "name", question: "What's your name?" },
  { key: "age", question: "How old are you?" },
  { key: "gender", question: "What's your gender?" },
  {
    key: "lookingFor",
    question: "Are you looking for a date, friend, or chat partner?",
  },
  {
    key: "interests",
    question: "What are your main interests? (comma-separated)",
  },
  { key: "bio", question: "Tell us a bit about yourself:" },
];

export const useSignupFlow = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userData, setUserData] = useState({});

  const currentQuestion = questions[currentQuestionIndex]?.question || "";
  const isCompleted = currentQuestionIndex >= questions.length;

  const handleAnswer = (answer) => {
    const currentKey = questions[currentQuestionIndex]?.key;
    if (currentKey) {
      setUserData((prevData) => ({
        ...prevData,
        [currentKey]: answer,
      }));
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    currentQuestion,
    handleAnswer,
    isCompleted,
    userData,
  };
};
