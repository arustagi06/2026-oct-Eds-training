export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 4) return;

  const imageRow = rows[0];
  const headingRow = rows[1];
  const descriptionRow = rows[2];

  const image = imageRow.children[0]?.querySelector('picture');

  const eyebrow = imageRow.children[1]?.textContent.trim();
  const title = headingRow.children[1]?.textContent.trim();

  const description = descriptionRow.children[0]?.textContent.trim();

  const faqItems = rows.slice(3);

  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'faq-wrapper';

  const left = document.createElement('div');
  left.className = 'faq-image';

  if (image) {
    left.append(image);
  }

  const right = document.createElement('div');
  right.className = 'faq-content';

  right.innerHTML = `
    <span class="faq-tag">${eyebrow}</span>
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  const accordion = document.createElement('div');
  accordion.className = 'faq-accordion';

  faqItems.forEach((row, index) => {
    const question = row.children[0]?.textContent.trim();
    const answer = row.children[1]?.textContent.trim();

    const item = document.createElement('div');
    item.className = 'faq-item';

    if (index === 0) {
      item.classList.add('active');
    }

    item.innerHTML = `
      <button class="faq-question">
        <span>${question}</span>
        <span class="faq-icon">${index === 0 ? '−' : '+'}</span>
      </button>
      <div class="faq-answer">
        <p>${answer}</p>
      </div>
    `;

    accordion.append(item);
  });

  right.append(accordion);

  wrapper.append(left, right);
  block.append(wrapper);

  const questions = block.querySelectorAll('.faq-question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const current = question.closest('.faq-item');
      const isActive = current.classList.contains('active');

      if (isActive) {
        current.classList.remove('active');
        current.querySelector('.faq-icon').textContent = '+';
        return;
      }

      // Close all
      block.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.faq-icon').textContent = '+';
      });

      // Open clicked item
      current.classList.add('active');
      current.querySelector('.faq-icon').textContent = '−';
    });
  });
  button.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    if (isActive) {
      item.classList.remove('active');
      item.querySelector('.faq-icon').textContent = '+';
    } else {
      accordion.querySelectorAll('.faq-item').forEach((faq) => {
        faq.classList.remove('active');
        faq.querySelector('.faq-icon').textContent = '+';
      });

      item.classList.add('active');
      item.querySelector('.faq-icon').textContent = '-';
    }
  });
}
