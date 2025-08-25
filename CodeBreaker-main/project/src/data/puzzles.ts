export interface Level {
  id: number;
  type: 'numeric' | 'pattern' | 'riddle' | 'memory';
  question: string;
  answer: string | number;
  hint: string;
  timeLimit?: number;
  points: number;
}

export const levels: Level[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is the sum of all prime numbers less than 10?',
    answer: 17,
    hint: 'List out all prime numbers under 10 first',
    points: 100
  },
  {
    id: 2,
    type: 'pattern',
    question: 'Complete the sequence: 2, 6, 12, 20, ?',
    answer: '30',
    hint: 'Look at the difference between consecutive numbers',
    points: 150
  },
  // ... More levels would be defined here
  {
    id: 3,
    type: 'numeric',
    question: 'What is the square root of 144?',
    answer: 12,
    hint: 'Think of a number that, when multiplied by itself, gives 144.',
    points: 100
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is 5 factorial (5!)?',
    answer: 120,
    hint: 'Factorial means multiplying the number and all smaller numbers down to 1.',
    points: 150
  },
  {
    id: 5 ,
    type: 'numeric',
    question: 'How many sides does a hexagon have?',
    answer: 6,
    hint: 'A common geometric shape.',
    points: 100
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is the result of 12 × 11?',
    answer: 132,
    hint: 'Simple multiplication.',
    points: 150
  },
  {
    id: 7,
    type: 'numeric',
    question: 'How many minutes are there in a day?',
    answer: 1440,
    hint: 'Multiply hours by minutes in an hour.',
    points: 200
  },
  {
    id: 8,
    type: 'numeric',
    question: 'How many seconds are there in an hour?',
    answer: 3600,
    hint: '60 seconds in a minute, and 60 minutes in an hour.',
    points: 200
  },
  {
    id: 9,
    type: 'numeric',
    question: 'What is 1 + 1 × 0?',
    answer: 1,
    hint: 'Follow the order of operations (PEMDAS).',
    points: 150
  },
  {
    id: 10,
    type: 'numeric',
    question: 'What is the 10th Fibonacci number?',
    answer: 55,
    hint: 'The sequence starts with 0, 1, and adds the last two numbers.',
    points: 250
  },
  {
    id: 11,
    type: 'numeric',
    question: 'How many sides does a decagon have?',
    answer: 10,
    hint: 'Deca means ten.',
    points: 120
  },
  {
    id: 12,
    type: 'numeric',
    question: 'What is the sum of the angles in a triangle?',
    answer: 180,
    hint: 'It is a fixed property of all triangles.',
    points: 200
  },
  {
    id: 13,
    type: 'numeric',
    question: 'What is 15 squared?',
    answer: 225,
    hint: 'Multiply 15 by itself.',
    points: 150
  },
  {
    id: 14,
    type: 'numeric',
    question: 'How many hours are there in a week?',
    answer: 168,
    hint: 'Multiply 7 by 24.',
    points: 200
  },
  {
    id: 15,
    type: 'numeric',
    question: 'What is the area of a square with side length 5?',
    answer: 25,
    hint: 'Area is side × side.',
    points: 150
  },
  {
    id: 16,
    type: 'numeric',
    question: 'What is the perimeter of a rectangle with length 10 and width 5?',
    answer: 30,
    hint: 'Add all four sides.',
    points: 150
  },
  {
    id: 17,
    type: 'numeric',
    question: 'What is the sum of all the angles in a hexagon?',
    answer: 720,
    hint: 'Use the formula (n - 2) × 180.',
    points: 200
  },
  {
    id: 18,
    type: 'numeric',
    question: 'What is 3 raised to the power of 4?',
    answer: 81,
    hint: 'Multiply 3 by itself four times.',
    points: 200
  },
  {
    id: 19,
    type: 'numeric',
    question: 'What is the square root of 256?',
    answer: 16,
    hint: 'Find the number that when squared equals 256.',
    points: 150
  },
  {
    id: 20,
    type: 'numeric',
    question: 'How many edges does a cube have?',
    answer: 12,
    hint: 'Count all the lines connecting its corners.',
    points: 200
  },
  {
    id: 21,
    type: 'numeric',
    question: 'What is the result of dividing 121 by 11?',
    answer: 11,
    hint: 'Simple division.',
    points: 100
  },
  {
    id: 22,
    type: 'numeric',
    question: 'What is 8 cubed?',
    answer: 512,
    hint: 'Multiply 8 by itself three times.',
    points: 200
  },
  {
    id: 23,
    type: 'numeric',
    question: 'What is the smallest prime number?',
    answer: 2,
    hint: 'It is the only even prime number.',
    points: 100
  },
  {
    id: 24,
    type: 'numeric',
    question: 'How many faces does a tetrahedron have?',
    answer: 4,
    hint: 'A tetrahedron is a triangular pyramid.',
    points: 200
  },
  {
    id: 25,
    type: 'numeric',
    question: 'What is the sum of the first 10 natural numbers?',
    answer: 55,
    hint: 'Use the formula n(n + 1)/2.',
    points: 200
  },

  // Pattern Questions (26–50)
  {
    id: 26,
    type: 'pattern',
    question: 'Complete the sequence: 2, 4, 8, 16, ?',
    answer: '32',
    hint: 'Each number doubles.',
    points: 150
  },
  {
    id: 27,
    type: 'pattern',
    question: 'Complete the sequence: 1, 4, 9, 16, ?',
    answer: '25',
    hint: 'These are squares of consecutive integers.',
    points: 150
  },
  {
    id: 28,
    type: 'pattern',
    question: 'Complete the sequence: 1, 3, 6, 10, ?',
    answer: '15',
    hint: 'These are triangular numbers.',
    points: 150
  },

  {
    id: 29,
    type: 'pattern',
    question: 'Complete the sequence: 1, 1, 2, 3, 5, 8, ?',
    answer: '13',
    hint: 'Each number is the sum of the two preceding numbers.',
    points: 150
  },
  {
    id: 30,
    type: 'pattern',
    question: 'Complete the sequence: 5, 10, 20, 40, ?',
    answer: '80',
    hint: 'Each number doubles.',
    points: 150
  },
  {
    id: 31,
    type: 'pattern',
    question: 'Complete the sequence: 81, 27, 9, 3, ?',
    answer: '1',
    hint: 'Each number is divided by 3.',
    points: 200
  },
  {
    id: 32,
    type: 'pattern',
    question: 'Complete the sequence: 2, 6, 12, 20, ?',
    answer: '30',
    hint: 'Look at the difference between consecutive numbers.',
    points: 150
  },
  {
    id: 33,
    type: 'pattern',
    question: 'Complete the sequence: 100, 90, 80, 70, ?',
    answer: '60',
    hint: 'Subtract 10 from each number.',
    points: 100
  },
  {
    id: 34,
    type: 'pattern',
    question: 'Complete the sequence: 1, 2, 4, 7, 11, ?',
    answer: '16',
    hint: 'The difference between consecutive numbers increases by 1.',
    points: 150
  },
  {
    id: 35,
    type: 'pattern',
    question: 'Complete the sequence: 3, 9, 27, 81, ?',
    answer: '243',
    hint: 'Each number is multiplied by 3.',
    points: 150
  },
  {
    id: 36,
    type: 'pattern',
    question: 'Complete the sequence: 50, 45, 40, 35, ?',
    answer: '30',
    hint: 'Subtract 5 from each number.',
    points: 100
  },
  {
    id: 37,
    type: 'pattern',
    question: 'Complete the sequence: 2, 3, 5, 7, 11, ?',
    answer: '13',
    hint: 'These are prime numbers.',
    points: 200
  },
  {
    id: 38,
    type: 'pattern',
    question: 'Complete the sequence: 1, 10, 100, 1000, ?',
    answer: '10000',
    hint: 'Each number is multiplied by 10.',
    points: 100
  },
  {
    id: 39,
    type: 'pattern',
    question: 'Complete the sequence: 4, 9, 16, 25, ?',
    answer: '36',
    hint: 'These are consecutive square numbers.',
    points: 100
  },
  {
    id: 40,
    type: 'pattern',
    question: 'Complete the sequence: 2, 6, 18, 54, ?',
    answer: '162',
    hint: 'Each number is multiplied by 3.',
    points: 150
  },
  {
    id: 41,
    type: 'pattern',
    question: 'Complete the sequence: 1, 5, 9, 13, ?',
    answer: '17',
    hint: 'Add 4 to each number.',
    points: 100
  },
  {
    id: 42,
    type: 'pattern',
    question: 'Complete the sequence: 10, 20, 30, 40, ?',
    answer: '50',
    hint: 'Add 10 to each number.',
    points: 100
  },
  {
    id: 43,
    type: 'pattern',
    question: 'Complete the sequence: 1, 8, 27, 64, ?',
    answer: '125',
    hint: 'These are cubes of consecutive integers.',
    points: 150
  },
  {
    id: 44,
    type: 'pattern',
    question: 'Complete the sequence: 7, 14, 28, 56, ?',
    answer: '112',
    hint: 'Each number is multiplied by 2.',
    points: 100
  },
  {
    id: 45,
    type: 'pattern',
    question: 'Complete the sequence: 2, 5, 10, 17, ?',
    answer: '26',
    hint: 'The difference between consecutive numbers increases by 2.',
    points: 150
  },
  {
    id: 46,
    type: 'pattern',
    question: 'Complete the sequence: 3, 6, 12, 24, ?',
    answer: '48',
    hint: 'Each number is multiplied by 2.',
    points: 150
  },
  {
    id: 47,
    type: 'pattern',
    question: 'Complete the sequence: 100, 50, 25, 12.5, ?',
    answer: '6.25',
    hint: 'Each number is divided by 2.',
    points: 200
  },
  {
    id: 48,
    type: 'pattern',
    question: 'Complete the sequence: 11, 22, 33, 44, ?',
    answer: '55',
    hint: 'Add 11 to each number.',
    points: 100
  },
  {
    id: 49,
    type: 'pattern',
    question: 'Complete the sequence: 8, 16, 32, 64, ?',
    answer: '128',
    hint: 'Each number is multiplied by 2.',
    points: 150
  },
  {
    id: 50,
    type: 'pattern',
    question: 'Complete the sequence: 1000, 900, 800, 700, ?',
    answer: '600',
    hint: 'Subtract 100 from each number.',
    points: 100
  },
  {
    id: 51,
    type: 'riddle',
    question: 'The more you take, the more you leave behind. What am I?',
    answer: 'footsteps',
    hint: 'Think of something physical but intangible.',
    points: 300
  },
  {
    id: 52,
    type: 'riddle',
    question: 'What has keys but can’t open locks?',
    answer: 'piano',
    hint: 'It is a musical instrument.',
    points: 200
  },
  {
    id: 53,
    type: 'riddle',
    question: 'What has to be broken before you can use it?',
    answer: 'egg',
    hint: 'Think of something you cook with.',
    points: 200
  },
  {
    id: 54,
    type: 'riddle',
    question: 'I’m tall when I’m young, and I’m short when I’m old. What am I?',
    answer: 'candle',
    hint: 'Think of something that melts.',
    points: 250
  },
  {
    id: 55,
    type: 'riddle',
    question: 'What has a neck but no head?',
    answer: 'bottle',
    hint: 'It is commonly used in the kitchen.',
    points: 200
  },
  {
    id: 56,
    type: 'riddle',
    question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?',
    answer: 'map',
    hint: 'You use this for navigation.',
    points: 300
  },
  {
    id: 57,
    type: 'riddle',
    question: 'What can travel around the world while staying in the same spot?',
    answer: 'stamp',
    hint: 'Think of mail.',
    points: 250
  },
  {
    id: 58,
    type: 'riddle',
    question: 'What gets wetter the more it dries?',
    answer: 'towel',
    hint: 'It is used after a shower.',
    points: 200
  },
  {
    id: 59,
    type: 'riddle',
    question: 'What has an eye but cannot see?',
    answer: 'needle',
    hint: 'It is used in sewing.',
    points: 200
  },
  {
    id: 60,
    type: 'riddle',
    question: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
    answer: 'the letter M',
    hint: 'Focus on letters, not time.',
    points: 300
  },
  {
    id: 61,
    type: 'riddle',
    question: 'What has four wheels and flies?',
    answer: 'garbage truck',
    hint: 'It is a vehicle.',
    points: 250
  },
  {
    id: 62,
    type: 'riddle',
    question: 'What can you catch but not throw?',
    answer: 'cold',
    hint: 'It’s related to health.',
    points: 150
  },
  {
    id: 63,
    type: 'riddle',
    question: 'I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?',
    answer: 'breath',
    hint: 'It is something vital for living.',
    points: 250
  },
  {
    id: 64,
    type: 'riddle',
    question: 'What begins with T, ends with T, and has T in it?',
    answer: 'teapot',
    hint: 'Think of something used in the kitchen.',
    points: 200
  },
  {
    id: 65,
    type: 'riddle',
    question: 'I’m always in front of you but can’t be seen. What am I?',
    answer: 'future',
    hint: 'Think about time.',
    points: 300
  },
  {
    id: 66,
    type: 'riddle',
    question: 'What has one head, one foot, and four legs?',
    answer: 'bed',
    hint: 'It is found in the bedroom.',
    points: 200
  },
  {
    id: 67,
    type: 'riddle',
    question: 'What can you hold in your left hand but not in your right?',
    answer: 'your right hand',
    hint: 'Think about body parts.',
    points: 150
  },
  {
    id: 68,
    type: 'riddle',
    question: 'What is so fragile that saying its name breaks it?',
    answer: 'silence',
    hint: 'It is something that creates calm.',
    points: 250
  },
  {
    id: 69,
    type: 'riddle',
    question: 'The more of this there is, the less you see. What is it?',
    answer: 'darkness',
    hint: 'It blocks vision.',
    points: 200
  },
  {
    id: 70,
    type: 'riddle',
    question: 'What has a head, a tail, is brown, and has no legs?',
    answer: 'penny',
    hint: 'It is a small object used for transactions.',
    points: 200
  },
  {
    id: 71,
    type: 'riddle',
    question: 'What runs but never walks, has a bed but never sleeps, has a mouth but never talks?',
    answer: 'river',
    hint: 'It is found in nature.',
    points: 300
  },
  {
    id: 72,
    type: 'riddle',
    question: 'What can fill a room but takes up no space?',
    answer: 'light',
    hint: 'Think about brightness.',
    points: 250
  },
  {
    id: 73,
    type: 'riddle',
    question: 'What has many teeth but can’t bite?',
    answer: 'comb',
    hint: 'It is used for grooming.',
    points: 200
  },
  {
    id: 74,
    type: 'riddle',
    question: 'What is always in front of you but can’t be seen?',
    answer: 'future',
    hint: 'Think about time.',
    points: 300
  },
  {
    id: 75,
    type: 'riddle',
    question: 'What is full of holes but still holds water?',
    answer: 'sponge',
    hint: 'It is used for cleaning.',
    points: 250
  },
  {
    id: 76,
    type: 'memory',
    question: 'Recall the colors of the rainbow in order.',
    answer: 'red, orange, yellow, green, blue, indigo, violet',
    hint: 'Remember ROYGBIV.',
    points: 300
  },
  {
    id: 77,
    type: 'memory',
    question: 'Name the seven continents of the world.',
    answer: 'Asia, Africa, North America, South America, Antarctica, Europe, Australia',
    hint: 'Think of the world map.',
    points: 400
  },
  {
    id: 78,
    type: 'memory',
    question: 'How many sides does a dodecagon have?',
    answer: 12,
    hint: 'It is more than 10.',
    points: 200
  },
  {
    id: 79,
    type: 'memory',
    question: 'What is the capital of France?',
    answer: 'Paris',
    hint: 'It is the city of love.',
    points: 100
  },
  {
    id: 80,
    type: 'memory',
    question: 'Name the five oceans of the world.',
    answer: 'Pacific, Atlantic, Indian, Southern, Arctic',
    hint: 'Think about water bodies.',
    points: 400
  },
  {
    id: 81,
    type: 'memory',
    question: 'What year did World War II end?',
    answer: 1945,
    hint: 'It was in the mid-20th century.',
    points: 300
  },
  {
    id: 82,
    type: 'memory',
    question: 'Who wrote "Romeo and Juliet"?',
    answer: 'William Shakespeare',
    hint: 'He is known as the Bard of Avon.',
    points: 250
  },
  {
    id: 83,
    type: 'memory',
    question: 'How many planets are in our solar system?',
    answer: 8,
    hint: 'It is less than 10.',
    points: 150
  },
  {
    id: 84,
    type: 'memory',
    question: 'What is the chemical symbol for water?',
    answer: 'H2O',
    hint: 'It is a combination of hydrogen and oxygen.',
    points: 100
  },
  {
    id: 85,
    type: 'memory',
    question: 'What is the square root of 144?',
    answer: 12,
    hint: 'Think of a perfect square.',
    points: 200
  },
  {
    id: 86,
    type: 'memory',
    question: 'Name the three primary colors.',
    answer: 'red, blue, yellow',
    hint: 'These colors cannot be made by mixing others.',
    points: 200
  },
  {
    id: 87,
    type: 'memory',
    question: 'What is the largest mammal in the world?',
    answer: 'blue whale',
    hint: 'It lives in the ocean.',
    points: 300
  },
  {
    id: 88,
    type: 'memory',
    question: 'What element does "O" represent on the periodic table?',
    answer: 'oxygen',
    hint: 'It is essential for breathing.',
    points: 150
  },
  {
    id: 89,
    type: 'memory',
    question: 'What is the capital of Japan?',
    answer: 'Tokyo',
    hint: 'It is a major city in Asia.',
    points: 200
  },
  {
    id: 90,
    type: 'memory',
    question: 'How many bones are in the human body?',
    answer: 206,
    hint: 'It is a little more than 200.',
    points: 300
  },
  {
    id: 91,
    type: 'memory',
    question: 'What year did the Titanic sink?',
    answer: 1912,
    hint: 'It was in the early 20th century.',
    points: 250
  },
  {
    id: 92,
    type: 'memory',
    question: 'What is the freezing point of water in Celsius?',
    answer: 0,
    hint: 'It is a round number.',
    points: 100
  },
  {
    id: 93,
    type: 'memory',
    question: 'What is the tallest mountain in the world?',
    answer: 'Mount Everest',
    hint: 'It is in the Himalayas.',
    points: 300
  },
  {
    id: 94,
    type: 'memory',
    question: 'Name the seven dwarfs in "Snow White".',
    answer: 'Dopey, Grumpy, Doc, Happy, Bashful, Sneezy, Sleepy',
    hint: 'Think of a classic Disney movie.',
    points: 400
  },
  {
    id: 95,
    type: 'memory',
    question: 'What is the boiling point of water in Celsius?',
    answer: 100,
    hint: 'It is a perfect score in exams.',
    points: 100
  },
  {
    id: 96,
    type: 'memory',
    question: 'What is the national animal of the United States?',
    answer: 'bald eagle',
    hint: 'It is a bird.',
    points: 250
  },
  {
    id: 97,
    type: 'memory',
    question: 'Who painted the "Mona Lisa"?',
    answer: 'Leonardo da Vinci',
    hint: 'He was also an inventor.',
    points: 250
  },
  {
    id: 98,
    type: 'memory',
    question: 'What is the smallest country in the world?',
    answer: 'Vatican City',
    hint: 'It is in Europe.',
    points: 300
  },
  {
    id: 99,
    type: 'memory',
    question: 'How many strings does a standard guitar have?',
    answer: 6,
    hint: 'It is fewer than 10.',
    points: 150
  },
  {
    id: 100,
    type: 'memory',
    question: 'What is the chemical symbol for gold?',
    answer: 'Au',
    hint: 'It is derived from Latin.',
    points: 200
  }
];