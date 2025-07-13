import reactLogo from './assets/flowLogo.svg';
import scrolledLogo from './assets/flowLogoSmall.svg'; 
import './App.css';
import ModelViewer from './ModelViewer';
import ScrollArrow from './arrow';
import MyImage from './assets/flowbrownie.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slideshow from './Slideshow';
import InfiniteCarousel from './Carrusel';
import MobileNavigation from './mobileNavigation'; // Import the new component
import { LanguageProvider } from './LanguageContext';
import Map from './map';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './careers';
import ScrollToTop from './scrollToTop';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

// Home component - your main page content
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only make changes for mobile/tablet - keep desktop as original
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <>
      <div id="landing" style={{
        position: 'absolute',
        top: '0%',
        left: '0%',
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.25)',
        zIndex: -1,
      }}>
        landing marker
      </div>

      {/* Main content container - add top margin for mobile to account for fixed header */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        marginTop: '1.7rem',
        padding: '1rem',
        minHeight: '80vh',
        ...(isMobile && {
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '80px', // Add margin for mobile fixed header
          padding: '0.5rem',
          minHeight: '60vh'
        })
      }}>
        
        {/* 3D Model on Left - keep original positioning for desktop */}
        <div style={{
          flex: '0 0 290px',
          height: '250px',
          position: 'relative',
          ...(isMobile && {
            flex: '1 1 auto',
            height: '200px',
            width: '100%',
            maxWidth: '300px'
          })
        }}>
          {/* Background text - keep original for desktop */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            fontSize: '12rem',
            fontWeight: 'bold',
            color: 'rgba(0, 0, 160, 0.25)',
            zIndex: -1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            ...(isMobile && {
              fontSize: '4rem',
              left: '50%'
            }),
            ...(isTablet && {
              fontSize: '8rem',
              left: '50%'
            })
          }}>
            FLOW COFFEE
          </div>

          {/* Second background text - keep original positioning */}
          <div style={{
            position: 'absolute',
            top: 'calc(45% + 11rem)',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            fontSize: '12rem',
            fontWeight: 'bold',
            color: 'rgba(0, 0, 160, 0.25)',
            zIndex: -1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            ...(isMobile && {
              fontSize: '4rem',
              left: '50%',
              top: 'calc(50% + 4rem)'
            }),
            ...(isTablet && {
              fontSize: '8rem',
              left: '50%',
              top: 'calc(50% + 8rem)'
            })
          }}>
            FLOW COFFEE
          </div>
          
          {/* 3D Model - keep original */}
          <ModelViewer style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            zIndex: 2  
          }} />
        </div>

        {/* Text content on Right - keep original */}
        <div style={{ 
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          ...(isMobile && {
            alignItems: 'center'
          })
        }}>
          
        </div>
      </div>

      {/* Where Good Coffee - keep original positioning for desktop */}
      <div style={{
        position: 'absolute',
        bottom: '9%',
        left: '1.5%',
        fontSize: '1rem',
        color: '#0000A0',
        fontWeight: 'Bold',
        fontFamily: 'Inria Sans',
        zIndex: 100,
        ...(isMobile && {
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.9rem',
          bottom: '12%',
          textAlign: 'center',
          width: '90%'
        })
      }}>
        Where Good Coffee & Good Energy FLOW
      </div>

      {/* Welcome to FLOW - keep original positioning for desktop */}
      <div style={{
        position: 'absolute',
        bottom: '4%',
        left: '1.5%',
        fontSize: '1rem',
        color: '#0000A0',
        fontWeight: '300',
        fontFamily: 'Inria Sans',
        fontStyle: 'italic', 
        zIndex: 100,
        width: '25%',
        textAlign: 'left',
        lineHeight: '0.9',
        ...(isMobile && {
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.9rem',
          bottom: '6%',
          textAlign: 'center',
          width: '90%'
        })
      }}>
        {t.welcome}
      </div>

      {/* BANNER - keep original height for desktop */}
      <div style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        marginTop: '0.5vw',
        width: '100vw',
        height: '70vh',
        overflow: 'hidden',
        ...(isMobile && {
          height: '50vh'
        }),
        ...(isTablet && {
          height: '60vh'
        })
      }}>
        <img 
          src="/banner2.jpg"
          alt="Banner image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            objectPosition: '50% 42%'
          }}
        />

        {/* Order button - keep original positioning for desktop */}
        <a 
          href="https://www.takeaway.com/bg-en/menu/flow-coffee-and-pastrykafe-i-peciva-flou" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: '80%',
            left: '2.5%',
            zIndex: 9999,
            pointerEvents: 'auto',
            ...(isMobile && {
              top: '70%',
              left: '50%',
              transform: 'translateX(-50%)'
            })
          }}
        >
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px 20px 10px 20px',
              border: '2px solid white',
              backgroundColor: isHovered ? 'rgba(252, 252, 252, 0.69)' : 'rgba(255, 255, 255, 0.32)',
              color: isHovered ? 'rgb(255, 255, 255)' : 'white',
              borderRadius: '30px',
              fontSize: '35px',
              lineHeight: '1',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
              pointerEvents: 'auto',
              outline: 'none',
              ...(isMobile && {
                padding: '8px 16px 12px 16px',
                fontSize: '24px'
              }),
              ...(isTablet && {
                fontSize: '30px'
              })
            }}
          >
            {t.order}
          </button>
        </a>

        <div id="home" style={{
          position: 'absolute',
          top: '-31%',
          left: '0%',
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.25)',
          zIndex: -1,
        }}>
          landing marker
        </div>
      </div>

      {/* WHITE ABOUT US SECTION - keep original dimensions for desktop */}
      <div style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        width: '100vw',
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
        padding: '-100rem',
        minHeight: '180vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        marginTop: '0.5rem',
        zIndex: -100,
        ...(isMobile && {
          minHeight: '120vh',
          padding: '2rem 0'
        }),
        ...(isTablet && {
          minHeight: '150vh',
          padding: '2rem 0'
        })
      }}>
        {/* ABOUT title - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          top: '88px',
          left: '69%',
          transform: 'translate(-50%, -50%)',
          fontSize: '10rem',
          fontFamily: 'Inria Sans',
          fontWeight: 'bold',
          color: 'rgba(191,171,122,0.74)',
          zIndex: -1,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          ...(isMobile && {
            fontSize: '4rem',
            left: '50%',
            top: '60px'
          }),
          ...(isTablet && {
            fontSize: '7rem',
            left: '50%'
          })
        }}>
          {t.ABOUT}
        </div>

        <div id="about-us" style={{
          position: 'absolute',
          top: '-4.5%',
          left: '0%',
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.25)',
          zIndex: -1,
        }}>
          landing marker
        </div>

        {/* Hero text - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          top: '340px',
          left: '69%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.1rem',
          fontFamily: 'Inria Sans',
          color: 'rgb(148, 128, 75)',
          zIndex: -1,
          userSelect: 'none',
          pointerEvents: 'none',
          width: '700px',
          whiteSpace: 'normal',
          textAlign: 'justify',
          letterSpacing: '0.1rem',
          lineHeight: '1.4',
          ...(isMobile && {
            fontSize: '0.9rem',
            left: '50%',
            top: '200px',
            width: '90%',
            padding: '0 1rem'
          }),
          ...(isTablet && {
            left: '50%',
            top: '280px',
            width: '80%'
          })
        }}>
          {t.heroText}
        </div>

        {/* "More" text - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          top: '830px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.5rem',
          fontFamily: 'Inria Sans',
          color: 'rgba(0, 0, 160)',
          zIndex: -1,
          fontWeight: 'bold',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          letterSpacing: '0.2em',
          lineHeight: '1.1',
          ...(isMobile && {
            fontSize: '1.2rem',
            top: '600px'
          }),
          ...(isTablet && {
            top: '700px'
          })
        }}>
          {t.more}
        </div>

        {/* SLIDESHOW - keep original */}
        <Slideshow />

        {/* CONTACTS title - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          top: '940px',
          left: '28%',
          transform: 'translate(-50%, -50%)',
          fontSize: '8rem',
          fontFamily: 'Inria Sans',
          fontWeight: 'bold',
          color: 'rgba(157, 190, 139, 0.85)',
          zIndex: -1,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          ...(isMobile && {
            fontSize: '4rem',
            left: '50%',
            top: '720px'
          }),
          ...(isTablet && {
            fontSize: '6rem',
            left: '50%',
            top: '820px'
          })
        }}>
          {t.CONTACTS}
        </div>
      </div>

      <InfiniteCarousel/>

      {/* GREEN CONTACTS SECTION - keep original dimensions for desktop */}
      <div id="contacts" style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        width: '100vw',
        backgroundColor: 'rgba(157, 190, 139, 0.85)',
        padding: '-100rem',
        minHeight: '63vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        marginTop: '0.5rem',
        zIndex: 100,
        ...(isMobile && {
          minHeight: '80vh',
          padding: '2rem 0'
        })
      }}>
        
        {/* Instagram Feed - Improved responsive version */}
        <div style={{ 
          position: 'absolute',
          top: '7px',
          left: '55.7%',
          transform: 'translateY(-7rem)',
          width: `${800 * 0.70}px`,
          height: `${646 * 0.70}px`,
          overflow: 'hidden',
          zIndex: 101,
          pointerEvents: 'auto',
          ...(isMobile && {
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            height: `${646 * 0.5}px`,
            maxWidth: '400px'
          })
        }}>
          <iframe
            src="https://emb.fouita.com/widget/0x299ba2/ftul0hyub"
            title="Instagram Feed"
            width={isMobile ? '100%' : '800'}
            height={isMobile ? '100%' : '646'}
            style={{ 
              border: 'none',
              transform: isMobile ? 'none' : 'scale(0.73)',
              transformOrigin: 'top left',
              ...(isMobile && {
                width: '100%',
                height: '100%'
              })
            }}
          />
        </div>

        {/* Hours - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          bottom: '90px',
          left: '400px',
          fontSize: '1.4rem',
          color: '#FFFF',
          fontWeight: '400',
          fontFamily: 'Inria Sans',
          fontStyle: 'italic', 
          zIndex: 100,
          width: '300px',
          textAlign: 'center',
          lineHeight: '0.9',
          ...(isMobile && {
            fontSize: '1.2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '200px',
            width: '90%'
          })
        }}>
          {t.time}
        </div>

        {/* SVG Icons - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          bottom: '76px',
          left: '100px',
          display: 'flex',
          justifyContent: 'center',
          gap: '2.8rem',
          marginTop: '2rem',
          alignItems: 'center',
          flexDirection: 'column',
          ...(isMobile && {
            flexDirection: 'row',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '50px',
            gap: '1rem'
          })
        }}>
          <a href="tel:+359897331630" style={{ display: 'inline-block' }}>
            <img src="/phone.svg" alt="Phone" style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
          </a>
          <a href="https://www.instagram.com/flowcoffeesofia" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src="/insta.svg" alt="Instagram" className="link" style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
          </a>
          <a href="https://www.facebook.com/flowcoffee" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src="/facebook.svg" alt="Facebook" className="link" style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
          </a>
        </div>

        {/* Contact links - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          bottom: '55px',
          left: '150px',
          fontSize: '1.5rem',
          color: '#FFFF',
          fontWeight: '300',
          fontFamily: 'Inria Sans',
          fontStyle: 'italic', 
          zIndex: 100,
          width: '300px',
          textAlign: 'left',
          lineHeight: '0.9',
          textDecoration: 'underline',
          ...(isMobile && {
            fontSize: '1.2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '50px',
            width: '90%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem'
          })
        }}>
          <p style={{ marginBottom: isMobile ? '0' : '3.6rem' }}>
            <a 
              href="tel:+359897331630" 
              className="link" 
              style={{ textDecoration: 'underline' }}
            >
              +359 897 331 630
            </a>
          </p>
          <p style={{ marginBottom: isMobile ? '0' : '3.6rem' }}>
            <a
              href="https://www.instagram.com/flowcoffeesofia"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              style={{ textDecoration: 'underline' }}
            >
              @flowcoffeesofia
            </a>
          </p>
          <p style={{ marginBottom: isMobile ? '0' : '2.3rem' }}>
            <a href="https://www.facebook.com/flowcoffee" target="_blank" rel="noopener noreferrer" className="link" style={{ textDecoration: 'underline' }}>
              @flowcoffee
            </a>
          </p>
        </div>

        {/* Map link - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '271px',
          fontSize: '1.4rem',
          color: '#FFFF',
          fontWeight: '300',
          fontFamily: 'Inria Sans',
          fontStyle: 'italic', 
          zIndex: 100,
          width: '300px',
          textAlign: 'right',
          lineHeight: '0.9',
          whiteSpace: 'nowrap',
          textDecoration: 'underline',
          ...(isMobile && {
            fontSize: '1.2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            width: '90%',
            whiteSpace: 'normal'
          })
        }}>
          <a href="https://www.google.com/maps/place/FLOW+Coffee+and+Pastry/@42.7002383,23.3279669,18.72z/data=!4m15!1m8!3m7!1s0x40aa85656e11eb77:0xe866bef099588bd9!2sSofia+Center,+Budapeshta+Street+26,+1000+Sofia!3b1!8m2!3d42.7003233!4d23.3276759!16s%2Fg%2F11q2vy2_5l!3m5!1s0x40aa85ca12fd3843:0xf0fd2f34c3e8d20d!8m2!3d42.7002864!4d23.3276588!16s%2Fg%2F11rz4tdfs2?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="link" style={{textDecoration: 'underline' }}>
            {t.map}
          </a>
        </div>

        {/* Copyright - keep original positioning for desktop */}
        <div style={{
          position: 'absolute',
          bottom: '-32px',
          left: '89%',
          transform: 'translateX(-50%)',
          fontWeight: '300',
          zIndex: 1000,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          padding: '8px 0',
          fontSize: '0.9rem',
          fontFamily: 'Inria Sans',
          color: '#A2A2A2',
          ...(isMobile && {
            left: '50%'
          })
        }}>
          {t.rights}
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <MobileNavigation
                logo={reactLogo} 
                scrolledLogo={scrolledLogo}
              />
              <Home />
            </>
          } />
          <Route path="/careers" element={
            <>
              <MobileNavigation
                logo={scrolledLogo} 
                scrolledLogo={scrolledLogo}
                customLogoHeight="50px"
              />
              <Careers />
            </>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;