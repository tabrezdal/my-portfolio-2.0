import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import { fadeUp } from '../utils/animationVariants';
import './NoPageFound.css';

function NoPageFound() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Helmet defer={false}>
        <title>404 — Page Not Found | Tabrez Dal</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to the homepage or browse case studies." />
        <link rel="canonical" href="https://tabrezdal.com/404.html" />
      </Helmet>
      <Header />
      <main className="not-found-page">
        <motion.div
          className="not-found-content"
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="not-found-code" aria-label="Error 404">404</p>

          <div className="not-found-separator" aria-hidden="true" />

          <h1 className="not-found-title">Page not found.</h1>

          <p className="not-found-message">
            You followed a broken link or typed a URL that doesn't exist here.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="not-found-btn-primary">
              Go Home
            </Link>
            <Link to="/case-studies" className="not-found-btn-secondary">
              View Work
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

export default NoPageFound;
