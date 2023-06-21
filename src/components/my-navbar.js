class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
            <div>
            <h1>Hunger Apps</h1>
            </div>
            <button id="menu" aria-label="header menu" class="header__menu">
            ☰
            </button>
            <ul class="nav__list" id="drawer">
            <li class="nav__item"><a href="#/">Home</a></li>
            <li class="nav__item"><a href="#/favorite">Favorite</a></li>
            <li class="nav__item"><a href="https://www.linkedin.com/in/rezekoard/">About Us</a></li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('my-navbar', Navbar);
