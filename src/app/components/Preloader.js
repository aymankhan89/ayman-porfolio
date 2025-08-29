import EventEmitter from 'events'
import * as THREE from 'three'
import { gsap } from 'gsap'

export default class Preloader extends EventEmitter {
  constructor() {
    super()
    this.preloaderElement = document.querySelector('.preloader')
    
    // Remove old selectors - no longer needed
    // this.preloaderTextElement = document.querySelector('.preloader__count__text')
    // this.loadingBarElement = document.querySelector('.preloader__line') 
    // this.preloaderInfoElement = document.querySelector('.preloader__info__text')
    
    // New selectors for the name animation
    this.preloaderStrips = document.querySelectorAll('.preloader-item')
    this.nameLetters = document.querySelectorAll('.name-letter')

    this.textures = []
    this.createLoadingManager()
  }

  createLoadingManager() {
    this.loadingManager = new THREE.LoadingManager()
    this.createTextures()
  }

  createTextures() {
    const texturesRutes = [
      require('../../assets/images/home/mustafa.jpg'),
      require('../../assets/images/home/project1.png'),
      require('../../assets/images/home/project2.png'),
      require('../../assets/images/home/project3.png'),
      // require('../../assets/images/home/project4.png'),
      require('../../assets/images/about/mustafa-about.jpg'),
      require('../../assets/images/about/mustafa.jpg'),
      require('../../assets/images/cases/ecuatraveling/netflix1.png'),
      require('../../assets/images/cases/ecuatraveling/netflix2.png'),
      require('../../assets/images/cases/ecuatraveling/netflix4.png'),
      require('../../assets/images/cases/ecuatraveling/netflix3.png'),
      require('../../assets/images/cases/pencil/pnow1.png'),
      require('../../assets/images/cases/pencil/pnow2.png'),
      require('../../assets/images/cases/pencil/pnow3.png'),
      require('../../assets/images/cases/pencil/pencil-4.jpg'),
      require('../../assets/images/cases/zinetikan/ats1.png'),
      require('../../assets/images/cases/zinetikan/ats2.png'),
      require('../../assets/images/cases/zinetikan/ats3.png'),
      require('../../assets/images/cases/zinetikan/zinetikan-4.jpg')
    ]

    texturesRutes.forEach((texture) => {
      const textureLoaded = new THREE.TextureLoader(this.loadingManager).load(texture)
      this.textures.push(textureLoaded)
    })

    window.textures = this.textures
    this.loading()
  }

  loading() {
    // Start the name animation as soon as loading begins
    this.showNameAnimation()
    
    // Optional: Add progress tracking if you want
    this.loadingManager.onProgress = (url, loaded, total) => {
      const progress = loaded / total
      console.log(`Loading progress: ${Math.round(progress * 100)}%`)
    }
    
    this.loadingManager.onLoad = () => {
      // Wait a bit to let users see the name, then start exit animation
      setTimeout(() => {
        this.loaded()
      }, 2000) // 2 seconds after assets finish loading
    }
  }

  showNameAnimation() {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power1.inOut',
      },
    })

    // Animate letters sliding up from bottom
    tl.to('.name-letter', {
      y: 0,
      stagger: 0.08, // Slightly slower for better effect
      duration: 0.5,
      delay: 0.3 // Small delay before letters appear
    })
  }

  loaded() {
    return new Promise((resolve) => {
      this.emit('completed')

      const tl = gsap.timeline({
        defaults: {
          ease: 'power1.inOut',
        },
      })

      // Exit animation sequence
      tl.to('.preloader-item', {
        y: '100%', // Strips slide down
        duration: 0.6,
        stagger: 0.1,
      })
      .to('.name-letter', { 
        autoAlpha: 0, // Letters fade out
        duration: 0.3
      }, '<0.3') // Start 0.3s after strips begin
      .to(this.preloaderElement, {
        autoAlpha: 0, // Entire preloader fades out
        duration: 0.4,
        onComplete: () => resolve()
      }, '<0.5') // Start 0.5s after strips begin
    })
  }
}
