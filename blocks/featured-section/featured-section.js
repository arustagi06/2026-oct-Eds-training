export default function decorate(block) {
  const rows = [...block.children];

  const image = rows[0].children[0];

  const subtitle = rows[0].children[1]?.textContent.trim();
  const heading = rows[1].children[1]?.textContent.trim();
  const description = rows[2].children[1]?.textContent.trim();

  const features = [];
  for (let i = 3; i <= 5; i += 1) {
    const text = rows[i]?.children[1]?.textContent.trim();
    if (text) features.push(text);
  }

  const buttonText = rows[6]?.children[1]?.textContent.trim();
  const buttonLink = rows[7]?.children[1]?.textContent.trim();

  const content = document.createElement('div');
  content.className = 'featured-text';

  content.innerHTML = `
    <span class="featured-subtitle">${subtitle}</span>
    <h2>${heading}</h2>
    <p class="featured-description">${description}</p>
    <ul class="featured-features">
      ${features.map((item) => `<li>${item}</li>`).join('')}
    </ul>
    <a href="${buttonLink}" class="featured-btn">${buttonText}</a>
  `;

  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'featured-section-content';

  image.classList.add('featured-image');

  wrapper.append(image, content);
  block.append(wrapper);
  image.insertAdjacentHTML(
    'beforeend',
    `
  <div class="experience-badge">
    <span>15+</span>
    <p>Years Experience</p>
  </div>
`,
  );
}
