import { createContext } from 'react';

export const { Provider, Consumer } = createContext({});

export default {
  profile: {
    topic: 'who are you?',
    comments: [
      "I'm Femi, a software developer fro Nigeria - Femi",
      "I'm Balu. I play the tuba - Balu",
      'Fiendish little minx - Jessica'
    ]
  },
  photos: {
    topic: 'Do you take photos?',
    comments: [
      'Yes, I do. A lot! - Shanit',
      'Yup, yup! Sefies all the way - Sinatra',
      "Nah! I don't. Who has time for that? - Biggie"
    ]
  },
  '': {
    topic: 'Welcome Home. This is the homepage',
    comments: ["Whoop! whoop! It's cool to be here - Bamidele"]
  },
  // currentLocation: ''
};
