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
        options: ["Study ∧ Fail", "¬Study → ¬Fail", "Study ∨ Fail", "Fail → Study"],
        correct: 2,
        explanation: "'Unless P, Q' is logically equivalent to 'P or Q'. So, 'Study or Fail'."
    },
    {
        question: "If 'A' is 'The flight is on time' and 'B' is 'The flight is cancelled', which option is impossible for 'A ∨ B' to be false?",
        options: ["The flight is late but not cancelled", "The flight is on time and cancelled", "The flight is on time but late", "The flight is neither on time nor cancelled"],
        correct: 3,
        explanation: "A disjunction (A ∨ B) is only false if BOTH A and B are false. 'Neither on time nor cancelled' means ¬A and ¬B, which makes the disjunction false."
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
        explanation: "The negation of (A ∧ B) is (¬A ∨ ¬B). So we negate both attributes and change 'and' to 'or'."
    },
    {
        question: "What is the double negation of 'The cat is black'?",
        options: ["The cat is not black", "The cat is white", "The cat is black", "The cat is not white"],
        correct: 2,
        explanation: "A double negation, ¬(¬A), is logically equivalent to the original statement A."
    }
  ]
};
