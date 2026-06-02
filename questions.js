const questions = [
{
  category: "Chemistry Fundamentals",
  question: "What is the smallest unit of an element?",
  answers: [
    "Molecule",
    "Atom",
    "Compound"
  ],
  correct: 1
},

{
  category: "Chemistry Fundamentals",
  question: "Which of the following is a compound?",
  answers: [
    "Oxygen",
    "Hydrogen",
    "Water"
  ],
  correct: 2
},

{
  category: "Chemistry Fundamentals",
  question: "What is the pH of a neutral solution?",
  answers: [
    "7",
    "3",
    "10"
  ],
  correct: 0
},

{
  category: "Chemistry Fundamentals",
  question: "Which of the following is an acid?",
  answers: [
    "Vinegar",
    "Soap",
    "Baking Soda"
  ],
  correct: 0
},

{
  category: "Chemistry Fundamentals",
  question: "What does the periodic table organize?",
  answers: [
    "Compounds",
    "Elements",
    "Molecules"
  ],
  correct: 1
},
  {
    category: "Earth & Space Science Unit: Climate & Weather",
    question: "What is the main difference between climate and weather?",
    answers: [
      "Climate is short-term, weather is long-term",
      "Weather only happens in cities",
      "They mean the same thing",
      "Weather only happens in cities",
      "Climate is long-term patterns, weather is short-term conditions"
    ],
    correct: 3
  },
  {
    category: "Earth & Space Science Unit: Climate & Weather",
    question: "How does latitude affect climate?",
    answers: [
      "It controls ocean salinity",
      "It determines how much sunlight a region receives",
      "It affects earthquakes",
      "It controls wind direction only"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Climate & Weather",
    question: "Ocean currents can:",
    answers: [
      "Only cool land",
      "Only warm land",
      "Move heat around the planet and influence climate",
      "Stop precipitation completely"
    ],
    correct: 2
  },
  {
    category: "Earth & Space Science Unit: Climate & Weather",
    question: "What is NOT a present change in climate?",
    answers: [
      "Rising average temperature",
      "Changing Precipitation patterns",
      "More severe storms",
      "Increase in biodiversity"
    ],
    correct: 3
  },
  {
    category: "Earth & Space Science Unit: Climate & Weather",
    question: "True or False: Areas near large bodies of water usually have milder temperatures.",
    answers: [
      "True",
      "False"
    ],
    correct: 0
  },

  {
    category: "Earth & Space Science Unit: Greenhouse Effect",
    question: "Which gas is NOT a major greenhouse gas?",
    answers: [
      "Carbon dioxide",
      "Methane",
      "Oxygen",
      "Water vapor"
    ],
    correct: 2
  },
  {
    category: "Earth & Space Science Unit: Greenhouse Effect",
    question: "The Earth & Space Science Unit: Greenhouse Effect is important because it:",
    answers: [
      "Cools Earth",
      "Makes Earth habitable by trapping heat",
      "Stops sunlight from entering",
      "Causes earthquakes"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Greenhouse Effect",
    question: "Which activity increases greenhouse gases the most?",
    answers: [
      "Buring fossil fuels",
      "Planting trees",
      "Recycling plastic",
      "Using solar panels"
    ],
    correct: 0
  },
  {
    category: "Earth & Space Science Unit: Greenhouse Effect",
    question: "One effect of global warming in polar regions is:",
    answers: [
      "Increased ice formation",
      "Melting ice caps",
      "More land creation",
      "Stronger gravity"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Greenhouse Effect",
    question: "True or False: Sea levels rise only due to thermal expansion.",
    answers: [
      "True",
      "False"
    ],
    correct: 1
  },

  {
    category: "Earth & Space Science Unit: Energy Transfer",
    question: "Heat transfer in the atmosphere occurs mainly through:",
    answers: [
      "Evaporation only",
      "Magnetism",
      "Photosynthesis",
      "Conduction, convection, and radiation"
    ],
    correct: 3
  },
  {
    category: "Earth & Space Science Unit: Energy Transfer",
    question: "Convection happens when:",
    answers: [
      "Light travels through space",
      "Rock break apart",
      "Hot air rises and cold air sinks",
      "Water freezes"
    ],
    correct: 2
  },
  {
    category: "Earth & Space Science Unit: Energy Transfer",
    question: "The water cycle includes:",
    answers: [
      "Melting and freezing only",
      "Evaporation, condensation, and precipitation",
      "Only rainfall",
      "Only ocean currents"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Energy Transfer",
    question: "Evaporation is important because it:",
    answers: [
      "Transfers energy and water into the atmosphere",
      "Removes oxygen from air",
      "Stops clouds from forming",
      "Causes earthquakes"
    ],
    correct: 0
  },
  {
    category: "Earth & Space Science Unit: Energy Transfer",
    question: "True or False: Carbon moves between living things, air, and oceans.",
    answers: [
      "True",
      "False"
    ],
    correct: 0
  },

  {
    category: "Earth & Space Science Unit: Past Climates",
    question: "Ice cores help scientists study:",
    answers: [
      "Earthquakes",
      "Past atmospheric gases and temperature",
      "Ocean salinity only",
      "Volcano shapes"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Past Climates",
    question: "Tree rings can show:",
    answers: [
      "Animal populations",
      "Historical rainfall and climate conditions",
      "Earth’s magnetic field",
      "Ocean depth"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Past Climates",
    question: "Satellites are useful because they:",
    answers: [
      "Predict earthquakes only",
      "Measure global climate changes over time",
      "Control weather",
      "Create fossil fuels"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Past Climates",
    question: "Fossils help scientists understand:",
    answers: [
      "Future weather",
      "Ancient climates and environments",
      "Modern traffic patterns",
      "Ocean tides only"
    ],
    correct: 1
  },
  {
    category: "Earth & Space Science Unit: Past Climates",
    question: "True or False: Long-term temperature data helps identify climate trends.",
    answers: [
      "True",
      "False"
    ],
    correct: 0
  },

  {
    category: "Earth & Space Science Unit: Real world impacts",
    question: "Climate change can increase extreme weather because:",
    answers: [
      "It reduces sunlight",
      "It stops wind completely",
      "It destabilizes atmospheric and ocean systems",
      "It lowers sea level everywhere"
    ],
    correct: 2
  },
  {
    category: "Earth & Space Science Unit: Real world impacts",
    question: "One major impact of rising sea levels is:",
    answers: [
      "More farmland inland",
      "Stronger mountains",
      "Less rainfall",
      "Coastal flooding and displacement of people"
    ],
    correct: 3
  },
  {
    category: "Earth & Space Science Unit: Real world impacts",
    question: "Tsunamis are usually caused by:",
    answers: [
      "Hurricanes",
      "Earthquakes under the ocean",
      "Droughts",
      "Volcanic ash clouds only"
    ],
    correct: 1
  },
];
