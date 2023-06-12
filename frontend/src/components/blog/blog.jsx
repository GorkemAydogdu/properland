import React from "react";
import Container from "../../layout/container";

import BlogItem from "./blogItem";

const Blog = ({ children }) => {
  return (
    <section className="blog">
      <Container>
        {children}
        <div className="blog__content u-d-flex-a-center">
          <BlogItem />
        </div>
      </Container>
    </section>
  );
};

export default Blog;
