import { useState, useEffect, useCallback } from 'react'
import './App.css'

const slides = [
  {
    id: 'title',
    type: 'title',
    content: {
      title: 'SPARQ',
      subtitle: 'The World Model Data Engine for Sports',
      tagline: 'Building the verified athletic data layer for sports AI'
    }
  },
  {
    id: 'convergence',
    type: 'two-column',
    content: {
      heading: 'Two Massive Shifts Colliding',
      columns: [
        {
          title: 'AI World Models Need Training Data',
          text: 'Every frontier AI lab is racing to build world models that understand physical reality'
        },
        {
          title: 'Youth Sports Has Zero Digital Infrastructure',
          text: '$37B market running on cash, clipboards, and fragmentation'
        }
      ],
      callout: 'SPARQ is the data collection engine at the intersection'
    }
  },
  {
    id: 'sparq-rating',
    type: 'metrics',
    content: {
      heading: 'The SPARQ Rating',
      metrics: [
        { title: '40-Yard Dash', description: 'Linear speed', highlight: false },
        { title: '5-10-5 Shuttle', description: 'Agility', highlight: false },
        { title: 'Vertical Jump', description: 'Explosive power', highlight: false },
        { title: 'Powerball Throw', description: 'Best predictor of athletic potential', highlight: true }
      ],
      callout: {
        title: 'Data Sovereignty',
        text: 'Athletes explicitly opt-in. We own the training rights to verified video + metrics.'
      }
    }
  },
  {
    id: 'distribution',
    type: 'funnel',
    content: {
      heading: 'Distribution = Data Collection at Scale',
      top: {
        label: 'Few',
        title: 'College & Pro Athletes',
        text: 'Run SPARQ camps & events'
      },
      bottom: {
        label: 'Millions',
        title: 'Youth Athletes & Parents',
        text: 'Open accounts to attend'
      },
      callout: 'Every camp = thousands of verified data points for AI training'
    }
  },
  {
    id: 'world-models',
    type: 'model-grid',
    content: {
      heading: 'Building Sports World Models',
      models: [
        { title: 'Verified Metrics', text: 'Ground truth performance database' },
        { title: 'Video + Measurements', text: 'Training data for computer vision' },
        { title: 'Longitudinal Tracking', text: 'Predictive talent identification' },
        { title: 'Cross-Sport Intelligence', text: 'Understands athletic potential' }
      ],
      callout: 'Replace $37B of middlemen with Agentic AI that knows each athlete through verified SPARQ data'
    }
  },
  {
    id: 'partnerships',
    type: 'partnerships',
    content: {
      heading: 'Distribution at Scale',
      partnerships: [
        {
          title: 'USOPC Partnership',
          text: 'Official talent provider for winter & summer Olympic teams',
          detail: 'SPARQ Rating identifies high-potential athletes for Team USA'
        },
        {
          title: 'U.S. Marines Contract',
          text: '$100 per athlete tested',
          detail: 'Scale nationally through high schools'
        }
      ],
      callout: 'Elite partnerships + proven economics = massive data collection at scale'
    }
  },
  {
    id: 'vision',
    type: 'vision',
    content: {
      heading: 'The Vision',
      statements: [
        'Every athlete has a verified SPARQ profile',
        'AI agents personalize their athletic journey',
        'World models predict potential across sports',
        'Data sovereignty puts athletes first'
      ],
      final: 'We own the foundational data layer for sports intelligence.'
    }
  }
]

function TitleSlide({ content }) {
  return (
    <div className="content centered title-slide-content">
      <div className="gradient-bg"></div>
      <img src="/sparq-logo.png" alt="SPARQ" className="sparq-logo glow" />
      <h2 className="subtitle">{content.subtitle}</h2>
      <p className="tagline">{content.tagline}</p>
    </div>
  )
}

function TwoColumnSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="two-column">
        <div className="column highlight">
          <h3>{content.columns[0].title}</h3>
          <p>{content.columns[0].text}</p>
        </div>
        <div className="plus">+</div>
        <div className="column highlight">
          <h3>{content.columns[1].title}</h3>
          <p>{content.columns[1].text}</p>
        </div>
      </div>
      <div className="callout glass">
        <strong>{content.callout}</strong>
      </div>
    </div>
  )
}

function MetricsSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="metrics-grid">
        {content.metrics.map((metric, index) => (
          <div key={index} className={`metric ${metric.highlight ? 'highlight-metric' : ''}`}>
            <h3>{metric.title}</h3>
            <p>{metric.highlight ? <strong>{metric.description}</strong> : metric.description}</p>
          </div>
        ))}
      </div>
      <div className="callout">
        <strong>{content.callout.title}</strong><br />
        {content.callout.text}
      </div>
    </div>
  )
}

function FunnelSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="funnel-container">
        <div className="funnel-section top-funnel">
          <div className="funnel-label">{content.top.label}</div>
          <div className="funnel-content">
            <h3>{content.top.title}</h3>
            <p>{content.top.text}</p>
          </div>
        </div>
        <div className="funnel-connector">
          <div className="connector-line"></div>
          <div className="connector-line"></div>
          <div className="connector-line"></div>
        </div>
        <div className="funnel-section bottom-funnel">
          <div className="funnel-label">{content.bottom.label}</div>
          <div className="funnel-content large">
            <h3>{content.bottom.title}</h3>
            <p>{content.bottom.text}</p>
          </div>
        </div>
      </div>
      <div className="callout highlight">
        {content.callout}
      </div>
    </div>
  )
}

