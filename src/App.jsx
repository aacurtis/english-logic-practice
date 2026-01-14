import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, ArrowRight, Brain, RefreshCw, ChevronDown, ChevronUp, HelpCircle, List } from 'lucide-react';

// --- DATA & CONTENT ---

const studyContent = [
  {
    id: 'conjunction',
    title: 'Conjunction (AND)',
    symbol: 'A ∧ B',
    summary: 'True only when both A and B are true.',
    details: [
      { term: 'and', example: 'It is raining and the ground is wet.' },
      { term: 'but', example: 'It is raining, but the ground is dry.', note: 'Logically equivalent to AND. The "surprise" element is ignored in logic.' },
      { term: 'also / moreover / in addition', example: 'It is raining. Moreover, it is dark.', note: 'These add information, effectively stating both things are true.' },
      { term: 'Compact sentences', example: '"It is raining and windy" becomes "It is raining" ∧ "It is windy".' }
    ]
  },
  {
    id: 'disjunction',
    title: 'Disjunction (OR)',
    symbol: 'A ∨ B',
    summary: 'True when at least one is true. False only when both are false.',
    details: [
      { term: 'or', example: 'It is sunny or it is raining.' },
      { term: 'either... or', example: 'Either it is sunny or it is raining.' }
    ]
  },
  {
    id: 'implication',
    title: 'Implication',
    symbol: 'A → B',
    summary: 'False only when A is True and B is False.',
    details: [
      { term: 'If A, then B', example: 'If it rains, then ground is wet.', note: 'Standard form.' },
      { term: 'A implies B', example: 'Rain implies wet ground.' },
      { term: 'A, therefore B', example: 'It is raining, therefore the ground is wet.' },
      { term: 'B follows from A', example: '"The ground is wet follows from it raining."', note: 'Watch the order! The conclusion (B) is stated first in English.' },
      { term: 'A only if B', example: '"I buy ice cream only if everyone passes."', note: 'A = Buy ice cream, B = Everyone passes. A cannot happen without B.' },
      { term: 'Sufficient', example: '"A is sufficient for B".', note: 'A → B' },
      { term: 'Necessary', example: '"B is necessary for A".', note: 'A → B (B must be true if A is true)' }
    ]
  },
  {
    id: 'equivalence',
    title: 'Equivalence',
    symbol: 'A ↔ B',
    summary: 'True when A and B have the same truth value.',
    details: [
      { term: 'if and only if', example: 'A if and only if B.' },
      { term: 'Necessary and Sufficient', example: 'A is necessary and sufficient for B.' },
      { term: 'Logic', example: '(A → B) ∧ (B → A)' }
    ]
  },
  {
    id: 'negation',
    title: 'Negation',
    symbol: "A' (or ¬A)",
    summary: 'Reverses the truth value.',
    details: [
      { term: 'Not', example: 'It is not raining.' },
      { term: 'Negating AND', example: 'Negation of "Tall AND Thin" is "Not Tall OR Not Thin" (Short or Fat).', note: "De Morgan's Law." },
      { term: 'Negating OR', example: 'Negation of "Shallow OR Polluted" is "Not Shallow AND Not Polluted" (Deep and Unpolluted).', note: 'Often phrased as "Neither... nor".' }
    ]
  }
];

