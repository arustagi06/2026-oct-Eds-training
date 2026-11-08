export default function decorate(block) {
  const rows = [...block.children];

  const slides = rows.map((row) => ({
    image: row.children[0]?.querySelector('picture'),
    heading: row.children[1]?.textContent.trim() || '',
    description: row.children[2]?.textContent.trim() || '',
    btn1Text: row.children[3]?.textContent.trim() || '',
    btn1Link: row.children[4]?.textContent.trim() || '#',
    btn2Text: row.children[5]?.textContent.trim() || '',
    btn2Link: row.children[6]?.textContent.trim() || '#',
    socials: row.children[7]?.textContent.trim() || '',
  }));

  block.innerHTML = '';

  const carousel = document.createElement('div');
  carousel.className = 'hero-carousel-container';

  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'hero-slides';

  slides.forEach((slide) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'hero-slide';

    slideEl.innerHTML = `
    <div class="hero-image">
      ${slide.image ? slide.image.outerHTML : ''}
    </div>

    <div class="hero-overlay"></div>

    <div class="hero-content">
      <h1>${slide.heading}</h1>
      <p>${slide.description}</p>

      <div class="hero-buttons">
        <a href="${slide.btn1Link}" class="hero-btn">
          ${slide.btn1Text}
        </a>

        <a href="${slide.btn2Link}" class="hero-btn">
          ${slide.btn2Text}
        </a>
      </div>
      <div class="hero-socials">
   ${renderSocials(slide.socials)}
</div>
    </div>
  `;

    slidesWrapper.append(slideEl);
  });

  carousel.append(slidesWrapper);
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-nav hero-prev';
  prevBtn.innerHTML = '&#10094;';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-nav hero-next';
  nextBtn.innerHTML = '&#10095;';

  carousel.append(prevBtn, nextBtn);

  block.append(carousel);

  const slideEls = carousel.querySelectorAll('.hero-slide');

  let current = 0;

  const slidesContainer = carousel.querySelector('.hero-slides');

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }
  showSlide(0);
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slideEls.length) % slideEls.length;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slideEls.length;
    showSlide(current);
  });

  if (slideEls.length > 1) {
    setInterval(() => {
      current = (current + 1) % slideEls.length;
      showSlide(current);
    }, 5000);
  }
  function renderSocials(socials) {
    if (!socials) return '';

    return socials
      .split('|')
      .map((item) => {
        const [platform, url] = item.split(':');
        const icons = {
          linkedin: 'in',
          facebook: 'f',
          twitter: 'X',
          instagram: '◎',
        };

        return `
  <a href="${url}" target="_blank" class="social-icon">
    ${icons[platform.toLowerCase()] || '?'}
  </a>
`;
      })
      .join('');
  }
}
