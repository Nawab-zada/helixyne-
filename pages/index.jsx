import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import Services from 'components/Services';
import { FaCogs } from 'react-icons/fa';

const Home = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Helixyne Chemical</title>
        <meta name="description" content="Helixyne Chemical: Global Pharmaceutical Solutions" />
        <link rel="canonical" href="https://helixyne.com" />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about-us" className="wrapper bg-light">
          <div className="container pt-7 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/aboutus.jpg"
              heading="About Us"
              para="Our MissionHelixyne, we are dedicated to enabling access to trusted pharmaceutical solutions across global markets. Through strategic partnerships and a commitment to quality, we connect our customers with reliable healthcare products sourced from leading manufacturers worldwide.\n\nOur mission is to deliver excellence with integrity — ensuring every transaction strengthens trust, supports growth, and contributes to a healthier, more sustainable future.\n\nOur Goal\n\nTo establish Helixyne as a globally recognized name in pharmaceutical trading — synonymous with reliability, innovation, and ethical business practices. We aim to build enduring partnerships that empower progress, drive sustainable growth, and uphold the highest standards of quality in everything we do"
            />
          </div>
        </section>

        {/* Our Core Services Section */}
        <section id="our-services" className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8 text-center">
              <p className="fs-80 fw-bolder sub-h2 position-relative">Our Core Services</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head text-blue">
                <FaCogs className="me-3" /> Our Core Services
              </h2>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>

        {/* Contact Us Section - Placeholder */}
        <section id="contact-us" className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head text-blue text-center">
              Contact Us
            </h2>
            {/* Add contact form or information here */}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