const quizQuestions = [
  {
    question: "Which logical expression best represents: \"It is raining, but the ground is dry\"?",
    options: ["A ∨ B", "A ∧ B", "A → B", "A ↔ B"],
    correct: 1,
    explanation: "In logic, 'but' is treated exactly the same as 'and'. Both statements must be true for the sentence to be true."
  },
  {
    question: "Translate: \"The ground being wet follows from it raining.\"",
    options: ["Rain → Wet", "Wet → Rain", "Rain ∧ Wet", "Rain ↔ Wet"],
    correct: 0,
    explanation: "\"B follows from A\" translates to A → B. The condition (Rain) leads to the conclusion (Wet). The English phrasing puts the consequent first."
  },
  {
    question: "Identify the antecedent (A) in: \"I will buy ice cream only if everyone passes.\"",
    options: ["Everyone passes", "I will buy ice cream"],
    correct: 1,
    explanation: "The structure is \"A only if B\". Here, A is the event that happens only if the condition is met. A = Buying ice cream. B = Everyone passes."
  },
  {
    question: "Select the correct negation for: \"The river is shallow or polluted.\"",
    options: ["The river is not shallow or not polluted.", "The river is neither shallow nor polluted.", "The river is deep or unpolluted."],
    correct: 1,
    explanation: "To negate an OR (Disjunction), you must negate both parts and switch to AND. \"Neither shallow nor polluted\" implies Not Shallow AND Not Polluted."
  },
  {
    question: "If A is 'It is windy' and B is 'It is cold', what is 'It is windy. Moreover, it is cold'?",
    options: ["A ∨ B", "A → B", "A ∧ B", "B → A"],
    correct: 2,
    explanation: "Words like 'Moreover', 'In addition', and 'Also' are logically equivalent to Conjunction (AND). They simply add more true information."
  },
  {
    question: "What is the logical equivalent of 'A is necessary and sufficient for B'?",
    options: ["A → B", "B → A", "A ↔ B", "A ∧ B"],
    correct: 2,
    explanation: "Necessary (B → A) AND Sufficient (A → B) combines to form Equivalence (A ↔ B)."
  },
  {
    question: "Which represents 'B is a necessary condition for A'?",
    options: ["B → A", "A → B", "A ∧ B", "A ∨ B"],
    correct: 1,
    explanation: "If B is necessary for A, it means you cannot have A without B. If A is true, B *must* be true. Therefore, A → B."
  }
];

// --- COMPONENTS ---

