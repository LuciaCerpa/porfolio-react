import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Technologies</h2>

      <section>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </section>
    </div>
  );
};

const TestimonialCard = () => (
  <article></article>
);

export default Testimonial;
