const navigationView = () => {
  const view = `
    <div class="navigation__wrapper">
      <a class="navigation__logo nav__link word__link" href="/"
        >Ayman Khan</a
      >
      <ul class="navigation__list">
        <li class="navigation__list__item">
          <a class="navigation__list__link nav__link word__link" href="/about"
            >About</a
          >
        </li>
      </ul>
    </div>
  `
  return view
}

export default navigationView()
