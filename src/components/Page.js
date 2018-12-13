import React from 'react';
import Comment from './Comment';

const Page = ({page: { topic = '', comments = [] }}) => (
  <section>
    <h3>{topic}</h3>
    {comments.map((text, index) => (
      <Comment text={text} key={index} />
    ))}
  </section>
);

export default Page;
