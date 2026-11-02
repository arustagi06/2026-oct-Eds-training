export default function decorate(block) {
  const rows = [...block.children];

  const data = {};

  rows.forEach((row) => {
    const cells = row.children;

    if (cells.length < 2) return;

    const key = cells[0].textContent.trim().toLowerCase();
    const value = cells[1].textContent.trim();

    data[key] = value;
  });

  block.innerHTML = `
    <div class="cta-banner-content">
      <h5 class="cta-banner-tagline">${data.tagline || ''}</h5>
      <h2 class="cta-banner-title">${data.title || ''}</h2>
    </div>

    <div class="cta-banner-action">
      <a href="${data['button link'] || '#'}" class="cta-banner-button">
        ${data['button text'] || 'Learn More'}
      </a>
    </div>
  `;
}
