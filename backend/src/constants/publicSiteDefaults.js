const DEFAULT_PUBLIC_SITE_TITLE = 'PicPeak — Galeries soignées, partage simplifié';

const DEFAULT_PUBLIC_SITE_HTML = `
<section class="hero" id="welcome">
  <div class="hero__inner">
    <span class="hero__badge">Vitrine PicPeak</span>
    <h1>Partagez l’histoire de {{company_name}}</h1>
    <p class="hero__lead">{{company_tagline}}</p>
    <div class="hero__cta">
      <a href="#features" class="button button--primary">Découvrir les fonctionnalités</a>
      <a href="#collections" class="button button--ghost">Voir des galeries exemples</a>
    </div>
    <dl class="hero__stats">
      <div>
        <dt>Invitations privées</dt>
        <dd>Des liens sécurisés pour chaque invité</dd>
      </div>
      <div>
        <dt>Livraison soignée</dt>
        <dd>Mettez en valeur chaque favori immédiatement</dd>
      </div>
      <div>
        <dt>Entièrement à votre image</dt>
        <dd>Couleurs, typographie et logo adaptés à votre univers</dd>
      </div>
    </dl>
  </div>
  <div class="hero__visual">
    <article class="deck deck--primary">
      <header class="deck__header">
        <img src="{{brand_logo_url}}" alt="{{company_name}} logo" class="deck__logo" loading="lazy" decoding="async" />
        <span class="deck__title">Galerie PicPeak</span>
      </header>
      <ul class="deck__list">
        <li>Présentations guidées</li>
        <li>Envois invités avec validation</li>
        <li>Téléchargements HD protégés</li>
      </ul>
    </article>
    <article class="deck deck--secondary">
      <p class="deck__quote">« PicPeak transforme la livraison en prolongement de la fête. Nos couples revivent leur journée dès l’ouverture du lien. »</p>
      <p class="deck__author">— Studio Miraval</p>
    </article>
  </div>
</section>

<section class="features" id="features">
  <div class="section-head">
    <span class="section-badge">Pourquoi choisir PicPeak</span>
    <h2>Des galeries élégantes avec le workflow que vous aimez déjà</h2>
    <p>Offrez à vos clients l’expérience PicPeak avec des pages publiques réactives, sécurisées et à votre image.</p>
  </div>
  <div class="feature-grid">
    <article>
      <h3>Soigné par défaut</h3>
      <p>Chaque galerie reprend automatiquement votre thème, votre typographie et votre palette de couleurs PicPeak.</p>
    </article>
    <article>
      <h3>Narration guidée</h3>
      <p>Créez des sections ancrées, mettez en avant vos collections et ajoutez des témoignages rassurants.</p>
    </article>
    <article>
      <h3>Partage sécurisé</h3>
      <p>Protection par mot de passe, liens expirants et contrôle du téléchargement gardent chaque événement privé.</p>
    </article>
  </div>
</section>

<section class="workflow" id="workflow">
  <div class="workflow__content">
    <h2>Mise en ligne en quelques minutes</h2>
    <ol class="workflow__steps">
      <li>
        <h4>Personnalisez une fois</h4>
        <p>PicPeak applique automatiquement votre logo, vos couleurs et vos coordonnées de support.</p>
      </li>
      <li>
        <h4>Structurez vos sections</h4>
        <p>Mettez en avant vos galeries, vos moments forts et vos histoires clés avec de simples blocs HTML.</p>
      </li>
      <li>
        <h4>Partagez sereinement</h4>
        <p>Envoyez un lien unique qui accueille vos invités avant leur entrée dans la galerie privée.</p>
      </li>
    </ol>
  </div>
  <div class="workflow__media">
    <figure class="workflow__browser">
      <img src="/picpeak-logo-transparent.png" alt="PicPeak interface" loading="lazy" decoding="async" />
      <figcaption>Tableau de bord PicPeak &mdash; adopté par des studios du monde entier.</figcaption>
    </figure>
  </div>
</section>

<section class="collections" id="collections">
  <div class="section-head">
    <span class="section-badge">Exemples à mettre en avant</span>
    <h2>Des galeries exemples qui reflètent votre expérience client</h2>
    <p>Ajoutez des histoires à la une, des messages d’accueil et des encarts qui préparent vos invités à la suite.</p>
  </div>
  <div class="collection-showcase">
    <article>
      <h3>Galeries signature</h3>
      <p>Utilisez des cartes responsives pour présenter vos collections phares ou vos partenariats.</p>
    </article>
    <article>
      <h3>Parcours d’accueil</h3>
      <p>Guidez vos invités de l’arrivée au téléchargement avec un parcours fluide et cohérent avec votre image.</p>
    </article>
  </div>
</section>

<section class="stories" id="stories">
  <div class="section-head section-head--center">
    <span class="section-badge">Retours clients</span>
    <h2>Des expériences qui donnent envie de revenir</h2>
  </div>
  <div class="story-grid">
    <figure>
      <blockquote>« De la page d’accueil jusqu’au téléchargement final, tout nous ressemblait. PicPeak a fait de notre galerie une vraie partie de la célébration. »</blockquote>
      <figcaption>— Harper &amp; Elias</figcaption>
    </figure>
    <figure>
      <blockquote>« La page publique donne une vraie narration à chaque collection. Nos couples ressentent l’attention portée à chaque image. »</blockquote>
      <figcaption>— Jordan Rivera, photographe</figcaption>
    </figure>
  </div>
</section>

<section class="cta" id="contact">
  <div class="cta__inner">
    <div>
      <h2>Prêt à accueillir vos invités ?</h2>
      <p>Créez une page publique PicPeak à l’image de votre studio et présentez chaque événement avec élégance.</p>
    </div>
    <div class="cta__actions">
      <a href="mailto:{{support_email}}" class="button button--primary">Nous contacter</a>
      <a href="#features" class="button button--ghost">Voir les fonctionnalités</a>
    </div>
  </div>
</section>

<footer class="site-footer" id="legal">
  <div class="footer-inner">
    <div>
      <h2>{{company_name}}</h2>
      <p>Propulsé par PicPeak pour organiser chaque événement avec soin.</p>
    </div>
    <div class="footer-links">
      <a href="/datenschutz">Politique de confidentialité</a>
      <a href="/impressum">Mentions légales</a>
      <a href="mailto:{{support_email}}">Support</a>
    </div>
  </div>
</footer>
`;

