import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Structured Curriculum',
    Svg: require('@site/static/img/hero_images/structured_curriculum.svg').default,
    description: (
      <>
        Clear 30-day plan, daily lessons covering essential C++ concepts in an organized, progressive manner.
      </>
    ),
  },
  {
    title: 'Comprehensive Documentation',
    Svg: require('@site/static/img/hero_images/well_documentation.svg').default,
    description: (
      <>
        Detailed guides with explanations, code samples, and resources aiding better understanding of <code>C++</code> topics.
      </>
    ),
  },
  {
    title: 'We Are Open Source',
    Svg: require('@site/static/img/hero_images/open_source.svg').default,
    description: (
      <>
        Accessible collaborative C++ project, providing hands-on experience and
        opportunities for practical learning and contributions.
      </>
    ),
  },
  {
    title: 'Free Access',
    Svg: require('@site/static/img/hero_images/free_access.svg').default,
    description: (
      <>
        Entire program, resources, and materials accessible at no cost, ensuring
        inclusivity for all interested learners.
      </>
    ),
  },
  {
    title: 'Informative Blogs',
    Svg: require('@site/static/img/hero_images/informative_blogs.svg').default,
    description: (
      <>
        Regularly updated blogs covering diverse C++ topics, offering
        supplementary insights and knowledge beyond lessons.
      </>
    ),
  },
  {
    title: 'Community Engagement',
    Svg: require('@site/static/img/hero_images/community_engagement.svg').default,
    description: (
      <>
        Accessible collaborative C++ project, providing hands-on experience and
        opportunities for practical learning and contributions.
      </>
    ),
  },
];

const TestimonialList = [
  {
    name: 'John Doe',
    review: 'This curriculum is incredibly structured and easy to follow. It made learning C++ a breeze!',
  },
  {
    name: 'Jane Smith',
    review: 'The documentation is top-notch. I could easily find explanations and code samples for all topics.',
  },
  {
    name: 'Alex Johnson',
    review: 'Being an open-source project, it offers great opportunities to contribute and learn practically.',
  },
  {
    name: 'Chris Lee',
    review: 'The free access to all resources is fantastic. It makes learning C++ accessible to everyone.',
  },
  {
    name: 'Pat Kim',
    review: 'The community engagement is superb. It’s great to have support and collaboration from other learners.',
  },
  {
    name: 'Amayra',
    review: 'The course was Incredible. It was Beginner Friendly and well organised.Loved it!!.',
  },
  
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ name, review }) {
  return (
    <div className={clsx('col col--2')}>
      <div className={clsx(styles.testimonialCard, 'card')}>
        <div className="card__body">
          <Heading as="h4" className="text--center">{name}</Heading>
          <p className="text--center">"{review}"</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature {...props} key={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className="container">
          <Heading as="h2" className="text--center">OUR TESTIMONIALS</Heading>
          <div className="row">
            {TestimonialList.map((props, idx) => (
              <Testimonial {...props} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
