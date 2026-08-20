"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is your experience level?",
    options: ["Complete beginner", "Some experience", "Advanced trader"],
  },
  {
    question: "What do you mainly want to do?",
    options: ["Buy and hold", "Spot trading", "Futures / leverage", "Copy trading"],
  },
  {
    question: "What matters most?",
    options: ["Lowest fees", "Highest security", "Ease of use", "Bonuses and features"],
  },
];

const results: Record<string, { name: string; href: string; reason: string }> = {
  Binance: {
    name: "Binance",
    href: "https://go.cryptosbeginner.com/binance",
    reason: "Best all-round starting point for most beginners and intermediate users.",
  },
  Bybit: {
    name: "Bybit",
    href: "https://go.cryptosbeginner.com/Bybit",
    reason: "Stronger fit if you want derivatives and a cleaner trading interface.",
  },
  Bitget: {
    name: "Bitget",
    href: "https://go.cryptosbeginner.com/Bitget-Bonus",
    reason: "Best match if you want to follow other traders instead of doing everything yourself.",
  },
  Kraken: {
    name: "Kraken",
    href: "https://go.cryptosbeginner.com/Kraken",
    reason: "Better if security reputation matters more than the lowest possible fees.",
  },
};

export default function ExchangeFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    const next = [...answers, answer];
    setAnswers(next);

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    if (next.includes("Highest security")) setResult("Kraken");
    else if (next.includes("Copy trading")) setResult("Bitget");
    else if (next.includes("Futures / leverage")) setResult("Bybit");
    else setResult("Binance");
  };

  if (result) {
    const data = results[result];
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl border shadow-sm text-center">
        <h3 className="text-xl font-bold mb-2 text-slate-900">Your best match</h3>
        <p className="text-3xl font-extrabold text-emerald-600 mb-3">{data.name}</p>
        <p className="text-slate-600 mb-6">{data.reason}</p>
        <a
          href={data.href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700"
        >
          Open {data.name} →
        </a>
        <button
          onClick={() => {
            setStep(0);
            setAnswers([]);
            setResult(null);
          }}
          className="block w-full mt-4 text-sm text-slate-500 hover:underline"
        >
          Restart quiz
        </button>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl border shadow-sm">
      <div className="text-sm text-slate-500 mb-2">Question {step + 1} of {questions.length}</div>
      <h3 className="text-lg font-bold mb-4 text-slate-900">{current.question}</h3>
      <div className="space-y-3">
        {current.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full text-left px-4 py-3 rounded-lg border hover:border-emerald-500 hover:bg-emerald-50 transition text-slate-800"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}