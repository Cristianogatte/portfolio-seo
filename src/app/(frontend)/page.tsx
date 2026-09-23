import React from 'react'
import { getPayload } from 'payload'
import config from '../../payload.config'

export default async function HomePage() {
  // Puxa o Payload de forma limpa e segura no servidor
  const payload = await getPayload({ config })
  
  // Busca todos os projetos cadastrados por você no painel admin
  const projectEntries = await payload.find({
    collection: 'projects',
    limit: 100,
  })

  const brands = ['CloudDevs', 'LatHire', 'BAsehit Marketing', 'Seven X']

  return (
    <div style={{
      backgroundColor: '#09090b',
      color: '#f4f4f5',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '80px'
    }}>
      
      {/* HEADER */}
      <header style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #18181b'
      }}>
        <div style={{ fontWeight: '800', fontSize: '22px', letterSpacing: '-0.05em', color: '#00ffcc' }}>
          CRISTIANO<span style={{ color: '#fff' }}>GATTE</span>
        </div>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#portfolio" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Portfolio</a>
          <a href="/admin" style={{
            backgroundColor: '#18181b',
            color: '#fff',
            padding: '8px 16px',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '6px',
            border: '1px solid #27272a'
          }}>
            Acessar Painel CMS
          </a>
        </nav>
      </header>

      {/* HERO SECTION & CALL TO ACTION */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px 40px 20px' }}>
        <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
          <span style={{ color: '#00ffcc', fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Senior SEO & GEO Specialist
          </span>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '900',
            letterSpacing: '-0.04em',
            lineHeight: '1.05',
            marginTop: '12px',
            marginBottom: '20px',
            color: '#fff'
          }}>
            Driving Scalable Traffic & Revenue <br />
            <span style={{ color: '#a1a1aa' }}>For High-Competition Industries.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: '1.6', marginBottom: '32px', maxWidth: '640px' }}>
            Over 10 years of hands-on experience building technical SEO frameworks, managing massive local search campaigns, and pioneering Generative Engine Optimization (GEO).
          </p>
          <a href="https://linkedin.com" target="_blank" style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '14px 28px',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '16px'
          }}>
            Conectar no LinkedIn
          </a>
        </div>

        {/* MARCAS TRABALHADAS */}
        <section style={{ padding: '40px 0', borderTop: '1px solid #18181b', marginBottom: '60px' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>
            Marcas e Parceiros
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            {brands.map((brand) => (
              <div key={brand} style={{ fontSize: '20px', fontWeight: '700', color: '#3f3f46', letterSpacing: '-0.03em' }}>
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* LISTAGEM DINÂMICA DO PORTFÓLIO */}
        <section id="portfolio" style={{ borderTop: '1px solid #18181b', paddingTop: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#fff', marginBottom: '8px', letterSpacing: '-0.03em' }}>
            Meus Trabalhos e Cases
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '15px', marginBottom: '40px' }}>
            Gerencie e adicione novas experiências diretamente pelo painel administrativo do Payload.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {projectEntries.docs.length === 0 ? (
              <div style={{ color: '#52525b', fontSize: '14px', fontStyle: 'italic' }}>
                Nenhum projeto cadastrado ainda. Acesse o painel administrativo para criar o primeiro!
              </div>
            ) : (
              projectEntries.docs.map((project) => (
                <div key={project.id} style={{ background: '#141417', padding: '32px', borderRadius: '12px', border: '1px solid #27272a' }}>
                  <div style={{ backgroundColor: '#1e1b4b', color: '#818cf8', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', display: 'inline-block', marginBottom: '16px', textTransform: 'uppercase' }}>
                    {project.company}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                    {project.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>

      </main>
    </div>
  )
}
