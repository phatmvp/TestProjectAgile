import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {
  return (
    <section className="testimonials" style={{ backgroundColor: '#9b59b6', padding: '50px 0' }}>
      <div className="container">
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px' }}>Testimonials</h2>
        <Carousel controls={true} indicators={true} interval={null}>
          {/* Testimonial 1 */}
          <Carousel.Item>
            <div className="testimonial-card" style={testimonialCardStyle}>
              <img
                src="https://via.placeholder.com/80"
                alt="Person 1"
                style={testimonialImageStyle}
              />
              <div>
                <h3 style={testimonialNameStyle}>Jane Doe</h3>
                <a href="http://janedoe.com" style={testimonialLinkStyle}>janedoe.com</a>
                <p style={testimonialTextStyle}>
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat
                  tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </Carousel.Item>

          {/* Testimonial 2 */}
          <Carousel.Item>
            <div className="testimonial-card" style={testimonialCardStyle}>
              <img
                src="https://via.placeholder.com/80"
                alt="Person 2"
                style={testimonialImageStyle}
              />
              <div>
                <h3 style={testimonialNameStyle}>Jim Fen</h3>
                <a href="http://jimjimf.com" style={testimonialLinkStyle}>jimjimf.com</a>
                <p style={testimonialTextStyle}>
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat
                  tortor ultricies massa turpis.
                </p>
              </div>
            </div>
          </Carousel.Item>

          {/* Testimonial 3 */}
          <Carousel.Item>
            <div className="testimonial-card" style={testimonialCardStyle}>
              <img
                src="https://via.placeholder.com/80"
                alt="Person 3"
                style={testimonialImageStyle}
              />
              <div>
                <h3 style={testimonialNameStyle}>Mike Smith</h3>
                <a href="http://mikesmith.com" style={testimonialLinkStyle}>mikesmith.com</a>
                <p style={testimonialTextStyle}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

// Styles
const testimonialCardStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '600px',
  margin: '0 auto',
};

const testimonialImageStyle = {
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  marginRight: '20px',
};

const testimonialNameStyle = {
  fontSize: '20px',
  marginBottom: '5px',
};

const testimonialLinkStyle = {
  color: '#9b59b6',
  textDecoration: 'none',
  marginBottom: '10px',
  display: 'block',
};

const testimonialTextStyle = {
  color: '#6c757d',
  fontSize: '16px',
};

export default Testimonials;
