import React from 'react';

const Movieslist = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => {
        const { movieName, ratings, duration } = movie;
        return (
          <section key={index}>
            <ul className="styled w-100 pl-0" data-testid="moviesList">
              <li
                className="flex slide-up-fade-in justify-content-between"
                style={{ borderBottom: '2px solid var(--primary-color)' }}
              >
                <div className="layout-column w-40">
                  <h3 className="my-3">{movieName}</h3>
                  <p className="my-0">{ratings}/100</p>
                </div>
                <div className="layout-row my-auto mr-20">
                  <p className="justify-content-end">{duration}</p>
                </div>
              </li>
            </ul>
          </section>
        );
      })}
    </>
  );
};

export default Movieslist;
