import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import '../styles/siete-theme.css';
import { siteData } from '../data/mock';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", ...props }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

// Icon component
const Icon = ({ name, className = "w-6 h-6" }) => {
  const IconComponent = LucideIcons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
};

const SieteCXLanding = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-siete-dark text-siete-text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-siete-dark/80 backdrop-blur-lg border-b border-siete-border z-50">
        <div className="siete-container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <img 
                src={siteData.navigation.logo.url} 
                alt={siteData.navigation.logo.alt}
                className="h-8 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {siteData.navigation.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className="siete-nav-link"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <Button 
              className="siete-btn-primary hidden md:inline-flex"
              onClick={() => scrollToSection('#cta')}
            >
              {siteData.hero.cta.primary}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="siete-hero flex items-center">
        <div className="siete-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.h1 
                variants={fadeInUp}
                className="siete-display"
              >
                {siteData.hero.headline}
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="siete-body-large max-w-2xl"
              >
                {siteData.hero.subheadline}
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  className="siete-btn-primary"
                  onClick={() => scrollToSection('#cta')}
                >
                  <Icon name="Play" className="w-5 h-5" />
                  {siteData.hero.cta.primary}
                </Button>
                <Button 
                  className="siete-btn-secondary"
                  onClick={() => scrollToSection('#process')}
                >
                  {siteData.hero.cta.secondary}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src={siteData.hero.image} 
                  alt="Customer Experience Analytics"
                  className="w-full max-w-lg mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-siete-green/20 to-siete-mint/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <AnimatedSection id="value-prop" className="siete-section bg-siete-navy/30">
        <div className="siete-container">
          <motion.div 
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="siete-heading-1 mb-6"
            >
              {siteData.valueProp.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="siete-body-large max-w-3xl mx-auto"
            >
              {siteData.valueProp.subtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {siteData.valueProp.benefits.map((benefit) => (
              <motion.div key={benefit.id} variants={fadeInUp}>
                <Card className="siete-card h-full text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-siete-green to-siete-mint rounded-2xl flex items-center justify-center">
                    <Icon name={benefit.icon} className="w-8 h-8 text-siete-dark" />
                  </div>
                  <h3 className="siete-heading-3 mb-4">{benefit.title}</h3>
                  <p className="siete-body text-siete-text-secondary">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection id="process" className="siete-section">
        <div className="siete-container">
          <motion.div 
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="siete-heading-1 mb-6"
            >
              {siteData.process.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="siete-body-large max-w-3xl mx-auto"
            >
              {siteData.process.subtitle}
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {siteData.process.steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-siete-green to-siete-mint rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-siete-dark">{step.id}</span>
                    </div>
                    <Icon name={step.icon} className="w-8 h-8 text-siete-green" />
                  </div>
                  <h3 className="siete-heading-2 mb-4">{step.title}</h3>
                  <p className="siete-body-large">{step.description}</p>
                </div>
                
                {step.image && (
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full max-w-md mx-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-siete-mint/10 to-siete-green/10 rounded-2xl"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Sectors */}
      <AnimatedSection id="sectors" className="siete-section bg-siete-navy/20">
        <div className="siete-container">
          <motion.div 
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="siete-heading-1 mb-6"
            >
              {siteData.sectors.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="siete-body-large max-w-3xl mx-auto"
            >
              {siteData.sectors.subtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {siteData.sectors.industries.map((industry) => (
              <motion.div key={industry.id} variants={fadeInUp}>
                <Card className="siete-card h-full text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-siete-mint to-siete-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={industry.icon} className="w-10 h-10 text-siete-dark" />
                  </div>
                  <h3 className="siete-heading-3 mb-4">{industry.title}</h3>
                  <p className="siete-body text-siete-text-secondary mb-4">{industry.description}</p>
                  <div className="text-siete-green font-semibold">{industry.stats}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonial */}
      <AnimatedSection className="siete-section">
        <div className="siete-container">
          <Card className="siete-card max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Icon name="Quote" className="w-12 h-12 text-siete-green mx-auto mb-6" />
              <blockquote className="siete-heading-3 mb-8 italic">
                "{siteData.testimonial.quote}"
              </blockquote>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-siete-green to-siete-mint rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-siete-dark">
                  {siteData.testimonial.author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-siete-text-primary">{siteData.testimonial.author}</div>
                <div className="text-siete-text-secondary">{siteData.testimonial.role}</div>
                <div className="text-siete-green">{siteData.testimonial.company}</div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection id="cta" className="siete-section bg-gradient-to-r from-siete-navy to-siete-mint/20">
        <div className="siete-container">
          <motion.div 
            variants={staggerChildren}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="siete-heading-1 mb-6"
            >
              {siteData.finalCta.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="siete-body-large mb-8"
            >
              {siteData.finalCta.subtitle}
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-4 mb-8"
            >
              {siteData.finalCta.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <Icon name="CheckCircle" className="w-5 h-5 text-siete-green" />
                  <span className="siete-body">{feature}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Button className="siete-btn-primary text-lg px-8 py-4">
                <Icon name="Calendar" className="w-5 h-5" />
                {siteData.finalCta.cta}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="siete-section bg-siete-dark border-t border-siete-border">
        <div className="siete-container">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <img 
                src={siteData.navigation.logo.url} 
                alt={siteData.navigation.logo.alt}
                className="h-8 w-auto mb-4"
              />
              <p className="siete-body text-siete-text-secondary">
                {siteData.footer.copyright}
              </p>
            </div>
            
            <div className="text-center">
              <div className="space-y-2">
                <a href={`mailto:${siteData.footer.links.contact}`} className="siete-body text-siete-green hover:text-siete-mint transition-colors">
                  {siteData.footer.links.contact}
                </a>
                <div className="siete-body text-siete-text-secondary">
                  {siteData.footer.links.phone}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <a href={siteData.footer.links.linkedin} className="w-10 h-10 bg-siete-navy/50 rounded-lg flex items-center justify-center hover:bg-siete-green/20 transition-colors">
                <Icon name="Linkedin" className="w-5 h-5 text-siete-green" />
              </a>
              <a href={siteData.footer.links.twitter} className="w-10 h-10 bg-siete-navy/50 rounded-lg flex items-center justify-center hover:bg-siete-green/20 transition-colors">
                <Icon name="Twitter" className="w-5 h-5 text-siete-green" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SieteCXLanding;