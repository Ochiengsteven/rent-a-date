import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Select, Button, DatePicker } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useSignupFlow } from "../hooks/useSignupFlow";

const { Option } = Select;

const SignupChatbot = () => {
  const [userInput, setUserInput] = useState("");
  const { currentQuestion, handleAnswer, isCompleted, userData } =
    useSignupFlow();

  const handleSubmit = () => {
    handleAnswer(userInput);
    setUserInput("");
  };

  return (
    <div className="h-[100vh] w-screen">
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
          Welcome to DatingChat!
        </h1>
        <div className="h-80 overflow-y-auto mb-4 p-4 bg-gray-100 rounded">
          {Object.entries(userData).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-2"
            >
              <span className="font-semibold">{key}:</span> {value}
            </motion.div>
          ))}
          {!isCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold text-purple-600"
            >
              {currentQuestion}
            </motion.div>
          )}
        </div>
        {!isCompleted ? (
          <div className="flex items-center">
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onPressEnter={handleSubmit}
              placeholder="Type your answer here..."
              className="flex-grow mr-2"
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Send
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-green-600 font-semibold"
          >
            Thank you for signing up! We&apos;ll find your perfect match soon.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SignupChatbot;
