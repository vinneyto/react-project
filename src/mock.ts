import { Restaurant, User } from './types';

export const mockUser: User = {
  id: '1',
  name: 'Carlos García-López'
};

export const restaurants: Restaurant[] = [
  {
    id: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
    name: 'Dishoom',
    menu: [
      // {
      //   id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
      //   name: 'Chicken tikka masala',
      //   price: 12,
      //   ingredients: ['chicken', 'rice']
      // },
      // {
      //   id: 'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
      //   name: 'Naan',
      //   price: 3,
      //   ingredients: ['bread']
      // },
      // {
      //   id: 'bd129641-c0eb-432b-84b6-8b81d2930358',
      //   name: 'Samosa',
      //   price: 8,
      //   ingredients: ['chicken', 'bread']
      // },
      // {
      //   id: 'e1a1d2e3-4f5b-6a7c-8b9d-0a1b2c3d4e5f',
      //   name: 'Paneer tikka',
      //   price: 10,
      //   ingredients: ['paneer', 'spices']
      // },
      {
        id: 'f6a7b8c9-d0e1-2f3g-4h5i-6j7k8l9m0n1o',
        name: 'Lamb curry',
        price: 15,
        ingredients: ['lamb', 'spices']
      },
      {
        id: 'g7h8i9j0-k1l2-3m4n-5o6p-7q8r9s0t1u2v',
        name: 'Biryani',
        price: 14,
        ingredients: ['rice', 'chicken', 'spices']
      },
      {
        id: 'h8i9j0k1-l2m3-4n5o-6p7q-8r9s0t1u2v3w',
        name: 'Butter chicken',
        price: 13,
        ingredients: ['chicken', 'butter', 'spices']
      }
    ],
    reviews: [
      {
        id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
        user: 'Antony',
        text: 'Not bad',
        rating: 5
      },
      {
        id: '429dea85-11dd-4054-a31e-c60c92e17255',
        user: 'Sam',
        text: 'No burgers',
        rating: 3
      },
      {
        id: 'd1e2f3a4-b5c6-7d8e-9f0a-1b2c3d4e5f6g',
        user: 'John',
        text: 'Great place for Indian food',
        rating: 4
      },
      {
        id: 'i9j0k1l2-m3n4-5o6p-7q8r-9s0t1u2v3w4x',
        user: 'Emma',
        text: 'Delicious food and great service',
        rating: 5
      },
      {
        id: 'j0k1l2m3-n4o5-6p7q-8r9s-0t1u2v3w4x5y',
        user: 'Liam',
        text: 'Authentic Indian cuisine',
        rating: 4
      },
      {
        id: 'k1l2m3n4-o5p6-7q8r-9s0t-1u2v3w4x5y6z',
        user: 'Olivia',
        text: 'Highly recommend the lamb curry',
        rating: 5
      }
    ]
  },
  {
    id: 'bb8afbec-2fec-491f-93e9-7f13950dd80b',
    name: 'Homeslice',
    menu: [
      {
        id: '25402233-0095-49ea-9939-1e67ed89ffb9',
        name: 'Margarita',
        price: 9,
        ingredients: ['bread', 'cheese', 'tomatoes']
      },
      {
        id: '90902233-0095-49ea-9939-1e67ed89ffb9',
        name: 'Chef pizza',
        price: 10,
        ingredients: ['bread', 'cheese', 'tomatoes', 'chicken']
      },
      {
        id: 'a1b2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p',
        name: 'Pepperoni pizza',
        price: 11,
        ingredients: ['bread', 'cheese', 'tomatoes', 'pepperoni']
      },
      {
        id: 'd2e3f4g5-h6i7-8j9k-0l1m-2n3o4p5q6r7s',
        name: 'Veggie pizza',
        price: 10,
        ingredients: ['bread', 'cheese', 'tomatoes', 'bell peppers']
      },
      {
        id: 'e3f4g5h6-i7j8-9k0l-1m2n-3o4p5q6r7s8t',
        name: 'BBQ chicken pizza',
        price: 12,
        ingredients: ['bread', 'cheese', 'chicken', 'bbq sauce']
      },
      {
        id: 'f4g5h6i7-j8k9-0l1m-2n3o-4p5q6r7s8t9u',
        name: 'Hawaiian pizza',
        price: 11,
        ingredients: ['bread', 'cheese', 'ham', 'pineapple']
      }
    ],
    reviews: [
      {
        id: '53b642d7-5e86-4717-a466-0640a1dee076',
        user: 'Diana',
        text: 'Perfect Margarita',
        rating: 5
      },
      {
        id: 'c27ab88e-375c-4e98-aa94-8a180150a797',
        user: 'Sam',
        text: 'No burgers again. But Chef Pizza is the best one',
        rating: 4
      },
      {
        id: 'abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a',
        user: 'Lolly',
        text: 'Good for lunch',
        rating: 5
      },
      {
        id: 'l2m3n4o5-p6q7-8r9s-0t1u-2v3w4x5y6z7a',
        user: 'Sophia',
        text: 'Best pizza in town',
        rating: 5
      },
      {
        id: 'm3n4o5p6-q7r8-9s0t-1u2v-3w4x5y6z7a8b',
        user: 'James',
        text: 'Loved the BBQ chicken pizza',
        rating: 4
      },
      {
        id: 'n4o5p6q7-r8s9-0t1u-2v3w-4x5y6z7a8b9c',
        user: 'Isabella',
        text: 'Great variety of pizzas',
        rating: 5
      }
    ]
  },
  {
    id: '982bfbce-c5e0-41a0-9f99-d5c20ecee49d',
    name: 'Fabrique',
    menu: [
      {
        id: '08c9ffa0-d003-4310-9e15-20978743296e',
        name: 'Cinnamon buns',
        price: 5,
        ingredients: ['bread']
      },
      {
        id: '64a4967c-2080-4a99-9074-4655a4569a95',
        name: 'Semlor',
        price: 2,
        ingredients: ['bread', 'cream']
      },
      {
        id: '4bc8528e-26d1-46c3-a522-8e18d10c8c84',
        name: 'Saffron bun',
        price: 4,
        ingredients: ['bread']
      },
      {
        id: 'b1c2d3e4-f5g6-7h8i-9j0k-1l2m3n4o5p6q',
        name: 'Cardamom bun',
        price: 6,
        ingredients: ['bread', 'cardamom']
      },
      {
        id: 'g5h6i7j8-k9l0-1m2n-3o4p-5q6r7s8t9u0v',
        name: 'Chocolate croissant',
        price: 3,
        ingredients: ['bread', 'chocolate']
      },
      {
        id: 'h6i7j8k9-l0m1-2n3o-4p5q-6r7s8t9u0v1w',
        name: 'Blueberry muffin',
        price: 4,
        ingredients: ['bread', 'blueberries']
      },
      {
        id: 'i7j8k9l0-m1n2-3o4p-5q6r-7s8t9u0v1w2x',
        name: 'Apple pie',
        price: 5,
        ingredients: ['bread', 'apples', 'cinnamon']
      }
    ],
    reviews: [
      {
        id: '53b642d7-5e86-4717-a466-0640a1dee076',
        user: 'Agata',
        text: 'Best bakery',
        rating: 5
      },
      {
        id: 'g1h2i3j4-k5l6-7m8n-9o0p-1q2r3s4t5u6v',
        user: 'Michael',
        text: 'Amazing bakery items',
        rating: 5
      },
      {
        id: 'o5p6q7r8-s9t0-1u2v-3w4x-5y6z7a8b9c0d',
        user: 'William',
        text: 'Best bakery in the city',
        rating: 5
      },
      {
        id: 'p6q7r8s9-t0u1-2v3w-4x5y-6z7a8b9c0d1e',
        user: 'Ava',
        text: 'Loved the chocolate croissant',
        rating: 4
      },
      {
        id: 'q7r8s9t0-u1v2-3w4x-5y6z-7a8b9c0d1e2f',
        user: 'Mason',
        text: 'Great place for breakfast',
        rating: 5
      }
    ]
  },
  {
    id: 'd9241927-09e1-44f3-8986-a76346869037',
    name: 'Flat Iron',
    menu: [
      {
        id: '6c02c2ce-b868-4191-b4a7-8686429f4bac',
        name: 'Flat Iron Steak',
        price: 10,
        ingredients: ['beef']
      },
      {
        id: '99bb6fbb-e53b-4b7e-b9c2-23b63b77385d',
        name: 'Flat Iron Burger',
        price: 10,
        ingredients: ['bread', 'beef']
      },
      {
        id: 'c1d2e3f4-g5h6-7i8j-9k0l-1m2n3o4p5q6r',
        name: 'Grilled Chicken',
        price: 12,
        ingredients: ['chicken', 'spices']
      },
      {
        id: 'j8k9l0m1-n2o3-4p5q-6r7s-8t9u0v1w2x3y',
        name: 'Ribeye steak',
        price: 15,
        ingredients: ['beef']
      },
      {
        id: 'k9l0m1n2-o3p4-5q6r-7s8t-9u0v1w2x3y4z',
        name: 'Chicken wings',
        price: 8,
        ingredients: ['chicken', 'spices']
      },
      {
        id: 'l0m1n2o3-p4q5-6r7s-8t9u-0v1w2x3y4z5a',
        name: 'Caesar salad',
        price: 7,
        ingredients: ['lettuce', 'chicken', 'croutons', 'parmesan']
      }
    ],
    reviews: [
      {
        id: '5db6247b-ab1c-49db-be1f-8dd27fd38b81',
        user: 'Sam',
        text: 'Finally! This place is amazing place for breakfast, lunch, dinner and supper',
        rating: 5
      },
      {
        id: '381b0c31-6360-43ff-80d1-581a116159d8',
        user: 'Rebeca',
        text: 'Meat here is extremely delicious',
        rating: 5
      },
      {
        id: 'h1i2j3k4-l5m6-7n8o-9p0q-1r2s3t4u5v6w',
        user: 'Alice',
        text: 'Best place for meat lovers',
        rating: 5
      },
      {
        id: 'r8s9t0u1-v2w3-4x5y-6z7a-8b9c0d1e2f3g',
        user: 'Ethan',
        text: 'Amazing steaks and burgers',
        rating: 5
      },
      {
        id: 's9t0u1v2-w3x4-5y6z-7a8b-9c0d1e2f3g4h',
        user: 'Mia',
        text: 'Loved the chicken wings',
        rating: 4
      },
      {
        id: 't0u1v2w3-x4y5-6z7a-8b9c-0d1e2f3g4h5i',
        user: 'Alexander',
        text: 'Great place for a family dinner',
        rating: 5
      }
    ]
  }
];
