import React from 'react';

const Page = ({page: { topic = '', comments = [] }}) => (
  <section>
    <h3>{topic}</h3>
    {comments.map((comment, index) => (
      <div className="comment-box" key={index}>
        <p>{comment}</p>
      </div>
    ))}
  </section>
);

export default Page;
