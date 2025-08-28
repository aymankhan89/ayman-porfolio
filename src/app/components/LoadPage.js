import { gsap, Power1 } from 'gsap'

export default class LoadPage {
  constructor() {
    this.loadPageElement = document.querySelector('.loadpage')
    this.loadPagePhrase = document.querySelector('.loadpage__phrase')

    this.phrases = [
      'Designing since 2016.',
      'UI/UX Design & Research.',
      'Based in Dubai, UAE.',
      'Passionate about Figma.',
      'Creating design systems.',
      'Mobile app experiences.',
      'User-centered design.',
      'Available for projects.',
      'Product design specialist.',
      'Design thinking advocate.',
      'Crafting digital experiences.',
      'Pixel-perfect interfaces.',
      'Prototyping with Principle.',
      'Accessibility-focused design.',
      'Design system architect.',
      'User research enthusiast.'
    ]

    this.createPhrase()
    this.loading()
  }

  createPhrase() {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    this.loadPagePhrase.innerHTML =
      this.phrases[random(0, this.phrases.length - 1)]
  }

  loading() {
    return new Promise((resolve) => {
      const tl = gsap.timeline()

      tl.to(this.loadPageElement, {
        y: '0%',
        duration: 1,
        ease: Power1.easeOut,
        onComplete: resolve
      })
      tl.to(this.loadPageElement, {
        y: '-100%',
        duration: 1,
        ease: Power1.easeOut,
        delay: 1
      })
      tl.to(this.loadPageElement, {
        y: '100%',
        duration: 0
      })
    })
  }
}
