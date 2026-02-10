import { Course, Lesson, QuizQuestion, Module } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    slug: "physical-foundations-of-behavior",
    title: "Physical & Biological Foundations of Behavior",
    category: "Neuroscience",
    description: "PhD-level research into the biological mechanisms, neural pathways, and physical manifestations of human action and reaction.",
    thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
    duration: "16 Weeks",
    lessons: 64,
    students: 450,
    price: 199,
    mode: "Online",
    validityPeriod: "16 Months",
    instructor: {
      name: "Dr. Sarah Mitchell",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah",
    },
  },
  {
    id: "2",
    slug: "advanced-human-behavior",
    title: "Advanced Human Behavior & Psychological Research",
    category: "Psychology",
    description: "Deep dive into complex behavioral patterns, cognitive architectures, and social psychological research methodologies at the doctoral level.",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop",
    duration: "14 Weeks",
    lessons: 52,
    students: 820,
    price: 189,
    mode: "Online",
    validityPeriod: "14 Months",
    instructor: {
      name: "Prof. Arthur Chen",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Arthur",
    },
  },
  {
    id: "3",
    slug: "organizational-behavior-leadership",
    title: "Organizational Behavior & Systemic Leadership",
    category: "Management",
    description: "Examining the dynamics of group behavior, corporate culture, and systemic leadership through the lens of PhD research.",
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
    duration: "12 Weeks",
    lessons: 40,
    students: 1100,
    price: 179,
    mode: "Offline",
    validityPeriod: "12 Months",
    instructor: {
      name: "Dr. Elena Rodriguez",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Elena",
    },
  },
  {
    id: "4",
    slug: "client-consumer-behavior",
    title: "Client & Consumer Behavior: Decision Analysis",
    category: "Economics",
    description: "Advanced doctoral research into consumer decision-making, behavioral economics, and the psychology of client interactions.",
    thumbnail: "https://images.unsplash.com/photo-144465330034a-1df308e23b37?q=80&w=2070&auto=format&fit=crop",
    duration: "10 Weeks",
    lessons: 36,
    students: 650,
    price: 159,
    mode: "Online",
    validityPeriod: "10 Months",
    instructor: {
      name: "Prof. David Low",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=David",
    },
  },
  {
    id: "5",
    slug: "family-systems-behavior",
    title: "Family Systems & Intergenerational Behavior",
    category: "Sociology",
    description: "PhD research into family dynamics, intergenerational transmission of behavior, and systemic therapeutic interventions.",
    thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
    duration: "12 Weeks",
    lessons: 44,
    students: 380,
    price: 169,
    mode: "Offline",
    validityPeriod: "12 Months",
    instructor: {
      name: "Dr. Julianne Smith",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Julianne",
    },
  },
  {
    id: "6",
    slug: "prosocial-behavior-kindness",
    title: "Prosocial Behavior: Sympathy, Kindness & Humanity",
    category: "Humanities",
    description: "Investigating the evolutionary, psychological, and sociological roots of kindness, sympathy, and altruistic behavior.",
    thumbnail: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    duration: "2 Weeks",
    lessons: 28,
    students: 940,
    price: 149,
    mode: "Online",
    validityPeriod: "2 Months",
    instructor: {
      name: "Dr. Marcus Thorne",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus",
    },
  },
];

const generateLessons = (lessonTitles: string[]): Lesson[] => {
  return lessonTitles.map((title, index) => ({
    id: `L${index + 1}-${Math.random().toString(36).substr(2, 5)}`,
    title,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    duration: "45m",
    type: "video"
  }));
};

const generateQuiz = (questions: QuizQuestion[]): Lesson => ({
  id: `QZ-${Math.random().toString(36).substr(2, 5)}`,
  title: "Final Doctorate Examination",
  duration: "120m",
  type: "quiz",
  questions: questions
});

