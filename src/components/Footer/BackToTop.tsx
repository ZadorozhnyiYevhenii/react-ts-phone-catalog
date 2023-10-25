import React from 'react';
import './BackToTop.scss';

export const BackToTopButton = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scrollUp">
      <span
        className="scrollUp__text"
      >
        Back to top
      </span>

      <button
        className="scrollUp__button"
        type="button"
        aria-label="Back to top"
        onClick={scrollUp}
      >
        <div className="scrollUp__arrow" />
      </button>
    </div>
  );
};
