/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Heart, Crown, Star, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ValentineSurprise = () => {
  const [step, setStep] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: 500,
    left: 120,
  });
  const [noCount, setNoCount] = useState(0);
  const [showMessage, setShowMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (showHearts) {
      const timer = setTimeout(() => setShowHearts(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showHearts]);

  const handleHeartClick = () => {
    setShowHearts(true);
    setStep((prev) => prev + 1);
  };

  const moveNoButton = () => {
    const newTop = Math.random() * (window.innerHeight - 100);
    const newLeft = Math.random() * (window.innerWidth - 100);
    setNoButtonPosition({ top: newTop, left: newLeft });
    setNoCount((prev) => prev + 1);

    const messages = [
      "My Princess deserves better! 👑",
      "Your smile is too precious! ✨",
      "Our love story must continue! 💝",
      "You're my only Princess! 👸",
      "Keep trying to resist! 😘",
      "Your Prince won't give up! 🤴",
      "My love for you is endless! 💖",
      "Every moment with you is magical! ✨",
      "Your happiness means everything to me! 😊",
      "Falling for you every day! 💕",
      "No one can take your place! 💞",
      "You're the reason my heart beats! 💓",
      "With you, forever isn't long enough! ⏳❤️",
      "Your love is my greatest treasure! 💎",
      "How can I stop loving perfection? 😍",
      "I was made to love you! 💘",
    ];

    setShowMessage(messages[Math.floor(Math.random() * messages.length)]);
    setTimeout(() => setShowMessage(""), 3000);
  };

  const handleYesClick = () => {
    setShowHearts(true);
    setStep(5);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-2">
              <Crown className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-pink-600">
                My Dearest Princess
              </h2>
              <Crown className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-lg text-gray-700">
              Let me take you on a royal journey...
            </p>
            <button
              onClick={handleHeartClick}
              className="block mx-auto mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Get Started →
            </button>
          </div>
        );
      case 1:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-pink-600">
              My Beautiful Princess
            </h2>
            <p className="text-lg text-gray-700">
              From the moment you entered my life,
              <br />
              You&apos;ve made every day feel like a fairytale...
            </p>
            <div className="flex justify-center">
              <Sparkles className="w-12 h-12 text-yellow-500 animate-pulse" />
            </div>
            <button onClick={handleHeartClick} className="animate-bounce">
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-pink-600">My Queen-to-be</h2>
            <p className="text-lg text-gray-700">
              Your royal presence lights up my world
              <br />
              Your smile outshines all the stars in the sky...
            </p>
            <div className="flex justify-center gap-2">
              <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
              <Star className="w-8 h-8 text-yellow-500 animate-bounce" />
              <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
            </div>
            <button onClick={handleHeartClick} className="animate-pulse">
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
            </button>
          </div>
        );
      case 3:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-pink-600">
              Princess of My Heart
            </h2>
            <p className="text-lg text-gray-700">
              Every moment with you is pure magic
              <br />
              Every laugh we share is a treasure...
            </p>
            <div className="flex justify-center">
              <Sparkles className="w-12 h-12 text-yellow-500 animate-bounce" />
            </div>
            <button onClick={handleHeartClick} className="animate-bounce">
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
            </button>
          </div>
        );
      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-2">
              <Crown className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-pink-600">My Royal Val</h2>
              <Crown className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-lg text-gray-700">
              Princess, will you make me the happiest person
              <br />
              by <span className="text-pink-500 font-bold">being my Val</span>?
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={handleYesClick}
                className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-lg font-semibold flex items-center gap-2"
              >
                <Crown className="w-5 h-5" />
                Yes, My Love! 💝
              </button>
            </div>
            {showMessage && (
              <p className="text-pink-500 font-bold text-lg animate-bounce">
                {showMessage}
              </p>
            )}
          </div>
        );
      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-2">
              <Crown className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-pink-600">
                My Val Princess! 👑
              </h2>
              <Crown className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-lg text-gray-700">
              You&apos;ve made my heart complete, Princess! ❤️
              <br />
              Our love story continues to be the most beautiful fairytale...
            </p>
            <p className="text-md text-pink-500">
              {noCount > 0
                ? `And you tried to escape ${noCount} times, but our love was destined! 😏`
                : "You didn't even try to resist our destiny! 🥰"}
            </p>
            <div className="flex justify-center gap-2">
              <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
              <button
                onClick={() => setStep(0)}
                className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                Restart ↺
              </button>
              <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex justify-between">
        {/* Button */}
        <div className="m-1">
          <button
            className="px-6 py-2 flex justify-center items-center bg-black/50 gap-2 hover:bg-black/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate("/letter")}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
        {/* Button */}
        <div className="m-1">
          <button
            className="px-6 py-2 flex justify-center items-center bg-black/50 gap-2 hover:bg-black/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate("/closing")}
          >
            Next page <ArrowRight />
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 relative overflow-hidden">
          {renderStep()}

          {/* Moving "No" button */}
          {step === 4 && (
            <button
              onClick={moveNoButton}
              className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-lg font-semibold fixed"
              style={{
                top: noButtonPosition.top,
                left: noButtonPosition.left,
                transform: "translate(0%, 0%)",
                transition: "top 1s, left 1s",
              }}
            >
              Not Yet
            </button>
          )}

          {/* Floating hearts animation */}
          {showHearts && (
            <div className="absolute inset-0 pointer-events-none">
              <p className="text-center text-green-500">
                😊 click the heart to continue 😊
              </p>
              {[...Array(20)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-pink-500 fill-pink-500 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${
                      2 + Math.random() * 3
                    }s linear forwards`,
                    opacity: Math.random() * 0.5 + 0.5,
                    transform: `scale(${Math.random() * 0.5 + 0.5})`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) scale(0.5);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-100vh) scale(1.5);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ValentineSurprise;
