import { useState, useEffect, useCallback } from 'react'
import './App.css'

const slides = [
  // Slide 1: Title
  {
    id: 'title',
    type: 'title',
    content: {
      title: 'SPARQ',
      subtitle: 'Compare Athletes Across Sports',
      tagline: 'The universal standard for athletic potential'
    }
  },
  // Slide 2: The Problem (Stats + Narrative)
  {
    id: 'problem',
    type: 'problem-stats',
    content: {
      heading: 'The Talent Pipeline is Broken',
      stats: [
        { value: '15+', label: 'Disconnected Platforms', description: 'Athletes rebuild profiles at every stage' },
        { value: '50%', label: 'Draft Bust Rate', description: 'Traditional scouting relies on incomplete data' },
        { value: '70%', label: 'Youth Dropout Rate', description: 'Elite athletes quit before reaching potential' }
      ],
      narrative: {
        main: 'The current system wastes billions in talent because teams can\'t identify athletes effectively across their journey.',
        bullets: [
          '30% of NFL rosters are undrafted',
          'Late bloomers are systematically excluded',
          'Zero cross-sport compatibility'
        ]
      }
    }
  },
  // Slide 3: Athleticism Insight
  {
    id: 'athleticism',
    type: 'highlight',
    content: {
      heading: 'Athleticism Predicts Success',
      bigStatement: 'Raw athleticism is the #1 indicator of success—and it translates across all sports',
      supporting: 'The best athletes in any sport share one thing: elite athletic potential.',
      examples: ['Bo Jackson: Football → Baseball', 'Patrick Mahomes: Baseball → Football', 'Pat Spencer: Lacrosse → Basketball'],
      callout: 'But there\'s no standard way to measure it... until now.'
    }
  },
  // Slide 4: The Solution
  {
    id: 'solution',
    type: 'statement',
    content: {
      heading: 'The Solution',
      bigStatement: "We've developed a way to measure athleticism across sports",
      subtext: 'A universal athletic rating system that identifies potential regardless of sport',
      logo: '/sparq-logo.png'
    }
  },
  // Slide 5: SPARQ Rating
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
  // Slide 6: Traction
  {
    id: 'traction',
    type: 'traction',
    content: {
      heading: 'Proven at Scale',
      stats: [
        { value: '70K+', label: 'Athletes' },
        { value: '700', label: 'SPARQ Rated' },
        { value: '50+', label: 'Olympic Placements' },
        { value: '20', label: 'Events' }
      ],
      partnerships: [
        {
          title: 'USOPC Partnership',
          text: '50+ athletes placed onto Olympic national teams',
          detail: 'Official talent provider for winter & summer Olympic teams'
        },
        {
          title: 'U.S. Military',
          text: 'Backfill opportunities for athletes who won\'t go pro',
          detail: 'Marines & Air Force contracts—every user has a potential outcome'
        }
      ],
      otherPartners: ['USA Football', 'Volleyball Canada', 'Quebec', 'Alberta'],
      callout: 'Every user has a potential outcome'
    }
  },
  // Slide 7: Distribution Model
  {
    id: 'distribution',
    type: 'distribution-model-v2',
    content: {
      heading: 'Distribution Model',
      topRow: [
        {
          image: '/sparq-center.png',
          label: 'Gyms & Facilities',
          description: 'Hungry for new membership + member benefits'
        },
        {
          image: '/sparq-event.png',
          label: 'Sell SPARQ Testing',
          description: 'They run the events, we provide the platform'
        }
      ],
      bottomRow: {
        image: '/revenue-chart.png',
        label: 'Revenue Split',
        description: 'We split the revenue on every athlete tested'
      },
      callout: 'Facilities become our sales force. We scale through their networks.'
    }
  },
  // Slide 8: Revenue Streams
  {
    id: 'revenue',
    type: 'three-tier-v2',
    content: {
      heading: 'Three Revenue Streams',
      tiers: [
        {
          name: 'B2B',
          image: '/coach-dashboard.png',
          title: 'Coaches & Organizations',
          description: 'Pay monthly for verified status + database access',
          highlight: false
        },
        {
          name: 'B2C Free',
          image: '/athlete-app.png',
          title: 'Athlete App',
          description: 'Free app with results, guidance, and pathway recommendations',
          highlight: false
        },
        {
          name: 'B2C Premium',
          image: '/training-app.jpeg',
          title: 'Training & Development',
          description: 'Premium charges for personalized training programs',
          highlight: true
        }
      ]
    }
  },
  // Slide 9: Data Flywheel
  {
    id: 'data-flywheel',
    type: 'model-grid',
    content: {
      heading: 'The Data Flywheel',
      models: [
        { title: 'Verified Metrics', text: 'Every athlete generates verified, metric-based outcomes' },
        { title: 'Video + Data', text: 'Corresponding videos create rich training datasets' },
        { title: 'Scoring Algorithms', text: 'Data improves our predictive scoring models' },
        { title: 'AI World Models', text: 'Fuels proprietary AI for athletic intelligence' }
      ],
      callout: 'More athletes → Better predictions → More value → More athletes'
    }
  },
  // Slide 10: Brand Story
  {
    id: 'brand-story',
    type: 'narrative',
    content: {
      heading: '$150 Million Brand, Reimagined',
      timeline: [
        { year: '2004-2015', text: 'Nike spent $150M building the SPARQ brand to sell training equipment' },
        { year: '2015', text: 'Nike voluntarily abandoned the trademark' },
        { year: '2025', text: 'We acquired the SPARQ trademark' }
      ],
      insight: 'The approach was right—these four testing categories are scientifically proven as the best predictors of athletic ability across sports. The technology just wasn\'t ready. Now it is.',
      note: 'We used to call this the "gScore" before acquiring SPARQ'
    }
  },
  {
    id: 'use-of-funds-distribution',
    type: 'use-of-funds-distribution',
    content: {
      heading: 'Use of Funds',
      amount: '$750,000',
      subtitle: 'Distribution Strategy',
      subAmount: '$240K',
      tiers: [
        {
          name: 'Scale Partners',
          invest: '$150K',
          detail: '3 partnerships × $50K',
          athletes: '15,000',
          athleteCalc: '5K each',
          revenue: '$1.5M',
          netReturn: '$1.35M',
          roi: '10x'
        },
        {
          name: 'Long Tail',
          invest: '$30K',
          detail: '10 facilities × $3K',
          athletes: '5,000',
          athleteCalc: '500 each',
          revenue: '$500K',
          netReturn: '$470K',
          roi: '16x'
        },
        {
          name: 'Media Partner',
          invest: '$60K',
          detail: 'Overtime-style brand',
          outcome: 'Live streams & leaderboards',
          isNiceToHave: true
        }
      ]
    }
  },
  {
    id: 'use-of-funds-supporting',
    type: 'use-of-funds-supporting',
    content: {
      heading: 'Use of Funds',
      subtitle: 'Supporting Investments',
      subAmount: '$510K',
      allocations: [
        {
          amount: '$200K',
          category: 'Olympic & Military Pipeline',
          description: 'USOPC partnership, Marines & Air Force contracts'
        },
        {
          amount: '$150K',
          category: 'Technology & Platform',
          description: 'Scale infrastructure to 100K+ athletes'
        },
        {
          amount: '$160K',
          category: 'Operations',
          description: 'Working capital, legal, compliance'
        }
      ],
      summary: {
        totalInvest: '$750K',
        totalAthletes: '20,000',
        totalRevenue: '$2M',
        totalReturn: '$1.82M',
        overallRoi: '~10x'
      }
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

// NEW COMPONENTS FOR NARRATIVE REVAMP

function TextListSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="text-list">
        {content.items.map((item, index) => (
          <div key={index} className="text-list-item">
            <span className="list-number">{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="callout">
        {content.callout}
      </div>
    </div>
  )
}

function ProblemStatsSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="problem-stats-layout">
        <div className="problem-stats-left">
          {content.stats.map((stat, index) => (
            <div key={index} className="problem-stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-description">{stat.description}</span>
            </div>
          ))}
        </div>
        <div className="problem-stats-right">
          <p className="narrative-main">{content.narrative.main}</p>
          <ul className="narrative-bullets">
            {content.narrative.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function HighlightSlide({ content }) {
  return (
    <div className="content centered">
      <h2>{content.heading}</h2>
      <div className="highlight-statement">
        <p className="big-statement">{content.bigStatement}</p>
      </div>
      <p className="supporting-text">{content.supporting}</p>
      {content.examples && (
        <div className="examples-row">
          {content.examples.map((example, index) => (
            <span key={index} className="example-tag">{example}</span>
          ))}
        </div>
      )}
      {content.callout && (
        <div className="highlight-callout">
          <p>{content.callout}</p>
        </div>
      )}
    </div>
  )
}

function StatementSlide({ content }) {
  return (
    <div className="content centered">
      <h2>{content.heading}</h2>
      {content.logo && (
        <img src={content.logo} alt="SPARQ" className="solution-logo" />
      )}
      <div className="solution-statement">
        <p className="solution-big">{content.bigStatement}</p>
        <p className="solution-subtext">{content.subtext}</p>
      </div>
    </div>
  )
}

function TractionSlide({ content }) {
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
      script.onload = () => {
        setTimeout(() => {
          if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
          }
        }, 100);
      };
    } else {
      setTimeout(() => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      }, 100);
    }
  }, []);

  return (
    <div className="content compact">
      <h2>{content.heading}</h2>

      <div className="traction-stats">
        {content.stats.map((stat, index) => (
          <div key={index} className="traction-stat">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

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
            {partnership.title === 'U.S. Military' && (
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

      {content.otherPartners && (
        <div className="other-partners">
          <span className="partners-label">Also:</span>
          {content.otherPartners.map((partner, index) => (
            <span key={index} className="partner-tag">{partner}</span>
          ))}
        </div>
      )}

      <div className="callout highlight">
        {content.callout}
      </div>
    </div>
  )
}

function DistributionModelSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="distribution-flow">
        {content.flow.map((step, index) => (
          <div key={index} className="flow-step">
            <div className="flow-icon">{step.icon}</div>
            <div className="flow-content">
              <h3>{step.label}</h3>
              <p>{step.description}</p>
            </div>
            {index < content.flow.length - 1 && (
              <div className="flow-arrow">→</div>
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

function DistributionModelSlideV2({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="distribution-grid-v2">
        <div className="distribution-top-row">
          {content.topRow.map((item, index) => (
            <div key={index} className="distribution-card-v2">
              <div className="distribution-image-container">
                <img src={item.image} alt={item.label} className="distribution-image" />
              </div>
              <div className="distribution-card-content">
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="distribution-bottom-row">
          <div className="distribution-card-v2 full-width text-only">
            <div className="distribution-card-content centered">
              <h3>{content.bottomRow.label}</h3>
              <p>{content.bottomRow.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="callout highlight">
        {content.callout}
      </div>
    </div>
  )
}

function ThreeTierSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="three-tier-grid">
        {content.tiers.map((tier, index) => (
          <div key={index} className={`tier-card ${tier.highlight ? 'tier-highlight' : ''}`}>
            <div className="tier-icon">{tier.icon}</div>
            <div className="tier-name">{tier.name}</div>
            <h3>{tier.title}</h3>
            <p>{tier.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ThreeTierSlideV2({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="three-tier-grid-v2">
        {content.tiers.map((tier, index) => (
          <div key={index} className={`tier-card-v2 ${tier.highlight ? 'tier-highlight' : ''}`}>
            <div className="tier-image-container">
              <img src={tier.image} alt={tier.title} className="tier-image" />
            </div>
            <div className="tier-card-v2-content">
              <div className="tier-name-v2">{tier.name}</div>
              <h3>{tier.title}</h3>
              <p>{tier.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NarrativeSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>
      <div className="timeline">
        {content.timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-text">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="insight-box">
        <p className="insight-text">{content.insight}</p>
      </div>
      {content.note && (
        <p className="narrative-note">{content.note}</p>
      )}
    </div>
  )
}

function UseOfFundsDistributionSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>

      <div className="funds-header-row">
        <div className="funds-amount-large">{content.amount}</div>
        <div className="funds-section-label">
          <span className="section-name">{content.subtitle}</span>
          <span className="section-amount">{content.subAmount}</span>
        </div>
      </div>

      <div className="distribution-tiers-full">
        {content.tiers.map((tier, index) => (
          <div key={index} className={`distribution-tier-full ${tier.isNiceToHave ? 'nice-to-have' : ''}`}>
            <div className="tier-header-full">
              <span className="tier-name-full">{tier.name}</span>
              <span className="tier-invest-full">{tier.invest}</span>
            </div>
            <div className="tier-detail-full">{tier.detail}</div>

            {tier.isNiceToHave ? (
              <div className="tier-qualitative-full">
                <div className="tier-outcome-full">{tier.outcome}</div>
              </div>
            ) : (
              <div className="tier-roi-section-full">
                <div className="tier-math-full">
                  <span className="math-athletes">{tier.athletes}</span>
                  <span className="math-operator">×</span>
                  <span className="math-rate">$100</span>
                  <span className="math-operator">=</span>
                  <span className="math-revenue">{tier.revenue}</span>
                </div>
                <div className="tier-return-full">
                  <span className="return-arrow-full">→</span>
                  <span className="return-amount-full">{tier.netReturn}</span>
                  <span className="return-roi-full">{tier.roi} ROI</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function UseOfFundsSupportingSlide({ content }) {
  return (
    <div className="content">
      <h2>{content.heading}</h2>

      <div className="supporting-header">
        <span className="supporting-subtitle">{content.subtitle}</span>
        <span className="supporting-amount">{content.subAmount}</span>
      </div>

      <div className="supporting-allocations">
        {content.allocations.map((item, index) => (
          <div key={index} className="supporting-allocation">
            <div className="supporting-content">
              <div className="supporting-top">
                <span className="supporting-category">{item.category}</span>
                <span className="supporting-alloc-amount">{item.amount}</span>
              </div>
              <div className="supporting-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="funds-summary">
        <div className="summary-title">Total Investment Summary</div>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-value">{content.summary.totalInvest}</span>
            <span className="summary-label">Invested</span>
          </div>
          <div className="summary-item">
            <span className="summary-value">{content.summary.totalAthletes}</span>
            <span className="summary-label">Athletes</span>
          </div>
          <div className="summary-item">
            <span className="summary-value">{content.summary.totalRevenue}</span>
            <span className="summary-label">Revenue</span>
          </div>
          <div className="summary-item highlight">
            <span className="summary-value">{content.summary.totalReturn}</span>
            <span className="summary-label">Net Return</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide({ slide, isActive, isPrev }) {
  const className = `slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''}`

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
      case 'use-of-funds-distribution':
        return <UseOfFundsDistributionSlide content={slide.content} />
      case 'use-of-funds-supporting':
        return <UseOfFundsSupportingSlide content={slide.content} />
      // New slide types for narrative revamp
      case 'text-list':
        return <TextListSlide content={slide.content} />
      case 'problem-stats':
        return <ProblemStatsSlide content={slide.content} />
      case 'highlight':
        return <HighlightSlide content={slide.content} />
      case 'statement':
        return <StatementSlide content={slide.content} />
      case 'traction':
        return <TractionSlide content={slide.content} />
      case 'distribution-model':
        return <DistributionModelSlide content={slide.content} />
      case 'distribution-model-v2':
        return <DistributionModelSlideV2 content={slide.content} />
      case 'three-tier':
        return <ThreeTierSlide content={slide.content} />
      case 'three-tier-v2':
        return <ThreeTierSlideV2 content={slide.content} />
      case 'narrative':
        return <NarrativeSlide content={slide.content} />
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
