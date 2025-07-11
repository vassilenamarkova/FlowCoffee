import reactLogo from './assets/flowLogo.svg';
import scrolledLogo from './assets/flowLogoSmall.svg'; 
import './App.css';
import ModelViewer from './ModelViewer';
import ScrollArrow from './arrow';
import MyImage from './assets/flowbrownie.jpg'; // adjust the path if needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slideshow from './Slideshow';
import InfiniteCarousel from './Carrusel';
import StickyNavigation from './StickyNav';
import { LanguageProvider } from './LanguageContext';
import Map from './map'; // adjust path as needed
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './careers';
import ScrollToTop from './scrollToTop';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';


{/*import { useLanguage } from './LanguageContext';
import { translations } from './translations';*/}

// Home component - your main page content
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { language} = useLanguage();
  const t = translations[language];

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

      {/* Main content container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        marginTop: '1.7rem',
        padding: '1rem',
        minHeight: '80vh'
      }}>
        
        {/* 3D Model on Left */}
        <div style={{
          flex: '0 0 290px',
          height: '250px',
          position: 'relative'
        }}>
          {/* Background text */}
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
            whiteSpace: 'nowrap'  
          }}>
            FLOW COFFEE
          </div>

          {/* Second background text - directly below */}
          <div style={{
            position: 'absolute',
            top: 'calc(45% + 11rem)',  // 50% + font size + some spacing
            left: '55%',
            transform: 'translate(-50%, -50%)',
            fontSize: '12rem',
            fontWeight: 'bold',
            color: 'rgba(0, 0, 160, 0.25)',
            zIndex: -1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
          }}>
            FLOW COFFEE
          </div>
          
          {/* 3D Model - no wrapper, stays in original position */}
          <ModelViewer style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',  // if possible depending on ModelViewer
            zIndex: 2  
          }} />
        </div>

        {/* Text content on Right */}
        <div style={{ 
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          
        </div>
      </div>
      {/* Where Good Coffee */}
      <div style={{
        position: 'absolute',
        bottom: '50px',
        left: '20px',
        fontSize: '1rem',
        color: '#0000A0',
        fontWeight: 'Bold',
        fontFamily: 'Inria Sans',
        zIndex: 100
      }}>
        Where Good Coffee & Good Energy FLOW
      </div>
      {/*Welcome to FLOW */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        fontSize: '1rem',
        color: '#0000A0',
        fontWeight: '300',  // Changed from 'light' to '300' (numeric is more reliable)
        fontFamily: 'Inria Sans',
        fontStyle: 'italic', 
        zIndex: 100,
        width: '300px',
        textAlign: 'left',
        lineHeight: '0.9'
      }}>
        {t.welcome}
      </div>

      
    {/* BANNER */}
    <div style={{
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      marginTop: '0.5vw',
      width: '100vw',
      height: '70vh',
      overflow: 'hidden'
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

      <a 
            href="https://www.takeaway.com/bg-en/menu/flow-coffee-and-pastrykafe-i-peciva-flou" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: '80%',
              left: '2.5%',
              zIndex: 9999,
              pointerEvents: 'auto'
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
                outline: 'none'
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

      {/*WHITE ABOUT US SECTION */}
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
        zIndex: -100
      }}>
        <div style={{
            position: 'absolute',
            top: '88px',  // 50% + font size + some spacing
            left: '69%',
            transform: 'translate(-50%, -50%)',
            fontSize: '10rem',
            fontFamily: 'Inria Sans',
            fontWeight: 'bold',
            color: 'rgba(191,171,122,0.74)',
            zIndex: -1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
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
            lineHeight: '1.4'
          }}>
            {t.heroText}
          </div>

          <div style={{
            position: 'absolute',
            top: '830px',  // 50% + font size + some spacing
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
            letterSpacing: '0.2em',    // More space between letters
            lineHeight: '1.1'
          }}>
            {t.more}
          </div>

          {/*SLIDESHOW */}
          <Slideshow />

          <div style={{
            position: 'absolute',
            top: '940px',  // 50% + font size + some spacing
            left: '28%',
            transform: 'translate(-50%, -50%)',
            fontSize: '8rem',
            fontFamily: 'Inria Sans',
            fontWeight: 'bold',
            color: 'rgba(157, 190, 139, 0.85)',  //rgba(164, 197, 158, 0.91)
            zIndex: -1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
          }}>
            {t.CONTACTS}
          </div>
          
          
      </div>

      <InfiniteCarousel/>

      {/*GREEN CONTACTS SECTION */}
      <div id="contacts" style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        width: '100vw',
        backgroundColor: 'rgba(157, 190, 139, 0.85)', //rgba(0, 0, 160, 0.80)
        padding: '-100rem',
        minHeight: '63vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        marginTop: '0.5rem',
        zIndex: 100
      }}>
        

        <div style={{ 
          position: 'absolute',
          top: '7px',
          left: '55.7%',
          transform: 'translateY(-7rem)',
          width: `${800 * 0.70}px`,   // Scaled width
          height: `${646 * 0.70}px`,  // Scaled height
          overflow: 'hidden',         // 🚀 Clip anything outside bounds
          zIndex: 101,
          pointerEvents: 'auto'
        }}>
          <iframe
            src="https://emb.fouita.com/widget/0x299ba2/ftul0hyub"
            title="Instagram Feed"
            width="800"
            height="646"
            style={{ 
              border: 'none',
              transform: 'scale(0.73)',
              transformOrigin: 'top left'
            }}
          ></iframe>
        </div>

        {/*Monday to Friday */}
        <div style={{
          position: 'absolute',
          bottom: '90px',
          left: '400px',
          fontSize: '1.4rem',
          color: '#FFFF',
          fontWeight: '400',  // Changed from 'light' to '300' (numeric is more reliable)
          fontFamily: 'Inria Sans',
          fontStyle: 'italic', 
          zIndex: 100,
          width: '300px',
          textAlign: 'center',
          lineHeight: '0.9'
        }}>
          {t.time}
        </div>

        {/* SVG Icons */}
        <div style={{
          position: 'absolute',
          bottom: '76px',
          left: '100px',
          display: 'flex',
          justifyContent: 'center',
          gap: '2.8rem',
          marginTop: '2rem',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <a href="tel:+359897331630"  style={{ display: 'inline-block' }}>
            <img src="/phone.svg" alt="Phone" style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
          </a>
          <a href="tel:+359897331630"  style={{ display: 'inline-block' }}>
            <img src="/insta.svg" alt="Instagram" className="link"  style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
          </a>
          <a href="tel:+359897331630"  style={{ display: 'inline-block' }}>
            <img src="/facebook.svg" alt="Facebook" className="link"  style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
          </a>
          
        </div>

        {/*phone, insta and facebook links */}
        <div style={{
          position: 'absolute',
          bottom: '55px',
          left: '150px',
          fontSize: '1.5rem',
          color: '#FFFF',
          fontWeight: '300',  // Changed from 'light' to '300' (numeric is more reliable)
          fontFamily: 'Inria Sans',
          fontStyle: 'italic', 
          zIndex: 100,
          width: '300px',
          textAlign: 'left',
          lineHeight: '0.9',
          textDecoration: 'underline'

        }}>
          <p style={{ marginBottom: '3.6rem' }}>
            <a 
              href="tel:+359897331630" 
              className="link" 
              style={{ textDecoration: 'underline' }}
            >
              +359 897 331 630
            </a>
          </p>
          <p style={{ marginBottom: '3.6rem' }}>
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
          <p style={{ marginBottom: '2.3rem' }}>
            <a href="https://www.facebook.com/flowcoffee" target="_blank" rel="noopener noreferrer" className="link" style={{ textDecoration: 'underline' }}>
              @flowcoffee
            </a>
          </p>
        </div>

        {/*Monday to Friday */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '271px',
          fontSize: '1.4rem',
          color: '#FFFF',
          fontWeight: '300',  // Changed from 'light' to '300' (numeric is more reliable)
          fontFamily: 'Inria Sans',
          fontStyle: 'italic', 
          zIndex: 100,
          width: '300px',
          textAlign: 'right',
          lineHeight: '0.9',
          whiteSpace: 'nowrap',
          textDecoration: 'underline'

        }}>
          <a href="https://www.google.com/maps/place/FLOW+Coffee+and+Pastry/@42.7002383,23.3279669,18.72z/data=!4m15!1m8!3m7!1s0x40aa85656e11eb77:0xe866bef099588bd9!2sSofia+Center,+Budapeshta+Street+26,+1000+Sofia!3b1!8m2!3d42.7003233!4d23.3276759!16s%2Fg%2F11q2vy2_5l!3m5!1s0x40aa85ca12fd3843:0xf0fd2f34c3e8d20d!8m2!3d42.7002864!4d23.3276588!16s%2Fg%2F11rz4tdfs2?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="link" style={{textDecoration: 'underline' }}>
            {t.map}
          </a>
        </div>

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
          fontSize: '0.9rem', // Slightly smaller font
          fontFamily: 'Inria Sans',
          color: '#A2A2A2',
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
              <StickyNavigation
                logo={reactLogo} 
                scrolledLogo={scrolledLogo}
              />
              <Home />
            </>
          } />
          <Route path="/careers" element={
            <>
              <StickyNavigation
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