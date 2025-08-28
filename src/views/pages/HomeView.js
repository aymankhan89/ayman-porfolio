import abstractImg from '../../assets/images/home/abstract-figure.svg'
// import portraitImg from '../../assets/images/home/mustafa.jpg'
import mustafa from '../../assets/images/home/mustafa.jpg'

import starImg from '../../assets/images/home/star-figure.svg'
import project1Img from '../../assets/images/home/project1-cscreativedev.jpg'
import project2Img from '../../assets/images/home/project2-cscreativedev.jpg'
import project3Img from '../../assets/images/home/project3-cscreativedev.jpg'

export default class HomeView {
  constructor() {
    this.html = ''
  }

  getData() {
    this.createContent()
  }
  createContent() {
    this.html = `
    <div class="home">
      <div class="home__wrapper">
        <header class="home__header">
          <div class="home__header__wrapper">
            <div class="header__title">
              <h1 class="header__title__wrapper">
                <div class="header__title__dev title">UI/UX</div>
                <div class="header__title__mix">
                  <div class="header__title__web title">Designer</div>
                  <div class="header__title__eye paragraph">with an eye for</div>
                </div>
                <div class="header__title__des title">Innovation</div>
              </h1>
            </div>
            <div class="header__subtitle">
              <h2 class="header__subtitle__wrapper paragraph">
                UI design UX research prototyping user experience branding
              </h2>
            </div>
            <div class="header__contact">
              <div class="header__contact__wrapper">
                <ul class="header__networks">
                  <li class="header__network">
                    <a class="word__link" href="https://www.linkedin.com/in/mustafa-designer/" target="_blank">LinkedIn</a>
                  </li>
                  <li class="header__network">
                    <a class="word__link" href="https://www.instagram.com/mustafa_ux/" target="_blank">Instagram</a>
                  </li>
                </ul>
                <div class="header__mail">
                  <a class="word__link" href="mailto:mustafa.designer@gmail.com">Email</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main class="home__main">
          <div class="home__main__wrapper">
            <section class="section__bio">
              <div class="section__bio__wrapper">
                <div class="section__bio__description">
                  <div class="section__bio__description__wrapper">
                    <p class="section__bio__text paragraph__inner">
                      My name is Mustafa, I'm a UI/UX designer with over 2 years of experience.
                    </p>
                    <div class="section__bio__logo">
                      <figure class="section__bio__logo__media">
                        <img
                          class="section__bio__logo__image object__rotate"
                          alt="Mustafa Design Studio"
                          src="${abstractImg}"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="section__bio__portrait">
                  <figure class="section__bio__media">
                    <img
                      class="section__bio__image three__image"
                      alt="Mustafa"
                      src="${mustafa}"
                      data-webgl="image"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <section class="section__description">
              <div class="section__description__wrapper">
                <div class="section__description__principal">
                  <p class="section__principal paragraph__inner">
                    A UI/UX designer who understands user psychology makes the difference by creating intuitive digital experiences.
                  </p>
                  <p class="section__principal paragraph__inner">
                    Thoughtful interactions, seamless user journeys, and compelling visual design touch users' hearts.
                  </p>
                  <p class="section__principal paragraph__inner">
                    A digital product is more than just functionality - make your brand unforgettable through design.
                  </p>
                </div>
                <div class="section__description__highlights">
                  <h2 class="section__highlight">
                    <div class="section__highlight__line paragraph__inner">
                      UI/UX designer
                    </div>
                    <div class="section__highlight__line paragraph__inner">
                      for digital products.
                    </div>
                  </h2>
                </div>
                <div class="section__description__star">
                  <figure class="section__description__star__media">
                    <img
                      class="section__description__star__image object__rotate"
                      alt="Star"
                      src="${starImg}"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <section class="section__cases">
          <div class="section__cases__wrapper">
            <h2 class="section__cases__h2 title__inner">
              Projects
            </h2>
            <div class="section__cases__help">drag -></div>
            <div class="section__cases__all">
              <div class="section__cases__all__wrapper">
                <div class="section__case">
                  <div class="section__case__wrapper">
                    <div class="section__case__name title__inner">
                      E-Commerce App
                    </div>
                    <a
                      class="section__case__link nav__link"
                      href="/case/ecommerce-app"
                    >
                      <figure class="section__case__media">
                        <img
                          class="section__case__image three__image"
                          src="${project1Img}"
                          alt="E-Commerce Mobile App Design"
                          data-webgl="image"
                        />
                      </figure>
                    </a>
                    <div class="section__case__number title__inner">01</div>
                  </div>
                </div>
                <div class="section__case">
                  <div class="section__case__wrapper">
                    <div class="section__case__name title__inner">
                      FinTech Dashboard
                    </div>
                    <a
                      class="section__case__link nav__link"
                      href="/case/fintech-dashboard"
                    >
                      <figure class="section__case__media">
                        <img
                          class="section__case__image three__image"
                          src="${project2Img}"
                          alt="Financial Technology Dashboard"
                          data-webgl="image"
                        />
                      </figure>
                    </a>
                    <div class="section__case__number title__inner">02</div>
                  </div>
                </div>
                <div class="section__case">
                  <div class="section__case__wrapper">
                    <div class="section__case__name title__inner">
                      Health App
                    </div>
                    <a
                      class="section__case__link nav__link"
                      href="/case/health-app"
                    >
                      <figure class="section__case__media">
                        <img
                          class="section__case__image three__image"
                          src="${project3Img}"
                          alt="Healthcare Mobile Application"
                          data-webgl="image"
                        />
                      </figure>
                    </a>
                    <div class="section__case__number title__inner">03</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          </div>
        </main>
        <footer class="footer__contact">
          <div class="footer__contact__wrapper">
            <div class="footer__contact__main">
              <div class="footer__contact__logo">
                <figure class="footer__contact__logo__media">
                  <img
                    class="footer__contact__logo__image object__rotate"
                    alt="Mustafa Design Studio"
                    src="${abstractImg}"
                  />
                </figure>
              </div>
              <div class="footer__contact__advice">
                <h2 class="footer__contact__text">
                  <div class="footer__advice__line title__inner">
                    Have_a
                  </div>
                  <div class="footer__advice__line title__inner">project</div>
                  <div class="footer__advice__line title__inner">in_mind?</div>
                </h2>
                <a
                  class="footer__contact__label word__link title__inner"
                  href="mailto:mustafa.designer@gmail.com"
                  >Contact_me</a
                >
              </div>
            </div>
            <div class="footer__contact__networks">
              <ul class="footer__contact__items">
                <li class="footer__network">
                  <a class="word__link" href="https://www.linkedin.com/in/mustafa-designer/" target="_blank">LinkedIn</a>
                </li>
                <li class="footer__network">
                  <a class="word__link" href="mailto:alisyed17012@gmail.com">Email</a>
                </li>
              </ul>
              <div class="footer__copy">©2025</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    `
  }
}
