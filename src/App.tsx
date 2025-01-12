import { useState } from 'react';
import { Car, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { questions } from './data/questions.ts';

function App() {
  const [currentCar, setCurrentCar] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer: string) => {
    const question = questions[currentCar].questions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + question.points);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[currentCar].questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const nextCar = currentCar + 1;
      if (nextCar < questions.length) {
        setCurrentCar(nextCar);
        setCurrentQuestion(0);
        setCurrentImage(0);
      } else {
        setShowScore(true);
      }
    }
  };

  const getExpertiseLevel = () => {
    const maxScore = questions.reduce((acc, car) => {
      return acc + car.questions.reduce((sum, q) => sum + q.points, 0);
    }, 0);
    
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 90) return "C2 - Araba Gurmesi";
    if (percentage >= 80) return "C1 - Uzman";
    if (percentage >= 70) return "B2 - İleri Seviye";
    if (percentage >= 60) return "B1 - Orta-İleri Seviye";
    if (percentage >= 50) return "A2 - Orta Seviye";
    return "A1 - Başlangıç";
  };

  const resetQuiz = () => {
    setCurrentCar(0);
    setCurrentQuestion(0);
    setCurrentImage(0);
    setScore(0);
    setShowScore(false);
  };

  const nextImage = () => {
    if (currentImage < questions[currentCar].images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Car className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold">Araba Gurmesi Testi</h1>
        </div>

        {showScore ? (
          <div className="max-w-md mx-auto bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <div className="text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h2 className="text-2xl font-bold mb-4">Test Tamamlandı!</h2>
              <p className="text-xl mb-2">
                Toplam Puan: {score}
              </p>
              <p className="text-lg mb-4">
                Seviyeniz: <span className="font-bold">{getExpertiseLevel()}</span>
              </p>
              <button
                onClick={resetQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Testi Tekrar Başlat
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="relative">
              <img
                src={questions[currentCar].images[currentImage].url}
                alt={questions[currentCar].images[currentImage].alt}
                className="w-full h-[400px] object-contain bg-black/40"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={prevImage}
                  className={`p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors ${
                    currentImage === 0 ? 'invisible' : ''
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className={`p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors ${
                    currentImage === questions[currentCar].images.length - 1 ? 'invisible' : ''
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">
                {currentImage + 1} / {questions[currentCar].images.length}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="text-sm text-blue-400">
                  Araç {currentCar + 1}/{questions.length} - 
                  Soru {currentQuestion + 1}/{questions[currentCar].questions.length}
                </span>
                <h2 className="text-xl font-semibold mt-2">
                  {questions[currentCar].questions[currentQuestion].question}
                </h2>
                <p className="text-sm text-blue-400 mt-1">
                  {questions[currentCar].questions[currentQuestion].points} Puan
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {questions[currentCar].questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className="bg-white/5 hover:bg-white/10 py-3 px-4 rounded-lg transition-colors text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;