const Header = ({ setView, currentView }) => (
  <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-10">
    <div className="max-w-5xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <h1 className="text-xl md:text-2xl font-bold flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <span>Discrete Math Logic</span>
      </h1>
      <nav className="flex bg-slate-800 p-1 rounded-lg">
        {[
          { id: 'study', label: 'Study', icon: BookOpen },
          { id: 'practice', label: 'Practice', icon: HelpCircle },
          { id: 'reference', label: 'Reference', icon: List }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
              currentView === item.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

const StudyCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-blue-50/50' : 'bg-white hover:bg-slate-50'}`}
      >
        <div className="flex items-center gap-5">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-mono text-xl font-bold shadow-sm transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
            {item.symbol}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{item.summary}</p>
          </div>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-slate-400 w-6 h-6" />
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-2 bg-blue-50/50 border-t border-blue-100">
          <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4 mt-2">English Translation Guide</h4>
          <div className="grid gap-3">
            {item.details.map((detail, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm flex flex-col md:flex-row gap-2 md:gap-4 md:items-start">
                <span className="font-bold text-blue-700 md:w-40 shrink-0 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 opacity-50" />
                  {detail.term}
                </span>
                <div className="text-slate-700 text-sm">
                  <p className="font-medium">"{detail.example}"</p>
                  {detail.note && <p className="text-xs text-slate-500 mt-1.5 bg-slate-100 inline-block px-2 py-1 rounded">Note: {detail.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const QuizSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    const correct = index === quizQuestions[currentQ].correct;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setIsCorrect(null);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setIsCorrect(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <div className="max-w-xl mx-auto text-center py-12 px-6 bg-white rounded-2xl shadow-lg border border-slate-100 mt-8">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          {percentage >= 70 ? <CheckCircle className="w-10 h-10" /> : <Brain className="w-10 h-10" />}
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Complete!</h2>
        <p className="text-lg text-slate-600 mb-8">
          You scored <span className="font-bold text-blue-600">{score}</span> out of <span className="font-bold text-slate-900">{quizQuestions.length}</span> ({percentage}%)
        </p>
        <button 
          onClick={resetQuiz}
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          <RefreshCw className="w-5 h-5" /> Try Again
        </button>
      </div>
    );
  }

  const question = quizQuestions[currentQ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Question {currentQ + 1} / {quizQuestions.length}</span>
        <div className="flex items-center gap-2">
           <span className="text-sm font-bold text-slate-700">Score: {score}</span>
           <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
             <div 
                className="h-full bg-blue-500 transition-all duration-500" 
                style={{ width: `${((currentQ) / quizQuestions.length) * 100}%` }}
             />
           </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-200">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-snug">{question.question}</h3>
        
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
              className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-200 group ${
                selected === null 
                  ? 'border-slate-100 hover:border-blue-300 hover:bg-blue-50/50' 
                  : selected === idx 
                    ? isCorrect 
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-red-500 bg-red-50 text-red-900'
                    : idx === question.correct 
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-slate-100 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg">{opt}</span>
                {selected === idx && (
                  isCorrect ? <CheckCircle className="w-6 h-6 text-green-600" /> : <XCircle className="w-6 h-6 text-red-600" />
                )}
                {selected === null && (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-blue-400" />
                )}
              </div>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex gap-3 mb-2">
                <div className="mt-1">
                    {isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Brain className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                    <p className="font-bold text-slate-800">Explanation</p>
                    <p className="text-slate-600 mt-1 leading-relaxed">{question.explanation}</p>
                </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={nextQuestion}
                className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
              >
                {currentQ === quizQuestions.length - 1 ? "Show Results" : "Next Question"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ReferenceTable = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Connective</th>
            <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">English Keywords</th>
            <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Symbol</th>
            <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Formula</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="hover:bg-blue-50/30 transition-colors">
            <td className="p-5 text-slate-900 font-bold">Conjunction</td>
            <td className="p-5 text-slate-600 text-sm">and, but, also, moreover, in addition</td>
            <td className="p-5 font-mono text-blue-600 font-bold">∧</td>
            <td className="p-5 font-mono text-slate-500 text-sm">A ∧ B</td>
          </tr>
          <tr className="hover:bg-blue-50/30 transition-colors">
            <td className="p-5 text-slate-900 font-bold">Disjunction</td>
            <td className="p-5 text-slate-600 text-sm">or, either...or</td>
            <td className="p-5 font-mono text-blue-600 font-bold">∨</td>
            <td className="p-5 font-mono text-slate-500 text-sm">A ∨ B</td>
          </tr>
          <tr className="hover:bg-blue-50/30 transition-colors">
            <td className="p-5 text-slate-900 font-bold">Implication</td>
            <td className="p-5 text-slate-600 text-sm">
                <div className="flex flex-col gap-1">
                    <span>if A then B</span>
                    <span>B follows from A</span>
                    <span>A only if B</span>
                    <span>A is sufficient for B</span>
                    <span>B is necessary for A</span>
                </div>
            </td>
            <td className="p-5 font-mono text-blue-600 font-bold">→</td>
            <td className="p-5 font-mono text-slate-500 text-sm">A → B</td>
          </tr>
          <tr className="hover:bg-blue-50/30 transition-colors">
            <td className="p-5 text-slate-900 font-bold">Equivalence</td>
            <td className="p-5 text-slate-600 text-sm">if and only if, necessary and sufficient</td>
            <td className="p-5 font-mono text-blue-600 font-bold">↔</td>
            <td className="p-5 font-mono text-slate-500 text-sm">A ↔ B</td>
          </tr>
          <tr className="hover:bg-blue-50/30 transition-colors">
            <td className="p-5 text-slate-900 font-bold">Negation</td>
            <td className="p-5 text-slate-600 text-sm">not, false that, neither...nor</td>
            <td className="p-5 font-mono text-blue-600 font-bold">'</td>
            <td className="p-5 font-mono text-slate-500 text-sm">A'</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState('study');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <Header setView={setView} currentView={view} />
      
      <main className="max-w-5xl mx-auto p-4 md:p-6 mt-6">
        {view === 'study' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl mb-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-3">Logic & Language</h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                Master the art of translating English sentences into logical expressions. 
                Explore the cards below to see how common phrases map to specific symbols.
              </p>
            </div>
            <div className="space-y-4">
              {studyContent.map(item => (
                <StudyCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {view === 'practice' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Practice Quiz</h2>
              <p className="text-slate-500 mt-2 text-lg">Test your ability to recognize logical structures in everyday language.</p>
            </div>
            <QuizSection />
          </div>
        )}

        {view === 'reference' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Quick Reference</h2>
              <p className="text-slate-500 mt-2 text-lg">A consolidated view of symbols and their English equivalents.</p>
            </div>
            <ReferenceTable />
          </div>
        )}
      </main>
    </div>
  );
}
