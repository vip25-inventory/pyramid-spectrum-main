import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../ContactPage.css';
import Breadcrumbs from '../../common/Breadcrumbs';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';
// import ImageCarousel from '../common/ImageCarousel'; // Commented out as carousel is hidden
import Loader from '../../common/Loader';
import { getCanonicalUrl } from '../../../utils/seoUtils';

// Set your Mapbox access token here
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || "";// Fallback to hard-coded token if env variable is not set

// Location data for our branches
const locations = [
  {
    id: 'vellore',
    name: 'Vellore Branch',
    address: "City Centre, Officer's Line (Opp. Voorhees School). Vellore - 632001",
    phone: '72006 55336',
    coordinates: [79.1325, 12.9165] // [longitude, latitude]
  },
  {
    id: 'katpadi',
    name: 'Katpadi Branch',
    address: 'Jagannathan Nagar, Gandhinagar (Near Auxilium College). Vellore - 632006',
    phone: '72006 55336',
    coordinates: [79.1581, 12.9699] // [longitude, latitude]
  }
];

// Map Modal Component
const MapModal: React.FC<{
  location: typeof locations[0];
  onClose: () => void;
}> = ({ location, onClose }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [location.coordinates[0], location.coordinates[1]] as [number, number],
      zoom: 15
    });

    // Add navigation control without compass
    map.current.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
        showZoom: true
      }), 
      'top-right'
    );

    // Add map style control (for street/satellite view toggle)
    const mapStyleControl = document.createElement('div');
    mapStyleControl.className = 'mapbox-control map-style-control';
    
    const streetBtn = document.createElement('button');
    streetBtn.innerHTML = '<i class="fas fa-road"></i>';
    streetBtn.className = 'map-style-btn active';
    streetBtn.title = 'Street View';
    streetBtn.onclick = () => {
      streetBtn.className = 'map-style-btn active';
      satelliteBtn.className = 'map-style-btn';
      if (map.current) {
        map.current.setStyle('mapbox://styles/mapbox/streets-v11');
      }
    };
    
    const satelliteBtn = document.createElement('button');
    satelliteBtn.innerHTML = '<i class="fas fa-satellite-dish"></i>';
    satelliteBtn.className = 'map-style-btn';
    satelliteBtn.title = 'Satellite View';
    satelliteBtn.onclick = () => {
      satelliteBtn.className = 'map-style-btn active';
      streetBtn.className = 'map-style-btn';
      if (map.current) {
        map.current.setStyle('mapbox://styles/mapbox/satellite-streets-v11');
      }
    };
    
    mapStyleControl.appendChild(streetBtn);
    mapStyleControl.appendChild(satelliteBtn);
    
    // Add the custom control to the map
    if (map.current) {
      const controlContainer = map.current.getContainer().querySelector('.mapboxgl-ctrl-top-left');
      if (controlContainer) {
        const controlWrapper = document.createElement('div');
        controlWrapper.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        controlWrapper.appendChild(mapStyleControl);
        controlContainer.appendChild(controlWrapper);
      }
    }

    // Add center on location button
    const centerButton = document.createElement('div');
    centerButton.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    
    const centerBtnElement = document.createElement('button');
    centerBtnElement.type = 'button';
    centerBtnElement.className = 'center-location-btn';
    centerBtnElement.title = 'Center on location';
    
    // Add icon
    const centerIcon = document.createElement('span');
    centerIcon.innerHTML = '<i class="fas fa-crosshairs"></i>';
    centerBtnElement.appendChild(centerIcon);
    
    // Add click handler
    centerBtnElement.addEventListener('click', () => {
      if (map.current) {
        map.current.flyTo({
          center: [location.coordinates[0], location.coordinates[1]] as [number, number],
          zoom: 15,
          essential: true
        });
      }
    });
    
    centerButton.appendChild(centerBtnElement);
    
    // Add to map
    if (map.current) {
      const rightControlContainer = map.current.getContainer().querySelector('.mapboxgl-ctrl-top-right');
      if (rightControlContainer) {
        rightControlContainer.appendChild(centerButton);
      }
    }

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([location.coordinates[0], location.coordinates[1]] as [number, number])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3>${location.name}</h3>
           <p>${location.address}</p>
           <p><a href="https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[1]},${location.coordinates[0]}" 
           target="_blank" rel="noopener noreferrer">Get Directions on Google Maps</a></p>`
        )
      )
      .addTo(map.current);

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [location]);

  return (
    <div className="map-modal-overlay" onClick={onClose}>
      <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="map-modal-header">
          <h3>{location.name}</h3>
          <button className="map-close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="map-container" ref={mapContainer}></div>
      </div>
    </div>
  );
};

const SpectrumContact: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [contactFormLoaded, setContactFormLoaded] = useState(false);

  const handleShowMap = (locationId: string) => {
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      setSelectedLocation(location);
    }
  };

  const handleCloseMap = () => {
    setSelectedLocation(null);
  };

  const handleContactFormLoad = () => {
    setContactFormLoaded(true);
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact SPECTRUM Education | Reach Out to Our Team</title>
        <meta name="description" content="Get in touch with SPECTRUM Education. Visit our centers in Vellore and Katpadi, call us at 72006 55336, or fill our contact form for more information about our programs." />
        <meta name="keywords" content="contact SPECTRUM, SPECTRUM education contact, coaching center vellore, contact form, address, location" />
        <link rel="canonical" href={getCanonicalUrl("/contact")} />
      </Helmet>
      
      <div className="container">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Contact', path: '/contact' }
          ]} 
        />
        
        <div className="page-header text-center">
          <h1>Contact Us</h1>
          <p>Get in touch with Spectrum by <b style={{ color: '#2a50a2' }}>Pyramid Academy</b> for admissions, queries, and support</p>
        </div>
         
        {/* Image carousel section hidden as requested */}
        {/* <div className="section map-section" style={{ marginBottom: '20px' }}>
          <div className="map-container">
            <ImageCarousel 
              slides={[
                {
                  src: "/gallery-1.webp",
                  alt: "Vellore Branch"
                },
                {
                  src: "/gallery-2.webp",
                  alt: "Katpadi Branch"
                },
                {
                  src: "/gallery-3.webp",
                  alt: "Our Facilities"
                },
                {
                  src: "/gallery-4.jpg",
                  alt: "Our Facilities"
                },
                {
                  src: "/gallery-5.webp",
                  alt: "Our Facilities"
                }
              ]}
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={4000}
              className="contact-image-carousel"
            />
          </div>
        </div> */}
        
        <div className="section contact-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <h2>Reach <span style={{ color: 'black' }}>Out to</span> Us</h2>
                <p className="contact-intro">
                  We're here to help you with any questions about our courses, study
                  materials, or admissions process. Our team of academic counselors is
                  available to provide personalized guidance and support.
                </p>
                
                <div className="contact-methods">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Vellore Branch</h4>
                      <p>City Centre, Officer's Line</p>
                      <p> (Opp. Voorhees School) </p>
                      <p>Vellore - 632001</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Katpadi Branch</h4>
                      <p>Jagannathan Nagar, Gandhinagar</p>
                      <p>(Near Auxilium College)</p>
                      <p>Vellore - 632006</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Phone</h4>
                      <p>72006 55336</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Email</h4>
                      <p>pyramidspectrum@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-media">
                  <h4><span style={{ color: '#2a50a2' }}>Connect</span> With <span style={{ color: '#2a50a2' }}>Us</span></h4>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/people/Spectrum-By-Pyramid-Academy/61574901208336/" aria-label="Facebook" className="social-icon" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/spectrum_vellore/?hl=en" aria-label="Instagram" className="social-icon" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/" aria-label="YouTube" className="social-icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                
                <div className="location-cards-container mt-4">
                  <h4 className="mb-3">Our <span style={{ color: '#2a50a2' }}>Locations</span></h4>
                  <div className="center-card mb-3">
                    <div className="text-center mb-3">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <h3 className="text-center">Vellore Branch</h3>
                    <p className="address text-center">
                      City Centre, Officer's Line<br />
                      (Opp. Voorhees School) <br />
                      Vellore - 632001
                    </p>
                    <p className="phone text-center">
                      <i className="fas fa-phone-alt"></i> 72006 55336
                    </p>
                    <div className="text-center mt-3">
                      <CollisionButton 
                        text="View Map" 
                        onClick={() => handleShowMap('vellore')}
                      />
                    </div>
                  </div>
                  <div className="center-card">
                    <div className="text-center mb-3">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <h3 className="text-center">Katpadi Branch</h3>
                    <p className="address text-center">
                      Jagannathan Nagar, Gandhinagar<br />
                      (Near Auxilium College) <br />
                      Vellore - 632006
                    </p>
                    <p className="phone text-center">
                      <i className="fas fa-phone-alt"></i> 72006 55336
                    </p>
                    <div className="text-center mt-3">
                      <CollisionButton 
                        text="View Map" 
                        onClick={() => handleShowMap('katpadi')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div id="message-form" className="contact-form-container">
                <h2>Send <span style={{ color: 'black' }}>Us a</span> Message</h2>
                
                <div className="google-form-container">
                  {!contactFormLoaded && <Loader text="Loading contact form..." />}
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfEL6f20nn0-FmLFmIiPX5h4SqU5m5NIm2hz853s0JmGCRllA/viewform?embedded=true&amp;widget=true&amp;headers=false" 
                    width="100%" 
                    height="1300" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Contact Form"
                    onLoad={handleContactFormLoad}
                    className={contactFormLoaded ? 'loaded' : ''}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {selectedLocation && (
          <MapModal
            location={selectedLocation}
            onClose={handleCloseMap}
          />
        )}
        
        <div className="section cta-section text-center">
          <h2>Ready to Start Your Journey with Us?</h2>
          <p>Enroll today and take the first step toward academic excellence and skill development</p>
          <AnimatedButton 
            text="Call Now: 72006 55336"
            href="tel:7200655336"
            className="contact-call-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default SpectrumContact; 