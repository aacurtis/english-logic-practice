Update Instructions for English Logic Practice App

Please update the following two files in the src/ directory to include the new "Builder Mode" and the requested Postfix Negation (e.g., p') changes.

Step 1: Update src/questions.js

Replace the entire content of src/questions.js with the code below. This includes the updated quiz data (using postfix negation) and the new translation exercises.

export const quizQuestions = {
  conjunction: [
    {
      question: "Which logical expression best represents: \"It is raining, but the ground is dry\"?",
      options: ["A ∨ B", "A ∧ B", "A → B", "A ↔ B"],
      correct: 1,
      explanation: "In logic, 'but' is treated exactly the same as 'and'. Both statements must be true for the sentence to be true."
    },
    {
      question: "If A is 'It is windy' and B is 'It is cold', what is 'It is windy. Moreover, it is cold'?",
      options: ["A ∨ B", "A → B", "A ∧ B", "B → A"],
      correct: 2,
      explanation: "Words like 'Moreover', 'In addition', and 'Also' are logically equivalent to Conjunction (AND). They simply add more true information."
    },
    {
      question: "Which connective is most appropriate for: \"He is clever and hardworking\"?",
      options: ["∨ (Disjunction)", "→ (Implication)", "∧ (Conjunction)", "↔ (Equivalence)"],
      correct: 2,
      explanation: "The word 'and' directly translates to a logical Conjunction (∧)."
    }
  ],
  disjunction: [
    {
      question: "Select the correct connective for: \"You can have cake or you can have ice cream.\"",
      options: ["∧", "∨", "→", "¬"],
      correct: 1,
      explanation: "The word 'or' signifies a Disjunction (∨), meaning at least one of the options is true."
    },
    {
        question: "What is the logical meaning of \"Unless you study, you will fail\"?",
        options: ["Study ∧ Fail", "Study' → Fail'", "Study ∨ Fail", "Fail → Study"],
        correct: 2,
        explanation: "'Unless P, Q' is logically equivalent to 'P or Q'. So, 'Study or Fail'."
    },
    {
        question: "If 'A' is 'The flight is on time' and 'B' is 'The flight is cancelled', which option is impossible for 'A ∨ B' to be false?",
        options: ["The flight is late but not cancelled", "The flight is on time and cancelled", "The flight is on time but late", "The flight is neither on time nor cancelled"],
        correct: 3,
        explanation: "A disjunction (A ∨ B) is only false if BOTH A and B are false. 'Neither on time nor cancelled' means A' and B', which makes the disjunction false."
    }
  ],
  implication: [
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
      question: "Which represents 'B is a necessary condition for A'?",
      options: ["B → A", "A → B", "A ∧ B", "A ∨ B"],
      correct: 1,
      explanation: "If B is necessary for A, it means you cannot have A without B. If A is true, B *must* be true. Therefore, A → B."
    },
    {
      question: "What does 'A is a sufficient condition for B' mean?",
      options: ["If B then A", "A if and only if B", "If A then B", "B is not required for A"],
      correct: 2,
      explanation: "'Sufficient' directly translates to the first part of an implication. If A happens, it is enough to guarantee B. So, A → B."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'Healthy plant growth follows from sufficient water.'",
      options: [
        "If healthy plant growth occurs, then there is sufficient water.",
        "If there is sufficient water, then healthy plant growth occurs.",
        "Healthy plant growth if and only if there is sufficient water.",
        "If there is not sufficient water, then plants do not grow healthily."
      ],
      correct: 1,
      explanation: "'B follows from A' means A → B. Here, sufficient water leads to healthy plant growth."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'Increased availability of information is a necessary condition for further technological advances.'",
      options: [
        "If there are further technological advances, then information availability has increased.",
        "If information availability increases, then technological advances occur.",
        "If there are no technological advances, then information availability has not increased.",
        "If information availability is necessary, then technology advances."
      ],
      correct: 0,
      explanation: "If B is a necessary condition for A, then A → B. Technological advances require increased information availability."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'Errors were introduced only if there was a modification of the program.'",
      options: [
        "If the program was modified, then errors were introduced.",
        "If errors were introduced, then the program was modified.",
        "If the program was not modified, then errors were introduced.",
        "If errors were not introduced, then the program was modified."
      ],
      correct: 1,
      explanation: "'A only if B' translates to A → B. Errors occurred only if the program was modified."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'Fuel savings implies good insulation or storm windows throughout.'",
      options: [
        "If there is good insulation or storm windows, then there are fuel savings.",
        "If there are fuel savings, then there is good insulation or storm windows.",
        "Fuel savings if and only if there is good insulation or storm windows.",
        "If there are no fuel savings, then there is no insulation and no storm windows."
      ],
      correct: 1,
      explanation: "'Implies' directly indicates an implication. Fuel savings lead to good insulation or storm windows."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'Candidate Lu winning the election will be a sufficient condition for property taxes to increase.'",
      options: [
        "If property taxes increase, then Candidate Lu won the election.",
        "If Candidate Lu wins the election, then property taxes increase.",
        "Candidate Lu wins the election only if property taxes increase.",
        "Property taxes increase if and only if Candidate Lu wins."
      ],
      correct: 1,
      explanation: "If A is a sufficient condition for B, then A → B. Lu winning guarantees increased property taxes."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'The user clicks Pause only if the game level changes.'",
      options: [
        "If the game level changes, then the user clicks Pause.",
        "If the user clicks Pause, then the game level changes.",
        "The user clicks Pause if and only if the game level changes.",
        "If the user does not click Pause, then the game level does not change."
      ],
      correct: 1,
      explanation: "'A only if B' translates to A → B. Clicking Pause happens only when the level changes."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'The components are scarce, therefore the price increases.'",
      options: [
        "If the price increases, then the components are scarce.",
        "If the components are scarce, then the price increases.",
        "The price increases only if the components are scarce.",
        "The components are scarce if and only if the price increases."
      ],
      correct: 1,
      explanation: "'Therefore' indicates a conclusion following from a condition. Scarcity leads to price increases."
    },
    {
      question: "Rewrite the statement in the form 'If A, then B': 'Healthy hair is a necessary condition for good shampoo.'",
      options: [
        "If the shampoo is good, then hair is healthy.",
        "If hair is healthy, then the shampoo is good.",
        "Healthy hair if and only if the shampoo is good.",
        "If hair is not healthy, then the shampoo is not good."
      ],
      correct: 0,
      explanation: "If B is necessary for A, then A → B. Good shampoo requires healthy hair."
    }
  ],
  equivalence: [
    {
      question: "What is the logical equivalent of 'A is necessary and sufficient for B'?",
      options: ["A → B", "B → A", "A ↔ B", "A ∧ B"],
      correct: 2,
      explanation: "Necessary (B → A) AND Sufficient (A → B) combines to form Equivalence (A ↔ B)."
    },
    {
        question: "The statement \"A if and only if B\" is true when:",
        options: ["A is true and B is false", "A and B have the same truth value", "A is false and B is true", "A and B are both not necessarily true"],
        correct: 1,
        explanation: "Equivalence (A ↔ B) is true when both A and B are true, or when both A and B are false. They must have the same truth value."
    },
    {
        question: "If 'A ↔ B' is false, what can we conclude?",
        options: ["A and B are both false", "A and B have different truth values", "A and B are both true", "A is true"],
        correct: 1,
        explanation: "For an equivalence to be false, one statement must be true and the other false."
    }
  ],
  negation: [
    {
      question: "Select the correct negation for: \"The river is shallow or polluted.\"",
      options: ["The river is not shallow or not polluted.", "The river is neither shallow nor polluted.", "The river is deep or unpolluted."],
      correct: 1,
      explanation: "To negate an OR (Disjunction), you must negate both parts and switch to AND. \"Neither shallow nor polluted\" implies Not Shallow AND Not Polluted."
    },
    {
      question: "Using De Morgan's laws, what is the negation of 'He is tall and handsome'?",
      options: ["He is short and ugly", "He is not tall or not handsome", "He is short or ugly", "He is neither tall nor handsome"],
      correct: 1,
      explanation: "The negation of (A ∧ B) is (A' ∨ B'). So we negate both attributes and change 'and' to 'or'."
    },
    {
      question: "What is the negation of 'Julie likes butter but hates cream.'",
      options: [
        "Julie hates butter and cream.",
        "Julie does not like butter or does not hate cream.",
        "Julie dislikes butter but loves cream.",
        "Julie hates butter or likes cream."
      ],
      correct: 1,
      explanation: "Let A be 'Julie likes butter' and B be 'Julie hates cream'. The statement is A ∧ B. Its negation is A' ∨ B': Julie does not like butter OR Julie does not hate cream."
    },
    {
      question: "What is the negation of 'The answer is either 2 or 3.'",
      options: [
        "The answer is both 2 and 3.",
        "The answer is neither 2 nor 3.",
        "The answer is 2 but not 3.",
        "The answer is not 2 or is 3."
      ],
      correct: 1,
      explanation: "Let A be 'The answer is 2' and B be 'The answer is 3'. The statement is A ∨ B. Its negation is A' ∧ B': the answer is neither 2 nor 3."
    },
    {
      question: "What is the negation of 'Cucumbers are green and seedy.'",
      options: [
        "Cucumbers are not green and not seedy.",
        "Cucumbers are not green or not seedy.",
        "Cucumbers are neither green nor seedy.",
        "Cucumbers are green or seedy."
      ],
      correct: 1,
      explanation: "Let A be 'Cucumbers are green' and B be 'Cucumbers are seedy'. The statement is A ∧ B. Its negation is A' ∨ B': not green OR not seedy."
    },
    {
      question: "What is the negation of '2 < 7 and 3 is odd.'",
      options: [
        "2 ≥ 7 and 3 is even.",
        "2 ≥ 7 or 3 is even.",
        "2 < 7 or 3 is odd.",
        "2 ≥ 7 or 3 is odd."
      ],
      correct: 1,
      explanation: "Let A be '2 < 7' and B be '3 is odd'. The statement is A ∧ B. Negation: A' ∨ B'. Here A' is '2 ≥ 7' and B' is '3 is even'."
    },
    {
      question: "What is the negation of 'The carton is sealed or the milk is sour.'",
      options: [
        "The carton is unsealed and the milk is not sour.",
        "The carton is unsealed or the milk is not sour.",
        "The carton is sealed and the milk is not sour.",
        "The carton is neither sealed nor sour."
      ],
      correct: 0,
      explanation: "Let A be 'The carton is sealed' and B be 'The milk is sour'. The statement is A ∨ B. Negation is A' ∧ B': unsealed AND not sour."
    },
    {
      question: "What is the negation of 'If you build it, they will come.'",
      options: [
        "You build it and they do not come.",
        "If they come, then you built it.",
        "You do not build it and they do not come.",
        "You build it only if they come."
      ],
      correct: 0,
      explanation: "An implication A → B is negated as A ∧ B'. Here: You build it AND they do not come."
    },
    {
      question: "What is the negation of 'If the food is good, then the service is excellent.'",
      options: [
        "The food is good and the service is not excellent.",
        "The food is not good and the service is excellent.",
        "The food is good or the service is excellent.",
        "The food is not good or the service is not excellent."
      ],
      correct: 0,
      explanation: "Negation of A → B is A ∧ B'. Here: food is good AND service is not excellent."
    },
    {
      question: "What is the negation of 'Either the food is good or the service is excellent.'",
      options: [
        "The food is not good and the service is not excellent.",
        "The food is not good or the service is not excellent.",
        "The food is good and the service is excellent.",
        "Neither the food is good nor the service is excellent."
      ],
      correct: 0,
      explanation: "This is A ∨ B. Negation is A' ∧ B': not good AND not excellent. (Option 4 is a rephrase but option 1 is the direct logical form.)"
    },
    {
      question: "What is the negation of 'Either the food is good and the service is excellent, or else the price is high.'",
      options: [
        "The food is good and the service is excellent and the price is high.",
        "The food is not good or the service is not excellent, and the price is not high.",
        "Either the food is not good or the service is not excellent, or the price is not high.",
        "The food is not good and the service is not excellent and the price is not high."
      ],
      correct: 1,
      explanation: "Let A be '(food good ∧ service excellent)' and B be '(price high)'. Statement is A ∨ B. Negation is A' ∧ B'. By De Morgan, A' is (food good' ∨ service excellent'), and B' is (price not high). So: (food good' ∨ service excellent') ∧ (price not high)."
    },
    {
      question: "What is the negation of 'Neither the food is good nor the service excellent.'",
      options: [
        "The food is good or the service is excellent.",
        "The food is not good or the service is not excellent.",
        "The food is good and the service is excellent.",
        "The food is not good and the service is not excellent."
      ],
      correct: 0,
      explanation: "'Neither A nor B' means A' ∧ B'. Its negation is A ∨ B: the food is good OR the service is excellent."
    },
        {
      question: "What is the negation of 'The processor is fast but the printer is slow.'",
      options: [
        "The processor is not fast or the printer is not slow.",
        "The processor is not fast and the printer is not slow.",
        "If the processor is fast, then the printer is slow.",
        "The processor is fast or the printer is slow."
      ],
      correct: 0,
      explanation: "Let P = 'processor is fast' and S = 'printer is slow'. The statement is P ∧ S ('but' = 'and'). The negation of P ∧ S is P' ∨ S': processor not fast OR printer not slow."
    },
    {
      question: "What is the negation of 'The processor is fast or else the printer is slow.'",
      options: [
        "The processor is not fast and the printer is not slow.",
        "The processor is not fast or the printer is not slow.",
        "The processor is fast and the printer is slow.",
        "If the processor is fast, then the printer is slow."
      ],
      correct: 0,
      explanation: "Let P = 'processor is fast' and S = 'printer is slow'. The statement is P ∨ S. The negation of a disjunction is P' ∧ S': processor not fast AND printer not slow."
    },
    {
      question: "What is the negation of 'If the processor is fast, then the printer is slow.'",
      options: [
        "The processor is fast and the printer is not slow.",
        "The processor is not fast and the printer is slow.",
        "The processor is not fast or the printer is not slow.",
        "If the printer is slow, then the processor is fast."
      ],
      correct: 0,
      explanation: "An implication P → S is negated as P ∧ S'. Here: processor is fast AND printer is not slow."
    },
    {
      question: "What is the negation of 'Either the processor is fast and the printer is slow, or else the file is damaged.'",
      options: [
        "The processor is not fast and the printer is not slow and the file is not damaged.",
        "The processor is not fast or the printer is not slow, and the file is not damaged.",
        "The processor is fast and the printer is slow and the file is not damaged.",
        "The file is not damaged or the processor is not fast or the printer is not slow."
      ],
      correct: 1,
      explanation: "Let P = 'processor fast', S = 'printer slow', D = 'file damaged'. The statement is (P ∧ S) ∨ D. Negation is ((P ∧ S) ∨ D)' = (P ∧ S)' ∧ D' = (P' ∨ S') ∧ D'."
    },
    {
      question: "What is the negation of 'If the file is not damaged and the processor is fast, then the printer is slow.'",
      options: [
        "The file is not damaged and the processor is fast and the printer is not slow.",
        "The file is damaged and the processor is fast and the printer is not slow.",
        "The file is not damaged or the processor is not fast or the printer is not slow.",
        "If the printer is slow, then the file is not damaged and the processor is fast."
      ],
      correct: 0,
      explanation: "Let D = 'file damaged', P = 'processor fast', S = 'printer slow'. The statement is (D' ∧ P) → S. Negation of A → B is A ∧ B', so: (D' ∧ P) ∧ S'."
    },
    {
      question: "What is the negation of 'The printer is slow only if the file is damaged.'",
      options: [
        "The printer is slow and the file is not damaged.",
        "The printer is not slow and the file is damaged.",
        "The printer is not slow or the file is damaged.",
        "If the file is damaged, then the printer is slow."
      ],
      correct: 0,
      explanation: "'S only if D' translates to S → D. The negation of S → D is S ∧ D': printer is slow AND file is not damaged."
    }
  ]
};

