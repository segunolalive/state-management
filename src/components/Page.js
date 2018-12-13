import React from 'react';
import { Consumer } from './state';
import Comment from './Comment';

const Page = ({ location }) => (
  <section>
    <Consumer>
      {routes => {
        const { topic, comments } = routes[location];
        return (
          <>
            <h3>{topic}</h3>
            {comments.map((text, index) => (
              <Comment text={text} key={index} />
            ))}
          </>
        );
      }}
    </Consumer>
  </section>
);

export default Page;
