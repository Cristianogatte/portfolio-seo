import React from 'react'

export default function HomePage() {
  return (
    <div style={{
      backgroundColor: '#0a0a0c',
      color: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '0 24px'
    }}>
      {/* Header / Navegação */}
      <header style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '24px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #1f2937'
      }}>
        <div style={{ fontWeight: '800', fontSize: '20px', letterSpacing: '-0.05em', color: '#00ffcc' }}>
          CG<span style={{ color: '#fff' }}>.SEO</span>
        </div>
        <nav>
          <a href="/admin" style={{
            backgroundColor: '#1f2937',
            color: '#fff',
            padding: '8px 16px',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '6px',
            transition: 'background 0.2s'
          }}>
            Painel CMS
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 0 40px 0' }}>
        <div style={{ maxWidth: '700px' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            marginBottom: '16px',
            color: '#fff'
          }}>
            Dominate the Local Market. <br />
            <span style={{ color: '#00ffcc' }}>Drive Real Leads & Revenue.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#9ca3af', lineHeight: '1.6', marginBottom: '32px' }}>
            Senior Local SEO Specialist with 10+ years of experience scaling U.S. service-based businesses. Expert in Google Business Profile mastery, advanced technical audits, and lead generation frameworks.
          </p>
        </div>

        {/* Métrica / Destaques de Autoridade */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          marginTop: '60px',
          marginBottom: '80px'
        }}>
          <div style={{ background: '#111827', padding: '24px', borderRadius: '12px', border: '1px solid #1f2937' }}>
            <div style={{ fontSize: '36px', fontWeight: '800', color: '#00ffcc', marginBottom: '4px' }}>40+</div>
            <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '500' }}>Google Business Profiles Managed</div>
          </div>
          <div style={{ background: '#111827', padding: '24px', borderRadius: '12px', border: '1px solid #1f2937' }}>
            <div style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>10+ Years</div>
            <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '500' }}>SEO & GEO Industry Experience</div>
          </div>
          <div style={{ background: '#111827', padding: '24px', borderRadius: '12px', border: '1px solid #1f2937' }}>
            <div style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>20+ Clients</div>
            <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '500' }}>Simultaneous Agency Accounts Scaled</div>
          </div>
        </div>

        {/* Seção de Nichos de Atuação */}
        <section style={{ borderTop: '1px solid #1f2937', paddingCopy: '60px', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Proven Track Record in High-Competition Niches
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['Roofing', 'HVAC', 'Solar', 'Painting', 'Flooring', 'Tile', 'Window Tinting', 'Cybersecurity'].map((nicho) => (
              <span key={nicho} style={{
                backgroundColor: '#1f2937',
                color: '#e5e7eb',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {nicho}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
