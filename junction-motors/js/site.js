(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  const header = `
  <header>
    <div class="wrap nav">
      <a class="logo" href="index.html">JUNCTION <span>MOTORS</span></a>
      <button class="burger" id="burger" aria-label="Menu">☰</button>
      <ul class="menu" id="menu">
        <li><a href="index.html" data-page="index.html">Home</a></li>
        <li class="has-drop">
          <button class="drop-btn" type="button">Fleet ▾</button>
          <div class="drop">
            <a href="fleet.html">All Vehicles</a>
            <a href="fleet.html?class=sedan">Executive Sedans</a>
            <a href="fleet.html?class=suv">Luxury SUVs</a>
            <a href="fleet.html?class=sport">Performance</a>
          </div>
        </li>
        <li class="has-drop">
          <button class="drop-btn" type="button">Services ▾</button>
          <div class="drop">
            <a href="services.html">All Services</a>
            <a href="airport-transfer.html">Airport Transfer</a>
            <a href="long-term-hire.html">Long-Term Hire</a>
            <a href="chauffeur.html">Chauffeur Drive</a>
            <a href="corporate-fleet.html">Corporate Fleet</a>
          </div>
        </li>
        <li class="has-drop">
          <button class="drop-btn" type="button">Company ▾</button>
          <div class="drop">
            <a href="about.html">About Junction</a>
            <a href="locations.html">Locations</a>
            <a href="reviews.html">Client Reviews</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact</a>
          </div>
        </li>
        <li><a class="btn" href="reserve.html" style="padding:10px 18px">Reserve</a></li>
      </ul>
    </div>
  </header>`;
  const footer = `
  <footer>
    <div class="wrap">
      <div class="fgrid">
        <div>
          <div class="logo">JUNCTION <span>MOTORS</span></div>
          <p class="muted" style="margin-top:12px">Premium vehicle hire. Private fleet. Twelve cities. Concierge around the clock.</p>
        </div>
        <div>
          <strong>Fleet</strong>
          <a href="fleet.html">All vehicles</a>
          <a href="mercedes-s-class.html">Mercedes S-Class</a>
          <a href="range-rover.html">Range Rover</a>
          <a href="ferrari-roma.html">Ferrari Roma</a>
        </div>
        <div>
          <strong>Services</strong>
          <a href="airport-transfer.html">Airport transfer</a>
          <a href="chauffeur.html">Chauffeur</a>
          <a href="corporate-fleet.html">Corporate</a>
          <a href="reserve.html">Reserve</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:concierge@junctionmotors.com">concierge@junctionmotors.com</a>
          <a href="tel:+18005550190">+1 800 555 0190</a>
          <a href="locations.html">Find a hub</a>
          <a href="faq.html">FAQ</a>
        </div>
      </div>
      <p class="copy">© 2026 Junction Motors Rental. All rights reserved. · <a href="faq.html">Terms & FAQ</a></p>
    </div>
  </footer>
  <div class="toast" id="toast">Vehicle selected. Complete the reservation form.</div>`;
  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
  const menu = document.getElementById("menu");
  document.getElementById("burger").onclick = () => menu.classList.toggle("open");
  document.querySelectorAll(".has-drop > .drop-btn").forEach((btn) => {
    btn.onclick = (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        btn.parentElement.classList.toggle("open");
      }
    };
  });
  document.querySelectorAll("#menu a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
})();
