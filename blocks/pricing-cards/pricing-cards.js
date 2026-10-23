export default function decorate(block) {
  const rows = [...block.children];

  const titles = [...rows[0].children];
  const prices = [...rows[1].children];
  const features = [...rows[2].children];
  const buttons = [...rows[3].children];
  const links = [...rows[4].children];

  const wrapper = document.createElement('div');
  wrapper.classList.add('pricing-cards-grid');

  titles.forEach((title, index) => {
    const card = document.createElement('div');
    card.classList.add('pricing-card');

    const featureItems = features[index].innerHTML
      .split('<br>')
      .map((item) => item.trim())
      .filter((item) => item.length)
      .map((item) => `<li>${item}</li>`)
      .join('');

    card.innerHTML = `
      <h3>${title.textContent.trim()}</h3>

      <div class="price-circle">
        <span class="currency">$</span>
        <span class="amount">${prices[index].textContent.trim()}</span>
        <span class="month">Per Month</span>
      </div>

      <ul class="pricing-features">
        ${featureItems}
      </ul>

      <a class="pricing-btn" href="${links[index].textContent.trim()}">
        ${buttons[index].textContent.trim()}
      </a>
    `;

    wrapper.append(card);
  });

  block.textContent = '';
  block.append(wrapper);
}