const DEFAULT_PUBLIC_SITE_CSS = `
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(180deg, var(--brand-background), #ffffff 55%);
  color: var(--brand-text);
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.site-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.03), transparent 65%);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: contain;
  background: rgba(148, 163, 184, 0.12);
  padding: 6px;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.brand-label {
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.01em;
  color: var(--brand-text);
}

.brand-tagline {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(15, 23, 42, 0.65);
}

.site-nav {
  display: flex;
  gap: 1rem;
  font-size: 0.95rem;
  color: rgba(15, 23, 42, 0.65);
}

.site-nav a {
  position: relative;
  padding: 0.25rem 0;
}

.site-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: transparent;
  transition: background 0.2s ease;
}

.site-nav a:hover::after {
  background: var(--brand-primary);
}

.site-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2.5rem 1.5rem 4rem;
}

@media (min-width: 960px) {
  .site-main {
    padding: 3rem 0 5rem;
    gap: 5rem;
  }

  .hero,
  .features,
  .workflow,
  .collections,
  .stories,
  .cta {
    max-width: 1100px;
    margin: 0 auto;
  }
}

.hero {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 960px) {
  .hero {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  }
}

.hero__inner {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(34, 197, 94, 0.18);
  color: var(--brand-primary);
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.65rem, 4.8vw, 3.6rem);
  letter-spacing: -0.02em;
  line-height: 1.08;
}

.hero__lead {
  margin: 0;
  max-width: 32rem;
  color: rgba(15, 23, 42, 0.72);
  font-size: 1.05rem;
  line-height: 1.6;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.hero__stats {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  margin: 0;
  padding: 0;
}

.hero__stats dt {
  font-weight: 600;
  color: var(--brand-text);
}

.hero__stats dd {
  margin: 0.35rem 0 0;
  color: rgba(15, 23, 42, 0.6);
  font-size: 0.95rem;
}

.hero__visual {
  display: grid;
  gap: 1.5rem;
}

.deck {
  border-radius: 20px;
  padding: 1.75rem;
  background: #fff;
  box-shadow: 0 35px 60px -35px rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 1.35rem;
}

.deck--primary {
  border-color: rgba(34, 197, 94, 0.2);
}

.deck--secondary {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(15, 23, 42, 0.03));
}

.deck__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.deck__logo {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(34, 197, 94, 0.12);
  padding: 6px;
}

.deck__title {
  font-weight: 600;
  letter-spacing: -0.01em;
}

.deck__list {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.65rem;
  color: rgba(15, 23, 42, 0.68);
}

.deck__quote {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(15, 23, 42, 0.78);
}

.deck__author {
  margin: 0;
  font-weight: 600;
  color: var(--brand-text);
}

.section-head {
  display: grid;
  gap: 1rem;
  max-width: 640px;
}

.section-head--center {
  text-align: center;
  margin: 0 auto;
}

.section-badge {
  display: inline-flex;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(34, 197, 94, 0.14);
  color: var(--brand-primary);
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.6rem);
  letter-spacing: -0.018em;
}

.section-head p {
  margin: 0;
  color: rgba(15, 23, 42, 0.65);
}

.feature-grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.feature-grid article {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 1.75rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 40px -30px rgba(15, 23, 42, 0.28);
}

.workflow {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 960px) {
  .workflow {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
}

.workflow__steps {
  margin: 1.75rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1.5rem;
}

.workflow__steps h4 {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  color: var(--brand-text);
}

.workflow__steps p {
  margin: 0;
  color: rgba(15, 23, 42, 0.65);
}

.workflow__browser {
  margin: 0;
  background: rgba(15, 23, 42, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  padding: 2rem;
  text-align: center;
  color: rgba(15, 23, 42, 0.55);
  font-size: 0.85rem;
}

.collection-showcase {
  margin-top: 2.5rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.collection-showcase article {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  padding: 1.5rem;
  box-shadow: 0 18px 45px -32px rgba(15, 23, 42, 0.3);
}

.story-grid {
  margin-top: 2.5rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.story-grid figure {
  margin: 0;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 42px -32px rgba(15, 23, 42, 0.28);
}

.story-grid blockquote {
  margin: 0 0 1.2rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(15, 23, 42, 0.8);
}

.story-grid figcaption {
  font-weight: 600;
  color: rgba(15, 23, 42, 0.7);
}

.cta {
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
  color: #fff;
  border-radius: 28px;
  padding: clamp(2.5rem, 5vw, 3.5rem);
}

.cta__inner {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 720px;
}

.cta__inner h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.5rem);
}

.cta__inner p {
  margin: 0;
  font-size: 1.05rem;
  opacity: 0.95;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 160ms ease, box-shadow 200ms ease, background 200ms ease, color 200ms ease;
  border: 1px solid transparent;
}

.button:hover {
  transform: translateY(-2px);
}

.button--primary {
  background: var(--brand-primary);
  color: #fff;
  box-shadow: 0 25px 45px -25px rgba(15, 23, 42, 0.55);
}

.button--primary:hover {
  background: var(--brand-accent);
}

.button--ghost {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.45);
  color: inherit;
}

.site-footer {
  padding: 3rem 1.5rem;
  background: rgba(15, 23, 42, 0.05);
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.footer-inner h2 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.footer-inner p {
  margin: 0;
  color: rgba(15, 23, 42, 0.65);
  line-height: 1.6;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-weight: 600;
  color: var(--brand-primary);
}

.footer-links a {
  color: inherit;
}

.footer-links a:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .site-nav {
    display: none;
  }

  .hero__visual {
    grid-template-columns: minmax(0, 1fr);
  }

  .workflow {
    grid-template-columns: minmax(0, 1fr);
  }

  .cta__inner {
    gap: 1.5rem;
  }
}
`;

module.exports = {
  DEFAULT_PUBLIC_SITE_TITLE,
  DEFAULT_PUBLIC_SITE_HTML,
  DEFAULT_PUBLIC_SITE_CSS,
};
