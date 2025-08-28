import abstractImg from '../../assets/images/home/abstract-figure.svg'
// import portraitVerImg from '../../assets/images/about/cristian-saenz-portrait-lost.jpg'
// import portraitHorImg from '../../assets/images/about/cristian-saenz-portrait-hor.jpg'
import portraitVerImg from '../../assets/images/about/mustafa-about.jpg'
import portraitHorImg from '../../assets/images/about/mustafa.jpg'

export default class AboutView {
  constructor() {
    this.html = ''
  }

  getData() {
    this.createContent()
  }

  createContent() {
    this.html = `
    <div class="about">
      <div class="about__wrapper">
        <header class="about__header">
          <div class="about__header__wrapper">
            <div class="about__header__bio">
              <div class="about__header__hi title">Hello!</div>
              <h1 class="about__header__title paragraph">
                I'm a professional UI/UX designer with expertise in user-centered design and digital product strategy, based in Dubai, UAE.
              </h1>
              <p class="about__header__description opacity__inner">
                I've been designing digital experiences for many years, recently expanding into design systems and advanced prototyping methodologies. I combine creativity with strategic thinking to create innovative and user-friendly designs through meaningful interactions and thoughtful animations; for me, every pixel matters - those details that create truly exceptional user experiences.
              </p>
            </div>
            <div class="about__header__portrait">
              <figure class="about__header__media">
                <img
                  class="about__header__image three__image"
                  alt="Mustafa"
                  src="${portraitVerImg}"
                  data-webgl="image"
                />
              </figure>
            </div>
          </div>
        </header>
        <main class="about__main">
          <div class="about__main__wrapper">
            <section class="section__skills">
              <div class="section__skills__wrapper">
                <h2 class="section__skills__title title__inner">Skills</h2>
                <div class="section__skills__content">
                  <div class="section__skills__devdes">
                    <div class="section__skills__devdes__item">
                      <h3 class="skill__title paragraph__inner">Design</h3>
                      <div class="skill__items">
                        <div class="skill__item paragraph__inner">Figma</div>
                        <div class="skill__item paragraph__inner">Adobe XD</div>
                        <div class="skill__item paragraph__inner">Sketch</div>
                        <div class="skill__item paragraph__inner">Principle</div>
                        <div class="skill__item paragraph__inner">Framer</div>
                      </div>
                    </div>
                    <div class="section__skills__devdes__item">
                      <h3 class="skill__title paragraph__inner">Research</h3>
                      <div class="skill__items">
                        <div class="skill__item paragraph__inner">User Testing</div>
                        <div class="skill__item paragraph__inner">Maze</div>
                        <div class="skill__item paragraph__inner">Hotjar</div>
                        <div class="skill__item paragraph__inner">Lookback</div>
                        <div class="skill__item paragraph__inner">Miro</div>
                      </div>
                    </div>
                  </div>
                  <p class="section__skill__description opacity__inner">
                    <span>
                      I'm a calm person 😎, passionate about design thinking 🎨 and addicted to learning. My motivation is to grow as a UX designer and brighten users' days with thoughtful digital experiences.
                    </span>
                    <span class="section__skill__description__git">
                      If you want to see how this portfolio was designed, check out my <a class="word__link" href="https://www.figma.com/community/@mustafa-ux" target="_blank">Figma community profile</a>.
                    </span>
                  </p>
                </div>
                <div class="section__skills__logo">
                  <figure class="section__skills__logo__media">
                    <img
                      class="section__skills__logo__image object__rotate"
                      alt="Mustafa Design Studio"
                      src="${abstractImg}"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <section class="section__experience">
  <div class="section__experience__wrapper">
    <h2 class="section__experience__title title__inner">
      Experience
    </h2>
    <div class="section__experience__companies">
      <div class="section__line"></div>
      <div class="experience__company">
        <div class="company__info">
          <h4 class="company__name paragraph__inner">
            ProficientNow
          </h4>
          <div class="company__positions paragraph__inner">
            Senior UI/UX Designer / Design Systems
          </div>
        </div>
        <div class="company__duration">
          <div class="duration__number title__inner">02</div>
          <div class="duration__year title__inner">Years</div>
        </div>
      </div>
      <div class="section__line"></div>
      <div class="experience__company">
        <div class="company__info">
          <h4 class="company__name paragraph__inner">
            Websleak
          </h4>
          <div class="company__positions paragraph__inner">
            UI/UX Designer / Product Design
          </div>
        </div>
        <div class="company__duration">
          <div class="duration__number title__inner">01</div>
          <div class="duration__year title__inner">Year</div>
        </div>
      </div>
      <div class="section__line"></div>
    </div>
  </div>
</section>

            <section class="section__photo">
              <div class="section__photo__wrapper">
                <figure class="section__photo__media">
                  <img
                    class="section__photo__image three__image"
                    alt="Mustafa"
                    src="${portraitHorImg}"
                    data-webgl="image"
                  />
                </figure>
              </div>
            </section>
            <section class="section__moreinfo">
              <div class="section__moreinfo__wrapper">
                <div class="section__moreinfo__inspiration">
                  <h5 class="section__moreinfo__phrase">
                    <div class="phrase__line paragraph__inner">
                      Good design is obvious.
                    </div>
                    <div class="phrase__line paragraph__inner">
                      Great design is transparent.
                    </div>
                  </h5>
                  <div class="section__moreinfo__author">
                    <div class="author__line section__line"></div>
                    <div class="author__name title__inner">Joe_Sparano</div>
                  </div>
                </div>
                <div class="section__moreinfo__description">
                  <p class="section__moreinfo__text opacity__inner">
                    My projects focus on creating meaningful digital experiences that solve real user problems. Rest assured, your product is in expert hands - I'll elevate your user interface with exceptional design thinking and ensure your users have unforgettable experiences.
                  </p>
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
            <div class="footer__about__contact__networks">
              <ul class="footer__contact__items">
                <li class="footer__network">
                  <a class="word__link" href="https://www.linkedin.com/in/syed-mustafa-ali-b96a46269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</a>
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
