import { useEffect, useState } from "react";
import { FaChartLine, FaClock, FaTasks } from "react-icons/fa";
import frame from "../assets/frame.png";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: <FaTasks />, text: "Task Management" },
    { icon: <FaClock />, text: "Time Tracking" },
    { icon: <FaChartLine />, text: "Productivity Analytics" },
  ];

  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/10 animate-pulse-slow"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container lg:px-20 relative z-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div
            className={`flex flex-col justify-center space-y-8 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
              <p className="text-lg font-medium text-indigo-400">
                Productivity Reimagined
              </p>
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                Tasker
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-lg">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                  style={{
                    transitionDelay: `${index * 0.2 + 0.5}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <span className="text-purple-500">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap space-x-4 pt-4">
              <a href="#tasks" className="btn-primary group">
                Get Started
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a href="#" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center md:order-2 relative transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl opacity-30"></div>

            <div className="relative bg-gradient-to-b from-[#262B36]/50 to-[#1D212B]/50 p-1 rounded-2xl shadow-2xl shadow-purple-500/10 z-10 card-hover backdrop-blur-sm border border-white/5">
              <div className="bg-[#1D212B]/80 p-2 rounded-xl overflow-hidden">
                <img
                  className="relative max-md:w-full transform hover:scale-105 transition-all duration-700 rounded-lg"
                  src={frame}
                  width="426"
                  height="390"
                  alt="Tasker App"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="absolute -left-8 -top-8 h-16 w-16 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-lg shadow-lg shadow-purple-500/20 blur-[1px] animate-bounce"
              style={{ animationDuration: "6s" }}
            ></div>
            <div
              className="absolute -right-5 -bottom-5 h-12 w-12 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full shadow-lg shadow-indigo-500/20 blur-[1px] animate-bounce"
              style={{ animationDuration: "8s", animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