export const translationExercises = [
    {
        context: "Let p = \"It is raining\" and q = \"It is windy\".",
        question: "It is raining and windy.",
        answer: "p ∧ q"
    },
    {
        context: "Let p = \"It is raining\" and q = \"It is windy\".",
        question: "It is raining but not windy.",
        answer: "p ∧ q'"
    },
    {
        context: "Let p = \"You eat your vegetables\" and q = \"You get dessert\".",
        question: "You get dessert only if you eat your vegetables.",
        answer: "q → p"
    },
    {
        context: "Let p = \"You eat your vegetables\" and q = \"You get dessert\".",
        question: "You get dessert if you eat your vegetables.",
        answer: "p → q"
    },
    {
        context: "Let p = \"The printer is slow\" and q = \"The file is damaged\".",
        question: "The printer is slow or the file is damaged.",
        answer: "p ∨ q"
    },
    {
        context: "Let p = \"The printer is slow\" and q = \"The file is damaged\".",
        question: "Neither is the printer slow nor is the file damaged.",
        answer: "p' ∧ q'"
    },
    {
        context: "Let p = \"It is cold\" and q = \"It is snowing\".",
        question: "It is cold and it is not snowing.",
        answer: "p ∧ q'"
    },
    {
        context: "Let p = \"It is cold\" and q = \"It is snowing\".",
        question: "It is not the case that it is cold or snowing.",
        answer: "(p ∨ q)'"
    },
    {
        context: "Let p = \"You study\" and q = \"You pass\".",
        question: "You pass if and only if you study.",
        answer: "q ↔ p"
    },
    {
        context: "Let p = \"It is sunny\" and q = \"It is warm\".",
        question: "It is sunny but it is not warm.",
        answer: "p ∧ q'"
    }
];


