/**
 * Decap CMS Content Loader
 * Loads content from YAML files and updates DOM elements
 */

class ContentLoader {
  constructor() {
    this.cache = {};
  }

  /**
   * Load YAML file and parse as JSON
   */
  async loadYAML(filePath) {
    if (this.cache[filePath]) {
      return this.cache[filePath];
    }

    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        console.warn(`Could not load ${filePath}`);
        return null;
      }

      const yaml = await response.text();
      const data = this.parseYAML(yaml);
      this.cache[filePath] = data;
      return data;
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Simple YAML parser for basic key-value pairs
   */
  parseYAML(yaml) {
    const result = {};
    const lines = yaml.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      const match = trimmed.match(/^([^:]+):\s*(.+)$/);
      if (match) {
        const [, key, value] = match;
        const cleanValue = value
          .replace(/^["']|["']$/g, '') // Remove quotes
          .replace(/\\n/g, '\n');      // Handle escaped newlines

        result[key] = cleanValue;
      }
    }

    return result;
  }

  /**
   * Update DOM elements with content from a data source
   */
  async updateContent(selector, dataKey, filePath) {
    const element = document.querySelector(selector);
    if (!element) return;

    const data = await this.loadYAML(filePath);
    if (data && data[dataKey]) {
      element.textContent = data[dataKey];
    }
  }

  /**
   * Update HTML content (with support for line breaks)
   */
  async updateHTML(selector, dataKey, filePath) {
    const element = document.querySelector(selector);
    if (!element) return;

    const data = await this.loadYAML(filePath);
    if (data && data[dataKey]) {
      element.innerHTML = data[dataKey].replace(/\n/g, '<br>');
    }
  }

  /**
   * Load and populate contact information globally
   */
  async loadContacts() {
    const contacts = await this.loadYAML('_content/contacts.yml');
    if (!contacts) return;

    // Update phone numbers
    document.querySelectorAll('[data-contact="phone"]').forEach(el => {
      el.textContent = contacts.phone;
      if (el.tagName === 'A') el.href = `tel:${contacts.phone}`;
    });

    // Update email
    document.querySelectorAll('[data-contact="email"]').forEach(el => {
      el.textContent = contacts.email;
      if (el.tagName === 'A') el.href = `mailto:${contacts.email}`;
    });

    // Update address
    document.querySelectorAll('[data-contact="address"]').forEach(el => {
      el.innerHTML = contacts.address;
    });

    // Update social links
    if (contacts.telegram) {
      const telegramLink = document.querySelector('[data-social="telegram"]');
      if (telegramLink) telegramLink.href = contacts.telegram;
    }

    if (contacts.instagram) {
      const instagramLink = document.querySelector('[data-social="instagram"]');
      if (instagramLink) instagramLink.href = contacts.instagram;
    }

    if (contacts.whatsapp) {
      const whatsappLink = document.querySelector('[data-social="whatsapp"]');
      if (whatsappLink) whatsappLink.href = contacts.whatsapp;
    }
  }

  /**
   * Load homepage content
   */
  async loadHomepage() {
    const homepage = await this.loadYAML('_content/homepage.yml');
    if (!homepage) return;

    // Update hero section
    const heroTitle = document.querySelector('.hero-inner h1');
    if (heroTitle) heroTitle.textContent = homepage.heroTitle;

    const heroSubtitle = document.querySelector('.hero-inner .lead');
    if (heroSubtitle) {
      heroSubtitle.innerHTML = homepage.heroSubtitle.replace(/\n/g, '<br>');
    }

    // Update contact info in footer
    const footerPhone = document.querySelector('.footer-map-phone');
    if (footerPhone) {
      footerPhone.textContent = `${homepage.phone} & ${homepage.email}`;
    }

    const footerAddress = document.querySelector('.footer-map-address');
    if (footerAddress) {
      footerAddress.innerHTML = homepage.footerAddress.replace(/\n/g, '<br>');
    }
  }

  /**
   * Load sauna-specific content
   */
  async loadSauna(saunaSlug) {
    const sauna = await this.loadYAML(`_content/saunas/${saunaSlug}.yml`);
    if (!sauna) return;

    // Update main content
    const mainTitle = document.querySelector('.feature-hamam h2');
    if (mainTitle) mainTitle.textContent = sauna.mainTitle;

    const label = document.querySelector('.feature-hamam-label');
    if (label) label.textContent = sauna.descriptionLabel;

    const description = document.querySelector('.feature-left p');
    if (description) description.innerHTML = sauna.description.replace(/\n/g, '<br>');

    // Update featured image
    const featuredImg = document.querySelector('.feature-right img');
    if (featuredImg) {
      featuredImg.src = sauna.image;
      featuredImg.alt = sauna.mainTitle;
    }

    // Update video if present
    const videoElement = document.querySelector('.gallery-video video');
    if (videoElement && sauna.videoUrl) {
      const source = videoElement.querySelector('source');
      if (source) {
        source.src = sauna.videoUrl;
        videoElement.load();
      }
    }

    // Update gallery if present
    const gallerySlides = document.querySelectorAll('.swiper-slide img');
    if (gallerySlides.length > 0 && sauna.gallery) {
      sauna.gallery.forEach((item, index) => {
        if (gallerySlides[index]) {
          gallerySlides[index].src = item.image;
        }
      });
    }

    // Update price if present
    const priceElement = document.querySelector('[data-price]');
    if (priceElement && sauna.price) {
      priceElement.textContent = `€${sauna.price.toFixed(2)}`;
    }
  }

  /**
   * Initialize all content loaders
   */
  async init() {
    // Load global contacts first
    await this.loadContacts();

    // Load homepage content if on homepage
    if (document.body.classList.contains('homepage')) {
      await this.loadHomepage();
    }

    // Load sauna content based on page
    const saunaSlug = document.body.getAttribute('data-sauna');
    if (saunaSlug) {
      await this.loadSauna(saunaSlug);
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ContentLoader().init();
  });
} else {
  new ContentLoader().init();
}
