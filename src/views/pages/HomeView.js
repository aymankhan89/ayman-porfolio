import abstractImg from '../../assets/images/home/abstract-figure.svg'
// import portraitImg from '../../assets/images/home/mustafa.jpg'
import aymanImg from '../../assets/images/home/mustafa.jpg' // Keep same image, just renamed variable

import starImg from '../../assets/images/home/star-figure.svg'
import project1Img from '../../assets/images/home/project1.png'
import project2Img from '../../assets/images/home/project2.png'
import project3Img from '../../assets/images/home/project3.png'
// import project4Img from '../../assets/images/home/project4.png'

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
                <div class="header__title__dev title">Frontend</div>
                <div class="header__title__mix">
                  <div class="header__title__web title">Developer</div>
                  <div class="header__title__eye paragraph">passionate about</div>
                </div>
                <div class="header__title__des title">Code</div>
              </h1>
            </div>
            <div class="header__subtitle">
              <h2 class="header__subtitle__wrapper paragraph">
                React JavaScript TypeScript web development responsive design modern frameworks
              </h2>
            </div>
            <div class="header__contact">
              <div class="header__contact__wrapper">
                <ul class="header__networks">
                  <li class="header__network">
                    <a class="word__link" href="https://www.linkedin.com/in/ayman-khan" target="_blank">LinkedIn</a>
                  </li>
                </ul>
                <div class="header__mail">
                  <a class="word__link" href="mailto:ayman.khan.dev@gmail.com">Email</a>
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
                      My name is Ayman, I'm a Frontend developer with over 3 years of experience building modern web applications.
                    </p>
                    <div class="section__bio__logo">
                      <figure class="section__bio__logo__media">
                        <img
                          class="section__bio__logo__image object__rotate"
                          alt="Ayman Khan Development Studio"
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
                      alt="Ayman Khan"
                      src="${aymanImg}"
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
                    A Frontend developer who writes clean, efficient code creates digital experiences that perform flawlessly across all devices.
                  </p>
                  <p class="section__principal paragraph__inner">
                    Pixel-perfect implementations, smooth animations, and optimized performance bring designs to life.
                  </p>
                  <p class="section__principal paragraph__inner">
                    Modern web applications require both technical excellence and creative problem-solving - let's build something amazing together.
                  </p>
                </div>
                <div class="section__description__highlights">
                  <h2 class="section__highlight">
                    <div class="section__highlight__line paragraph__inner">
                      Frontend developer
                    </div>
                    <div class="section__highlight__line paragraph__inner">
                      for web applications.
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
                          React E-Commerce
                        </div>
                        <a
                          class="section__case__link nav__link"
                          href="/case/react-ecommerce"
                        >
                          <figure class="section__case__media">
                            <img
                              class="section__case__image three__image"
                              src="${project1Img}"
                              alt="React E-Commerce Web Application"
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
                          Vue.js Dashboard
                        </div>
                        <a
                          class="section__case__link nav__link"
                          href="/case/vue-dashboard"
                        >
                          <figure class="section__case__media">
                            <img
                              class="section__case__image three__image"
                              src="${project2Img}"
                              alt="Vue.js Admin Dashboard"
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
                          Next.js Portfolio
                        </div>
                        <a
                          class="section__case__link nav__link"
                          href="/case/nextjs-portfolio"
                        >
                          <figure class="section__case__media">
                            <img
                              class="section__case__image three__image"
                              src="${project3Img}"
                              alt="Next.js Portfolio Website"
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
                    alt="Ayman Khan Development Studio"
                    src="${abstractImg}"
                  />
                </figure>
              </div>
              <div class="footer__contact__advice">
                <h2 class="footer__contact__text">
                  <div class="footer__advice__line title__inner">
                    Need_a
                  </div>
                  <div class="footer__advice__line title__inner">website</div>
                  <div class="footer__advice__line title__inner">built?</div>
                </h2>
                <a
                  class="footer__contact__label word__link title__inner"
                  href="mailto:ayman.khan.dev@gmail.com"
                  >Let's_talk</a
                >
              </div>
            </div>
            <div class="footer__contact__networks">
              <ul class="footer__contact__items">
                <li class="footer__network">
                  <a class="word__link" href="https://www.linkedin.com/in/ayman-khan" target="_blank">LinkedIn</a>
                </li>
                <li class="footer__network">
                  <a class="word__link" href="mailto:ayman.khan.dev@gmail.com">Email</a>
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
