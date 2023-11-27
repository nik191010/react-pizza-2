import React from 'react';

const AboutSection = () => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section className="about">
      <div className="about__wrap">
        <h2 className="about__title">The only pizza delivery frachise born in this century</h2>
        <p className="about__text">
          We launched Best Pizza with less than $50,000 in savings and loans. Without any backing
          from venture capitalists or major financial groups, our team grew the brand from one tiny
          pizza delivery in a windowless basement to hundreds of pizza stores in less than 10 years.
        </p>
        <p
          style={{ maxHeight: `${!showMore ? '50px' : 100 + '%'}` }}
          className={`about__text ${showMore ? `about__text_active` : ''}`}>
          Some people simply can't wrap their head around this: why would a foodservice franchise go
          through so much trouble to build its own tech platform when there is no shortage of
          ready-made solutions on the market? Dozens of well-funded startups are tackling the food
          tech trend nowadays. So when a QSR chain needs to up its tech game, it can now simply buy
          and adapt a solution from a third-party
        </p>
        <span onClick={() => setShowMore(!showMore)} className="about__more">
          Read more
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
