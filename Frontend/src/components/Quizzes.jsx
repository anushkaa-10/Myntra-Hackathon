import React, { useState } from 'react';
import Navbar from "../components/Navbar";

const questions = [
  {
    id: 1,
    type: 'text',
    question: '1. Which decade popularized the mini skirt?',
    options: ['1960s', '1970s', '1980s', '1950s'],
    answer: '1960s'
  },
  {
    id: 2,
    type: 'image',
    question: '2. Identify the logo:',
    image: 'https://w7.pngwing.com/pngs/466/162/png-transparent-lv-louis-vuitton-logo.png',
    options: ['Louis Vuitton', 'Versace', 'Dior', 'Gucci'],
    answer: 'Louis Vuitton'
  },
  {
    id: 3,
    type: 'text',
    question: '3. Which designer introduced the concept of ready-to-wear fashion?',
    options: ['Giorgio Armani', 'Jean-Paul Gaultier', 'Pierre Cardin', 'Yves Saint Laurent'],
    answer: 'Pierre Cardin'
  },
  {
    id: 4,
    type: 'text',
    question: '4. Which decade popularized the mini skirt?',
    options: ['1960s', '1970s', '1980s', '1950s'],
    answer: '1960s'
  },
  {
    id: 5,
    type: 'text',
    question: '5. Which decade popularized the mini skirt?',
    options: ['1960s', '1970s', '1980s', '1950s'],
    answer: '1960s'
  },
  {
    id: 6,
    type: 'image',
    question: '6. Identify the logo:',
    image: 'https://w7.pngwing.com/pngs/466/162/png-transparent-lv-louis-vuitton-logo.png',
    options: ['Louis Vuitton', 'Versace', 'Dior', 'Gucci'],
    answer: 'Louis Vuitton'
  },
  {
    id: 7,
    type: 'text',
    question: '7. Which designer introduced the concept of ready-to-wear fashion?',
    options: ['Giorgio Armani', 'Jean-Paul Gaultier', 'Pierre Cardin', 'Yves Saint Laurent'],
    answer: 'Pierre Cardin'
  },
  {
    id: 8,
    type: 'text',
    question: '8. Which designer introduced the concept of ready-to-wear fashion?',
    options: ['Giorgio Armani', 'Jean-Paul Gaultier', 'Pierre Cardin', 'Yves Saint Laurent'],
    answer: 'Pierre Cardin'
  },
  {
    id: 9,
    type: 'image',
    question: '9. Identify the logo:',
    image: 'https://w7.pngwing.com/pngs/466/162/png-transparent-lv-louis-vuitton-logo.png',
    options: ['Louis Vuitton', 'Versace', 'Dior', 'Gucci'],
    answer: 'Louis Vuitton'
  },
  {
    id: 10,
    type: 'text',
    question: '10. Which designer introduced the concept of ready-to-wear fashion?',
    options: ['Giorgio Armani', 'Jean-Paul Gaultier', 'Pierre Cardin', 'Yves Saint Laurent'],
    answer: 'Pierre Cardin'
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      calculateDiscount();
      setShowScore(true);
    }
  };

  const calculateDiscount = () => {
    const percentageCorrect = (score / questions.length) * 100;

    if (percentageCorrect >= 80 && percentageCorrect < 90) {
      setDiscount(25);
    } else if (percentageCorrect >= 90 && percentageCorrect < 100) {
      setDiscount(30);
    } else if (percentageCorrect === 100) {
      setDiscount(35);
    }

    generateCouponCode();
  };

  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedCode = '';

    for (let i = 0; i < 8; i++) {
      generatedCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setCouponCode(generatedCode);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      <Navbar />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/941/323/desktop-wallpaper-myntra-s-branding-fiasco-is-a-sign-of-the-times-by-antony-terence-the-startup.jpg)' }}
      />
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-3xl relative z-10">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
            {discount > 0 && (
              <h3 className="text-4xl font-bold mb-4 text-pink-500">HURRAY!!! You won a Discount!</h3>
            )}
            <p className="text-lg mb-4">Discount Earned: {discount}%</p>
            <p className="text-lg mb-4">Coupon Code: {couponCode}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].type === 'image' && (
              <img src={questions[currentQuestion].image} alt="Question" className="mb-4 mx-auto" />
            )}
            <div className="flex flex-col space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
