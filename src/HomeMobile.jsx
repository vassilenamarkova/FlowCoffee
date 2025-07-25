import { useState, useEffect } from 'react';
import ModelViewer from './ModelViewer';
import Slideshow from './Slideshow';
import InfiniteCarousel from './Carrusel';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const HomeMobile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
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

      {/* Main content container - Mobile optimized */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '1rem',
        padding: '0.5rem',
        minHeight: '60vh'
      }}>
        
        {/* 3D Model Section - Mobile optimized */}
        <div style={{
          flex: '1 1 auto',
          height: '200px',
          width: '100%',
          maxWidth: '300px',
          position: 'relative'
        }}>
          {/* Background text - Mobile optimized */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'rgba(0, 0, 160, 0.25)',
            zIndex: -1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
          }}>
            FLOW COFFEE
          </div>

          {/* Second background text - Mobile optimized */}
          <div style={{
            position: 'absolute',
            top: 'calc(50% + 4rem)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'rgba(0, 0, 160, 0.25)',
            zIndex: -1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
          }}>
            FLOW COFFEE
          </div>
          
          {/* 3D Model */}
          <ModelViewer style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            zIndex: 2  
          }} />
        </div>

        {/* Text content - Mobile optimized */}
        <div style={{ 
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          
        </div>
      </div>

      {/* Where Good Coffee - Mobile optimized */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '0.9rem',
        bottom: '12%',
        textAlign: 'center',
        width: '90%',
        color: '#0000A0',
        fontWeight: 'Bold',
        fontFamily: 'Inria Sans',
        zIndex: 100
      }}>
        Where Good Coffee & Good Energy FLOW
      </div>

      {/* Welcome to FLOW - Mobile optimized */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '0.9rem',
        bottom: '6%',
        textAlign: 'center',
        width: '90%',
        color: '#0000A0',
        fontWeight: '300',
        fontFamily: 'Inria Sans',
        fontStyle: 'italic',
        zIndex: 100
      }}>
        {t.welcome}
      </div>

      {/* BANNER - Mobile optimized */}
      <div style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        marginTop: '0.5vw',
        width: '100vw',
        height: '50vh',
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

        {/* Order button - Mobile optimized */}
        <a 
          href="https://www.takeaway.com/bg-en/menu/flow-coffee-and-pastrykafe-i-peciva-flou" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translateX(-50%)',
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
              padding: '8px 16px 12px 16px',
              border: '2px solid white',
              backgroundColor: isHovered ? 'rgba(252, 252, 252, 0.69)' : 'rgba(255, 255, 255, 0.32)',
              color: isHovered ? 'rgb(255, 255, 255)' : 'white',
              borderRadius: '30px',
              fontSize: '24px',
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

      {/* WHITE ABOUT US SECTION - Mobile optimized */}
      <div style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        width: '100vw',
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
        minHeight: '120vh',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        marginTop: '0.5rem',
        zIndex: -100
      }}>
        {/* ABOUT title - Mobile optimized */}
        <div style={{
          position: 'absolute',
          fontSize: '4rem',
          left: '50%',
          top: '60px',
          transform: 'translate(-50%, -50%)',
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

        {/* Hero text - Mobile optimized */}
        <div style={{
          position: 'absolute',
          fontSize: '0.9rem',
          left: '50%',
          top: '200px',
          width: '90%',
          padding: '0 1rem',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Inria Sans',
          color: 'rgb(148, 128, 75)',
          zIndex: -1,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'normal',
          textAlign: 'justify',
          letterSpacing: '0.1rem',
          lineHeight: '1.4'
        }}>
          {t.heroText}
        </div>

        {/* "More" text - Mobile optimized */}
        <div style={{
          position: 'absolute',
          fontSize: '1.2rem',
          top: '600px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Inria Sans',
          color: 'rgba(0, 0, 160)',
          zIndex: -1,
          fontWeight: 'bold',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          letterSpacing: '0.2em',
          lineHeight: '1.1'
        }}>
          {t.more}
        </div>

        {/* SLIDESHOW */}
        <Slideshow />

        {/* CONTACTS title - Mobile optimized */}
        <div style={{
          position: 'absolute',
          fontSize: '4rem',
          left: '50%',
          top: '720px',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Inria Sans',
          fontWeight: 'bold',
          color: 'rgba(157, 190, 139, 0.85)',
          zIndex: -1,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
        }}>
          {t.CONTACTS}
        </div>
      </div>

      <InfiniteCarousel/>

      {/* GREEN CONTACTS SECTION - Mobile optimized */}
      <div id="contacts" style={{
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        width: '100vw',
        backgroundColor: 'rgba(157, 190, 139, 0.85)',
        minHeight: '80vh',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        marginTop: '0.5rem',
        zIndex: 100
      }}>
        
        {/* Instagram Feed - Mobile optimized */}
        <div style={{ 
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          height: `${646 * 0.5}px`,
          maxWidth: '400px',
          overflow: 'hidden',
          zIndex: 101,
          pointerEvents: 'auto'
        }}>
          <iframe
            src="https://emb.fouita.com/widget/0x299ba2/ftul0hyub"
            title="Instagram Feed"
            width='100%'
            height='100%'
            style={{ 
              border: 'none',
              width: '100%',
              height: '100%'
            }}
          />
        </div>

        {/* Hours - Mobile optimized */}
        <div style={{
          position: 'absolute',
          fontSize: '1.2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '200px',
          width: '90%',
          color: '#FFFF',
          fontWeight: '400',
          fontFamily: 'Inria Sans',
          fontStyle: 'italic',
          zIndex: 100,
          textAlign: 'center',
          lineHeight: '0.9'
        }}>
          {t.time}
        </div>

        {/* SVG Icons - Mobile optimized */}
        <div style={{
          position: 'absolute',
          flexDirection: 'row',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '50px',
          gap: '1rem',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          alignItems: 'center'
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

        {/* Contact links - Mobile optimized */}
        <div style={{
          position: 'absolute',
          fontSize: '1.2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '50px',
          width: '90%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          color: '#FFFF',
          fontWeight: '300',
          fontFamily: 'Inria Sans',
          fontStyle: 'italic',
          zIndex: 100,
          lineHeight: '0.9',
          textDecoration: 'underline'
        }}>
          <p style={{ marginBottom: '0' }}>
            <a 
              href="tel:+359897331630" 
              className="link" 
              style={{ textDecoration: 'underline' }}
            >
              +359 897 331 630
            </a>
          </p>
          <p style={{ marginBottom: '0' }}>
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
          <p style={{ marginBottom: '0' }}>
            <a href="https://www.facebook.com/flowcoffee" target="_blank" rel="noopener noreferrer" className="link" style={{ textDecoration: 'underline' }}>
              @flowcoffee
            </a>
          </p>
        </div>

        {/* Map link - Mobile optimized */}
        <div style={{
          position: 'absolute',
          fontSize: '1.2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '90%',
          whiteSpace: 'normal',
          bottom: '10px',
          color: '#FFFF',
          fontWeight: '300',
          fontFamily: 'Inria Sans',
          fontStyle: 'italic',
          zIndex: 100,
          lineHeight: '0.9',
          textDecoration: 'underline'
        }}>
          <a href="https://www.google.com/maps/place/FLOW+Coffee+and+Pastry/@42.7002383,23.3279669,18.72z/data=!4m15!1m8!3m7!1s0x40aa85656e11eb77:0xe866bef099588bd9!2sSofia+Center,+Budapeshta+Street+26,+1000+Sofia!3b1!8m2!3d42.7003233!4d23.3276759!16s%2Fg%2F11q2vy2_5l!3m5!1s0x40aa85ca12fd3843:0xf0fd2f34c3e8d20d!8m2!3d42.7002864!4d23.3276588!16s%2Fg%2F11rz4tdfs2?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="link" style={{textDecoration: 'underline' }}>
            {t.map}
          </a>
        </div>

        {/* Copyright - Mobile optimized */}
        <div style={{
          position: 'absolute',
          bottom: '-32px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: '300',
          zIndex: 1000,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          padding: '8px 0',
          fontSize: '0.9rem',
          fontFamily: 'Inria Sans',
          color: '#A2A2A2'
        }}>
          {t.rights}
        </div>
      </div>
    </>
  );
};

export default HomeMobile;