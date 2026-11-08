export default function decorate(block) {
  const rows = [...block.children];

  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'stats-counter-wrapper';

  rows.forEach((row) => {
    const cells = [...row.children];

    const icon = cells[0]?.textContent.trim();
    const number = cells[1]?.textContent.trim();
    const title = cells[2]?.textContent.trim();

    const card = document.createElement('div');
    card.setAttribute('role', 'article');
    card.className = 'stats-card';

    card.innerHTML = `
      <div class="stats-icon">
        <i class="icofont ${icon}"></i>
      </div>

      <div class="stats-number">
        ${number}
      </div>

      <div class="stats-title">
        ${title}
      </div>
    `;

    wrapper.append(card);
  });

  block.append(wrapper);
  const counters = block.querySelectorAll('.stats-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = Number(entry.target.textContent.replace('+', ''));

        let count = 0;

        const timer = setInterval(() => {
          count += Math.ceil(target / 50);

          if (count >= target) {
            count = target;
            clearInterval(timer);
          }

          entry.target.textContent = `${count}+`;
        }, 20);
      }
    });
  });

  counters.forEach((counter) => observer.observe(counter));
}
