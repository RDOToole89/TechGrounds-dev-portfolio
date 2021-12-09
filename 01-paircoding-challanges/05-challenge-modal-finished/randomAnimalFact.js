const getRandom = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

export const randomAnimalFact = (animal) => {
  const catFacts = [
    'Cats can jump up to 6 times their height',
    'Cats have a total of 18 toes',
    'There are over 500 million pet cats!',
    'Cats sleep for around 13 to 16 hours a day (70% of their life).',
    ' One of the largest domestic cat breeds is a Maine Coon.',
  ];

  const dogFacts = [
    'A dog’s nose print is unique, much like a person’s fingerprint.',
    'Seventy percent of people sign their dog’s name on their holiday cards.',
    'Human blood pressure goes down when petting a dog. And so does the dog’s.',
    'Dogs are not colorblind. They can see blue and yellow.',
    'Dogs have about 1,700 taste buds. We humans have between 2,000–10,000.',
  ];

  const parrotFacts = [
    'Parrots taste with the tops of their beaks.',
    'The heftiest Parrot weighs as much as a Cat.',
    'Your pet Parrot may outlive you',
    'The world record holder knew more Than 1,700 words',
    "A third of the world's parrots face extinction",
  ];

  switch (animal) {
    case 'cat': {
      return catFacts[getRandom(0, 5)];
    }

    case 'dog': {
      return dogFacts[getRandom(0, 5)];
    }

    case 'parrot': {
      return parrotFacts[getRandom(0, 5)];
    }
  }
};