Step 2: Update src/App.jsx

Replace the entire content of src/App.jsx with the code below. This version correctly imports the data from questions.js and implements the new "Builder" interface.

import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, ArrowRight, Brain, RefreshCw, ChevronDown, ChevronUp, HelpCircle, List, Pencil, Delete } from 'lucide-react';
import { quizQuestions, translationExercises } from './questions';

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
    symbol: "A'",
    summary: 'Reverses the truth value.',
    details: [
      { term: 'Not', example: 'It is not raining.' },
      { term: 'Negating AND', example: 'Negation of "Tall ∧ Thin" is "Tall\' ∨ Thin\'" (Short or Fat).', note: "De Morgan's Law." },
      { term: 'Negating OR', example: 'Negation of "Shallow ∨ Polluted" is "Shallow\' ∧ Polluted\'" (Deep and Unpolluted).', note: 'Often phrased as "Neither... nor".' }
    ]
  }
];

// --- UTILITIES ---
function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

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
          { id: 'practice', label: 'Quiz', icon: HelpCircle },
          { id: 'builder', label: 'Build', icon: Pencil },
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
    const [operation, setOperation] = useState('conjunction');
    const questions = useMemo(() => {
        const allQuestions = quizQuestions[operation] || [];
        const shuffled = shuffleArray([...allQuestions]);
        return shuffled.slice(0, 10);
      }, [operation]);
      
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
  
    useEffect(() => {
        setCurrentQ(0);
        setSelected(null);
        setIsCorrect(null);
        setScore(0);
        setFinished(false);
      }, [operation]);
      

    const handleAnswer = (index) => {
      if (selected !== null) return;
      setSelected(index);
      const correct = index === questions[currentQ].correct;
      setIsCorrect(correct);
      if (correct) setScore(s => s + 1);
    };
  
    const nextQuestion = () => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(c => c + 1);
        setSelected(null);
        setIsCorrect(null);
      } else {
        setFinished(true);
      }
    };
  
    const resetQuiz = () => {
        setOperation(op => op); // Re-trigger a shuffle
        setCurrentQ(0);
        setSelected(null);
        setIsCorrect(null);
        setScore(0);
        setFinished(false);
      };
  
    if (finished) {
      const percentage = Math.round((score / questions.length) * 100);
      
      return (
        <div className="max-w-xl mx-auto text-center py-12 px-6 bg-white rounded-2xl shadow-lg border border-slate-100 mt-8">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            {percentage >= 70 ? <CheckCircle className="w-10 h-10" /> : <Brain className="w-10 h-10" />}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Complete!</h2>
          <p className="text-lg text-slate-600 mb-8">
            You scored <span className="font-bold text-blue-600">{score}</span> out of <span className="font-bold text-slate-900">{questions.length}</span> ({percentage}%)
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
  
    const question = questions[currentQ];
  
    if (!question) {
        return (
            <div className="text-center">
                <p>No questions available for this topic.</p>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(quizQuestions).map((op) => (
              <button
                key={op}
                onClick={() => setOperation(op)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  operation === op
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {op.charAt(0).toUpperCase() + op.slice(1)}
              </button>
            ))}
          </div>
        </div>
  
        <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Question {currentQ + 1} / {questions.length}</span>
          <div className="flex items-center gap-2">
             <span className="text-sm font-bold text-slate-700">Score: {score}</span>
             <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
               <div 
                  className="h-full bg-blue-500 transition-all duration-500" 
                  style={{ width: `${((currentQ) / questions.length) * 100}%` }}
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
                  {currentQ === questions.length - 1 ? "Show Results" : "Next Question"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

const BuilderSection = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect', null
    const [completed, setCompleted] = useState(false);

    const exercise = translationExercises[currentIdx];

    const symbols = [
        { label: 'p', value: 'p' },
        { label: 'q', value: 'q' },
        { label: 'r', value: 'r' },
        { label: '∧', value: '∧' }, // AND
        { label: '∨', value: '∨' }, // OR
        { label: '→', value: '→' }, // IMPLIES
        { label: '↔', value: '↔' }, // IFF
        { label: "'", value: "'" }, // NOT
        { label: '(', value: '(' },
        { label: ')', value: ')' },
    ];

    const handleSymbolClick = (val) => {
        if (feedback === 'correct') return;
        setUserInput(prev => prev + val);
        setFeedback(null);
    };

    const handleBackspace = () => {
        if (feedback === 'correct') return;
        setUserInput(prev => prev.slice(0, -1));
        setFeedback(null);
    };

    const handleClear = () => {
        if (feedback === 'correct') return;
        setUserInput('');
        setFeedback(null);
    };

    const checkAnswer = () => {
        // Normalize: remove spaces
        const normUser = userInput.replace(/\s+/g, '');
        const normAns = exercise.answer.replace(/\s+/g, '');
        // Note: Simple string match. A real logic checker would parse ASTs.
        // For this level, exact symbol match is reasonably expected if UI provides symbols.
        // We will allow flexible parenthesis if possible, but simpler to match string for now.

        if (normUser === normAns) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
    };

    const nextExercise = () => {
        if (currentIdx < translationExercises.length - 1) {
            setCurrentIdx(c => c + 1);
            setUserInput('');
            setFeedback(null);
        } else {
            setCompleted(true);
        }
    };

    const restartBuilder = () => {
        setCurrentIdx(0);
        setUserInput('');
        setFeedback(null);
        setCompleted(false);
    };

    if (completed) {
        return (
            <div className="max-w-xl mx-auto text-center py-12 px-6 bg-white rounded-2xl shadow-lg border border-slate-100 mt-8">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Practice Complete!</h2>
                <p className="text-lg text-slate-600 mb-8">
                    You have successfully translated all the sentences.
                </p>
                <button 
                    onClick={restartBuilder}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all"
                >
                    <RefreshCw className="w-5 h-5" /> Start Over
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Exercise {currentIdx + 1} / {translationExercises.length}</span>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-200">
                <div className="mb-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-bold text-slate-500 uppercase mb-2">Context</p>
                    <p className="text-lg text-slate-800 font-medium">{exercise.context}</p>
                </div>

                <div className="mb-8">
                    <p className="text-sm font-bold text-slate-500 uppercase mb-2">Translate into Logic</p>
                    <h3 className="text-2xl font-bold text-slate-900 leading-snug">"{exercise.question}"</h3>
                </div>

                {/* Input Area */}
                <div className={`flex items-center justify-between p-4 rounded-xl border-2 mb-6 transition-all ${
                    feedback === 'correct' ? 'border-green-500 bg-green-50' : 
                    feedback === 'incorrect' ? 'border-red-300 bg-white' : 'border-slate-300 bg-white'
                }`}>
                    <div className="text-2xl font-mono tracking-wider min-h-[32px] w-full overflow-x-auto whitespace-nowrap">
                        {userInput || <span className="text-slate-300 select-none">Tap symbols below...</span>}
                    </div>
                    <div className="flex gap-2 ml-4">
                         {feedback === 'correct' && <CheckCircle className="w-6 h-6 text-green-600" />}
                         {feedback === 'incorrect' && <XCircle className="w-6 h-6 text-red-500" />}
                    </div>
                </div>

                {/* Keyboard */}
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-6">
                    {symbols.map((sym) => (
                        <button
                            key={sym.label}
                            onClick={() => handleSymbolClick(sym.value)}
                            disabled={feedback === 'correct'}
                            className="p-3 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200 rounded-lg font-mono text-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {sym.label}
                        </button>
                    ))}
                </div>
                
                {/* Actions */}
                <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                    <div className="flex gap-2">
                        <button 
                            onClick={handleBackspace} 
                            disabled={!userInput || feedback === 'correct'}
                            className="p-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30"
                            title="Backspace"
                        >
                            <Delete className="w-5 h-5" />
                        </button>
                        <button 
                             onClick={handleClear}
                             disabled={!userInput || feedback === 'correct'}
                             className="px-4 py-2 text-slate-500 text-sm font-medium hover:text-slate-700"
                        >
                            Clear
                        </button>
                    </div>

                    {feedback === 'correct' ? (
                         <button 
                            onClick={nextExercise}
                            className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            Next <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                        <button 
                            onClick={checkAnswer}
                            disabled={!userInput}
                            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Check
                        </button>
                    )}
                </div>

                 {/* Hint / Incorrect Feedback */}
                 {feedback === 'incorrect' && (
                    <div className="mt-4 text-center text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-2">
                        Not quite. Double check your connectives and negations.
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

        {view === 'builder' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Symbolic Translation Builder</h2>
              <p className="text-slate-500 mt-2 text-lg">Construct logical formulas from English sentences using the symbol keyboard.</p>
            </div>
            <BuilderSection />
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


Step 3: Deploy Changes

Run the following commands in your terminal to build the application and deploy the changes to Firebase.

npm run build
firebase deploy

