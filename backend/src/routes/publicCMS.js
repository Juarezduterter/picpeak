const express = require('express');
const { db } = require('../database/db');
const router = express.Router();

const FRENCH_PUBLIC_PAGE_FALLBACKS = {
  impressum: {
    title: 'Mentions légales',
    content: `<h1>Mentions légales</h1>
<p>Merci de personnaliser ce contenu depuis l’interface d’administration.</p>

<h2>Éditeur du site</h2>
<p>[Votre nom]<br>
[Votre adresse]<br>
[Code postal Ville]</p>

<h2>Contact</h2>
<p>E-mail : [Votre adresse e-mail]<br>
Téléphone : [Votre numéro de téléphone]</p>

<h2>Responsabilité</h2>
<p>Les contenus de ce site ont été créés avec le plus grand soin. Merci de compléter et vérifier les informations légales applicables à votre activité.</p>`
  },
  datenschutz: {
    title: 'Politique de confidentialité',
    content: `<h1>Politique de confidentialité</h1>

<h2>1. Vue d’ensemble</h2>
<p>Les informations suivantes expliquent de manière simple ce qu’il advient de vos données personnelles lorsque vous visitez ce site web.</p>

<h2>2. Responsable du traitement</h2>
<p>Le traitement des données sur ce site est effectué par l’exploitant du site. Merci de compléter ici vos informations de contact et vos mentions légales.</p>

<h2>3. Hébergement</h2>
<p>Ce site peut être hébergé par un prestataire externe. Merci d’indiquer ici l’identité de votre hébergeur et les informations requises par votre juridiction.</p>

<h2>4. Vos données</h2>
<p>Merci de décrire ici quelles données sont collectées, pourquoi elles le sont, combien de temps elles sont conservées et comment les visiteurs peuvent exercer leurs droits.</p>`
  }
};

// Get public CMS page
router.get('/pages/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const { lang = 'en' } = req.query;
    
    const page = await db('cms_pages').where('slug', slug).first();
    
    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }
    
    let title;
    let content;

    if (lang === 'fr' && FRENCH_PUBLIC_PAGE_FALLBACKS[slug]) {
      title = FRENCH_PUBLIC_PAGE_FALLBACKS[slug].title;
      content = FRENCH_PUBLIC_PAGE_FALLBACKS[slug].content;
    } else if (lang === 'de') {
      title = page.title_de;
      content = page.content_de;
    } else {
      title = page.title_en;
      content = page.content_en;
    }
    
    res.json({
      title,
      content,
      slug: page.slug,
      updated_at: page.updated_at
    });
  } catch (error) {
    console.error('Error fetching public CMS page:', error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
});

module.exports = router;