function ModelGridSlide({ content, isActive }) {
  return (
    <div className="content compact">
      <h2>{content.heading}</h2>
      <div className="model-grid">
        {content.models.map((model, index) => (
          <div key={index} className="model-box">
            <h3>{model.title}</h3>
            <p>{model.text}</p>
          </div>
        ))}
      </div>
      <div className="video-showcase">
        <div className="video-container-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="sparq-video-full"
          >
            <source src="/sizzle.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="callout highlight">
        {content.callout}
      </div>
    </div>
  )
}

function PartnershipsSlide({ content }) {
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onerror = () => {
        console.warn('Instagram embed script failed to load');
      };
      document.body.appendChild(script);

      script.onload = () => {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
          }
        }, 100);
      };
    } else {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      }, 100);
    }
  }, []);

  // Safety check for content
  if (!content || !content.partnerships) {
    return (
      <div className="content compact">
        <h2>Distribution at Scale</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="content compact">
      <h2>{content.heading}</h2>
      <div className="partnership-grid">
        {content.partnerships.map((partnership, index) => (
          <div key={index} className="partnership-box highlight-box">
            <h3>{partnership.title}</h3>
            <p><strong>{partnership.text}</strong></p>
            <p className="partnership-detail">{partnership.detail}</p>
            {partnership.title === 'USOPC Partnership' && (
              <div className="youtube-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/huwEZdLH8mA?autoplay=0&mute=1&loop=1&playlist=huwEZdLH8mA&controls=1&rel=0"
                  title="USOPC Partnership Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  className="youtube-embed"
                ></iframe>
              </div>
            )}
            {partnership.title === 'U.S. Marines Contract' && (
              <div className="instagram-embed-container">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DQC-Tnxjy1x/"
                  data-instgrm-version="14"
                ></blockquote>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="callout highlight">
        {content.callout}
      </div>
    </div>
  )
}


function VisionSlide({ content, isActive }) {
  return (
    <div className="content centered">
      <h2 className="vision-title">{content.heading}</h2>
      <div className="vision-statement">
        {content.statements.map((statement, index) => (
          <p
            key={index}
            className={isActive ? 'animate' : ''}
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            {statement}
          </p>
        ))}
      </div>
      <div className="final-statement">
        <h3>{content.final}</h3>
      </div>
    </div>
  )
}

function Slide({ slide, isActive, isPrev }) {
  // Slides that need to scroll from top
  const scrollTopSlides = ['world-models', 'partnerships']
  const needsScrollTop = scrollTopSlides.includes(slide.id)

  const className = `slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${needsScrollTop ? 'scroll-top' : ''}`

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide content={slide.content} />
      case 'two-column':
        return <TwoColumnSlide content={slide.content} />
      case 'metrics':
        return <MetricsSlide content={slide.content} />
      case 'funnel':
        return <FunnelSlide content={slide.content} />
      case 'model-grid':
        return <ModelGridSlide content={slide.content} isActive={isActive} />
      case 'partnerships':
        return <PartnershipsSlide content={slide.content} />
      case 'vision':
        return <VisionSlide content={slide.content} isActive={isActive} />
      default:
        return null
    }
  }

  return (
    <section className={className}>
      {renderSlideContent()}
    </section>
  )
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  // Scroll to top when slide changes
  useEffect(() => {
    const activeSlide = document.querySelector('.slide.active')
    if (activeSlide) {
      // Reset scroll position when switching slides
      activeSlide.scrollTop = 0
    }
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide, totalSlides])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Touch/swipe support - only for horizontal swipes
  // Don't interfere with vertical scrolling on scrollable slides
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0
    let touchEndX = 0
    let touchEndY = 0
    let isScrolling = false

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX
      touchStartY = e.changedTouches[0].screenY
      isScrolling = false
    }

    const handleTouchMove = (e) => {
      const deltaX = Math.abs(e.changedTouches[0].screenX - touchStartX)
      const deltaY = Math.abs(e.changedTouches[0].screenY - touchStartY)
      
      // If vertical movement is significant, user is scrolling
      if (deltaY > 10 && deltaY > deltaX) {
        isScrolling = true
      }
    }

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX
      touchEndY = e.changedTouches[0].screenY

      const deltaX = Math.abs(touchEndX - touchStartX)
      const deltaY = Math.abs(touchEndY - touchStartY)

      // Only trigger slide change if:
      // 1. Horizontal swipe is dominant
      // 2. User wasn't scrolling vertically
      // 3. Swipe distance is significant
      if (!isScrolling && deltaX > deltaY && deltaX > 50) {
        if (touchEndX < touchStartX) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextSlide, prevSlide])

  return (
    <div className="presentation">
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
          isPrev={index < currentSlide}
        />
      ))}

      <div className="navigation">
        <button
          className="nav-btn"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          &larr;
        </button>
        <span id="slide-counter">{currentSlide + 1} / {totalSlides}</span>
        <button
          className="nav-btn"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          &rarr;
        </button>
      </div>
    </div>
  )
}

export default App
