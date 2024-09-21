import React from 'react';

const Hero = () => {
  return (
    <section className="text-center p-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Save your data storage here.</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: 'auto', marginBottom: '30px' }}>
        Data Warehouse is a data storage area that has been tested for security, so you can store your data safely without being afraid of it being stolen.
      </p>
      <button className="btn btn-primary btn-lg">Learn more</button>
    </section>
  );
};

export default Hero;
