import React, { Fragment } from 'react';
import { DEPENDENCIES } from './constants';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>Expendable collection of React components.</span></h1>
    <p>This is a library of components for projects built using <strong>ReactJS</strong>.</p>
    <h3><span>Dependencies:</span></h3>
    <ul className="dependencies">
      {DEPENDENCIES.map(({ id, name, link }) => (
        <li className="dependencyItem" key={id}>
          <a className="dependencyLink" href={link} rel="noopener noreferrer" target="_blank">{name}</a>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Home;
