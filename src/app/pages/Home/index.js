import Page from '../../classes/Page'

export default class Home extends Page {
  constructor() {
    super({
      wrapper: '.home__wrapper'
    })

    this.elementsRotate = document.querySelectorAll('.object__rotate')
    this.elementsRotateInverse = document.querySelectorAll('.object__rotate__inverse')

    console.log('init home')
  }

  setRotate() {
    this.elementsRotate.forEach(element => {
      element.style.transform = `rotate(${this.scroll.scroll.current*0.1}deg)`
    })
    this.elementsRotateInverse.forEach(element => {
      element.style.transform = `rotate(${-this.scroll.scroll.current*0.1}deg)`
    })
  }

  update() {
    super.update()

    this.setRotate()
  }
}