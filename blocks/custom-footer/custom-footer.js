export default function decorate(block) {
  const rows = [...block.children];

  if (!rows.length) return;

  block.innerHTML = `
    <div class="footer-content">
      <div class="footer-company">
        <h3>TechnoWP</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed happy diverse business team.
        </p>

        <div class="social-icons">
          <a href="#">FB</a>
          <a href="#">X</a>
          <a href="#">IN</a>
          <a href="#">IG</a>
        </div>
      </div>

      <div class="footer-links">
        <h3>Important Links</h3>

        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>Quick Info</h3>

        <ul>
          <li>📍 Dakra Park Ipsum Dolor Sit Met</li>
          <li>📞 +8803212365</li>
          <li>✉ demo@example.com</li>
          <li>⏰ Open Hours: 9am–6pm</li>
        </ul>
      </div>

      <div class="footer-posts">
        <h3>Recent Posts</h3>

        <div class="post-item">
          <img src="https://main--2026-oct-eds-training--arustagi06.aem.page/assets/images/technowp-slider.jpg" alt="">
          <div>
            <p>Always Look At The Solution</p>
            <span>October 18, 2022</span>
          </div>
        </div>

        <div class="post-item">
          <img src="https://main--2026-oct-eds-training--arustagi06.aem.page/assets/images/technowp-slider.jpg" alt="">
          <div>
            <p>7 Secrets About Nonprofit</p>
            <span>October 18, 2022</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      TechnoWP © 2025 - Designed by Wpdream
    </div>
  `;
}
