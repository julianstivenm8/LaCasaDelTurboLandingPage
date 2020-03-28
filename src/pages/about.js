import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>Nosotros</h1>
    <p>This is a website.</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