export const courseDetails: Record<string, { about: string; learningOutcomes: string[]; modules: Module[] }> = {
  "physical-foundations-of-behavior": {
    about: "This PhD-level research course explores the intricate relationship between physical biology and behavioral output. We examine the latest neuro-imaging data, endocrine influences, and genetic predispositions that shape how humans interact with their environment.",
    learningOutcomes: [
      "Analyze neural pathways and their behavioral correlations",
      "Evaluate the impact of endocrine systems on emotional regulation",
      "Investigate genetic markers for specific behavioral traits",
      "Critique current neuro-biological research methodologies",
      "Develop novel research frameworks for biological behavioral studies",
      "Synthesize physical data into comprehensive behavioral models"
    ],
    modules: [
      {
        id: "M1",
        title: "Neuro-Anatomical Foundations",
        lessons: generateLessons(["Limbic System & Action", "Prefrontal Cortex Regulation", "Synaptic Plasticity", "Neural Network Mapping"])
      },
      {
        id: "M2",
        title: "Biological Feedback Loops",
        lessons: generateLessons(["Hormonal Influences", "Sensory Processing", "Motor Output Dynamics", "Homeostasis & Behavior"])
      },
      {
        id: "M3",
        title: "Final Assessment",
        lessons: [generateQuiz([
          {
            id: "q1",
            question: "Upload a brief recording (video) explaining the function of the Amygdala in behavioral stress response.",
            submissionType: "video",
          },
          {
            id: "q2",
            question: "Identify the neural pathway shown in the attached image and list its primary neuro-transmitters.",
            submissionType: "mcq",
            options: ["Dopaminergic Pathway", "Serotonergic Pathway", "GABAergic System", "Glutamatergic Circuit"],
            correctAnswer: 0,
            requiredImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop"
          },
          {
            id: "q3",
            question: "Submit your research proposal (PDF) for the 'Homeostasis & Behavior' longitudinal study.",
            submissionType: "file",
          },
          {
            id: "q4",
            question: "Which hormone is most closely associated with social bonding and trust?",
            submissionType: "mcq",
            options: ["Cortisol", "Adrenaline", "Oxytocin", "Estrogen"],
            correctAnswer: 2
          }
        ])]
      }
    ]
  },
  "advanced-human-behavior": {
    about: "A doctoral exploration into the depths of human psychology. This course challenges existing paradigms and encourages researchers to investigate the subconscious, cognitive biases, and social pressures that dictate human action.",
    learningOutcomes: [
      "Critically assess classical and modern psychological theories",
      "Design advanced behavioral observation experiments",
      "Interpret complex cognitive data through statistical models",
      "Address ethical challenges in behavioral research",
      "Explore the intersection of phenomenology and behavior",
      "Contribute to the body of knowledge in cognitive science"
    ],
    modules: [
      {
        id: "M1",
        title: "Cognitive Architectures",
        lessons: generateLessons(["Memory Systems", "Attention Mechanisms", "Decision-Making Heuristics", "Metacognition"])
      },
      {
        id: "M2",
        title: "Social Behavioral Dynamics",
        lessons: generateLessons(["Groupthink & Conformity", "Identity Formation", "Cultural Behavioral Variance", "Prosocial vs Antisocial Paradigms"])
      },
      {
        id: "M3",
        title: "Final Assessment",
        lessons: [generateQuiz([
          {
            id: "q1",
            question: "What is the 'confirmation bias'?",
            options: ["The tendency to agree with everyone", "The tendency to search for information that supports existing beliefs", "The ability to recall long-term memories", "A physical brain defect"],
            correctAnswer: 1
          },
          {
            id: "q2",
            question: "Who developed the concept of 'Collective Unconscious'?",
            options: ["Sigmund Freud", "Carl Jung", "B.F. Skinner", "Jean Piaget"],
            correctAnswer: 1
          }
        ])]
      }
    ]
  },
  "organizational-behavior-leadership": {
    about: "Focused on the intersection of management and psychology, this research-heavy course examines how organizations function as living systems. Students will investigate leadership styles, power dynamics, and institutional change.",
    learningOutcomes: [
      "Model systemic organizational changes",
      "Deconstruct leadership dynamics in diverse environments",
      "Evaluate the impact of corporate culture on productivity",
      "Research conflict resolution in high-stakes environments",
      "Analyze systemic power structures within organizations",
      "Design interventions for organizational health"
    ],
    modules: [
      {
        id: "M1",
        title: "Systemic Organizational Theory",
        lessons: generateLessons(["Complexity in Organizations", "Cultural Archetypes", "Feedback Systems", "Institutional Memory"])
      },
      {
        id: "M2",
        title: "Leadership & Power",
        lessons: generateLessons(["Transformational Leadership", "Distributed Authority", "Power Dynamics", "Ethical Governance"])
      },
      {
        id: "M3",
        title: "Final Assessment",
        lessons: [generateQuiz([
          {
            id: "q1",
            question: "Transformational leadership primarily focuses on:",
            options: ["Punishment and reward", "Inspiring followers to exceed their own self-interests", "Maintaining the status quo", "Strict hierarchy"],
            correctAnswer: 1
          }
        ])]
      }
    ]
  },
  "client-consumer-behavior": {
    about: "This course applies PhD research to the economic sphere, looking at how clients and consumers make choices. It blends behavioral economics with advanced psychological testing to predict market trends.",
    learningOutcomes: [
      "Engineer predictive models for consumer choice",
      "Analyze the psychological impact of digital touchpoints",
      "Evaluate irrationality in economic decision-making",
      "Research the 'Client Journey' through qualitative data",
      "Synthesize market data into behavioral insights",
      "Critique traditional economic models via behavioral lens"
    ],
    modules: [
      {
        id: "M1",
        title: "Behavioral Economics",
        lessons: generateLessons(["Nudge Theory", "Loss Aversion", "Choice Architecture", "Utility Functions"])
      },
      {
        id: "M2",
        title: "The Digital Consumer",
        lessons: generateLessons(["Attention Economy", "UX Psychology", "Algorithmic Influence", "Trust & Loyalty Mechanics"])
      },
      {
        id: "M3",
        title: "Final Assessment",
        lessons: [generateQuiz([
          {
            id: "q1",
            question: "Loss aversion suggests that:",
            options: ["Gains are better than losses", "The pain of losing is twice as powerful as the joy of gaining", "People don't care about money", "Markets are always rational"],
            correctAnswer: 1
          }
        ])]
      }
    ]
  },
  "family-systems-behavior": {
    about: "Researching the foundational unit of society. This course looks at intergenerational trauma, sibling dynamics, and the evolution of family structures in the 21st century.",
    learningOutcomes: [
      "Apply Bowenian and Structural family theories",
      "Investigate intergenerational behavioral transmission",
      "Research the impact of modern technology on family bonds",
      "Evaluate therapeutic interventions in family systems",
      "Analyze the sociology of evolving family units",
      "Design large-scale longitudinal family studies"
    ],
    modules: [
      {
        id: "M1",
        title: "Intergenerational Dynamics",
        lessons: generateLessons(["Genograms & Patterns", "Trauma Transmission", "Attachment Styles", "Family Narratives"])
      },
      {
        id: "M2",
        title: "Modern Family Challenges",
        lessons: generateLessons(["Digital Boundaries", "Blended Family Dynamics", "Economic Pressures", "Crisis & Resilience"])
      },
      {
        id: "M3",
        title: "Final Assessment",
        lessons: [generateQuiz([
          {
            id: "q1",
            question: "What is a 'Genogram' used for in family research?",
            options: ["Measuring IQ", "Mapping family relationships and medical history", "Calculating family income", "Genetic sequencing"],
            correctAnswer: 1
          }
        ])]
      }
    ]
  },
  "prosocial-behavior-kindness": {
    about: "What makes us human? This course researches the light side of humanity—kindness, sympathy, and altruism. We look at evolutionary biological advantages and sociological impacts of prosocial behavior.",
    learningOutcomes: [
      "Trace the evolutionary roots of altruism",
      "Measure the psychological impact of kindness on the 'giver'",
      "Research the 'Ripple Effect' of prosocial actions",
      "Analyze empathy-building methodologies in education",
      "Critique the biological vs sociological roots of sympathy",
      "Develop frameworks for fostering global humanitarianism"
    ],
    modules: [
      {
        id: "M1",
        title: "The Roots of Kindness",
        lessons: generateLessons(["Evolutionary Altruism", "Mirror Neurons & Empathy", "Oxytocin & Connection", "Cultural Virtue Systems"])
      },
      {
        id: "M2",
        title: "Applied Humanity",
        lessons: generateLessons(["Sympathy vs Empathy", "Compassion Fatigue", "Prosocial Intervention", "The Future of Altruism"])
      },
      {
        id: "M3",
        title: "Final Assessment",
        lessons: [generateQuiz([
          {
            id: "q1",
            question: "Altruism is defined as:",
            options: ["Helping others for personal gain", "Selfless concern for the well-being of others", "A form of social dominance", "An accidental behavior"],
            correctAnswer: 1
          }
        ])]
      }
    ]
  }
};
