import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    slug: "physical-foundations-of-behavior",
    title: "Physical & Biological Foundations of Behavior",
    category: "Neuroscience",
    description: "PhD-level research into the biological mechanisms, neural pathways, and physical manifestations of human action and reaction.",
    thumbnail: "/courses/physical-behavior.png",
    duration: "16 Weeks",
    lessons: 64,
    students: 450,
    price: 199,
    mode: "Online",
    instructor: {
      name: "Dr. Sarah Mitchell",
      avatar: "/instructors/john.png",
    },
  },
  {
    id: "2",
    slug: "advanced-human-behavior",
    title: "Advanced Human Behavior & Psychological Research",
    category: "Psychology",
    description: "Deep dive into complex behavioral patterns, cognitive architectures, and social psychological research methodologies at the doctoral level.",
    thumbnail: "/courses/human-behavior.png",
    duration: "14 Weeks",
    lessons: 52,
    students: 820,
    price: 189,
    mode: "Online",
    instructor: {
      name: "Prof. Arthur Chen",
      avatar: "/instructors/john.png",
    },
  },
  {
    id: "3",
    slug: "organizational-behavior-leadership",
    title: "Organizational Behavior & Systemic Leadership",
    category: "Management",
    description: "Examining the dynamics of group behavior, corporate culture, and systemic leadership through the lens of PhD research.",
    thumbnail: "/courses/organizational-behavior.png",
    duration: "12 Weeks",
    lessons: 40,
    students: 1100,
    price: 179,
    mode: "Offline",
    instructor: {
      name: "Dr. Elena Rodriguez",
      avatar: "/instructors/john.png",
    },
  },
  {
    id: "4",
    slug: "client-consumer-behavior",
    title: "Client & Consumer Behavior: Decision Analysis",
    category: "Economics",
    description: "Advanced doctoral research into consumer decision-making, behavioral economics, and the psychology of client interactions.",
    thumbnail: "/courses/client-behavior.png",
    duration: "10 Weeks",
    lessons: 36,
    students: 650,
    price: 159,
    mode: "Online",
    instructor: {
      name: "Prof. David Low",
      avatar: "/instructors/john.png",
    },
  },
  {
    id: "5",
    slug: "family-systems-behavior",
    title: "Family Systems & Intergenerational Behavior",
    category: "Sociology",
    description: "PhD research into family dynamics, intergenerational transmission of behavior, and systemic therapeutic interventions.",
    thumbnail: "/courses/family-behavior.png",
    duration: "12 Weeks",
    lessons: 44,
    students: 380,
    price: 169,
    mode: "Offline",
    instructor: {
      name: "Dr. Julianne Smith",
      avatar: "/instructors/john.png",
    },
  },
  {
    id: "6",
    slug: "prosocial-behavior-kindness",
    title: "Prosocial Behavior: Sympathy, Kindness & Humanity",
    category: "Humanities",
    description: "Investigating the evolutionary, psychological, and sociological roots of kindness, sympathy, and altruistic behavior.",
    thumbnail: "/courses/kindness-humanity.png",
    duration: "8 Weeks",
    lessons: 28,
    students: 940,
    price: 149,
    mode: "Online",
    instructor: {
      name: "Dr. Marcus Thorne",
      avatar: "/instructors/john.png",
    },
  },
];

export const courseDetails = {
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
        title: "Neuro-Anatomical Foundations",
        lessons: ["Limbic System & Action", "Prefrontal Cortex Regulation", "Synaptic Plasticity", "Neural Network Mapping"]
      },
      {
        title: "Biological Feedback Loops",
        lessons: ["Hormonal Influences", "Sensory Processing", "Motor Output Dynamics", "Homeostasis & Behavior"]
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
        title: "Cognitive Architectures",
        lessons: ["Memory Systems", "Attention Mechanisms", "Decision-Making Heuristics", "Metacognition"]
      },
      {
        title: "Social Behavioral Dynamics",
        lessons: ["Groupthink & Conformity", "Identity Formation", "Cultural Behavioral Variance", "Prosocial vs Antisocial Paradigms"]
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
        title: "Systemic Organizational Theory",
        lessons: ["Complexity in Organizations", "Cultural Archetypes", "Feedback Systems", "Institutional Memory"]
      },
      {
        title: "Leadership & Power",
        lessons: ["Transformational Leadership", "Distributed Authority", "Power Dynamics", "Ethical Governance"]
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
        title: "Behavioral Economics",
        lessons: ["Nudge Theory", "Loss Aversion", "Choice Architecture", "Utility Functions"]
      },
      {
        title: "The Digital Consumer",
        lessons: ["Attention Economy", "UX Psychology", "Algorithmic Influence", "Trust & Loyalty Mechanics"]
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
        title: "Intergenerational Dynamics",
        lessons: ["Genograms & Patterns", "Trauma Transmission", "Attachment Styles", "Family Narratives"]
      },
      {
        title: "Modern Family Challenges",
        lessons: ["Digital Boundaries", "Blended Family Dynamics", "Economic Pressures", "Crisis & Resilience"]
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
        title: "The Roots of Kindness",
        lessons: ["Evolutionary Altruism", "Mirror Neurons & Empathy", "Oxytocin & Connection", "Cultural Virtue Systems"]
      },
      {
        title: "Applied Humanity",
        lessons: ["Sympathy vs Empathy", "Compassion Fatigue", "Prosocial Intervention", "The Future of Altruism"]
      }
    ]
  }
};
