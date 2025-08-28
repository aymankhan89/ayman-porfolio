// import EventEmitter from 'events'
// import * as THREE from 'three'
// import { gsap, Power1 } from 'gsap'
// import { split } from '../utils/text'

// export default class Preloader extends EventEmitter {
//   constructor() {
//     super()
//     this.preloaderElement = document.querySelector('.preloader')
//     this.preloaderTextElement = document.querySelector(
//       '.preloader__count__text'
//     )
//     this.loadingBarElement = document.querySelector('.preloader__line')
//     this.preloaderInfoElement = document.querySelector('.preloader__info__text')

//     this.textures = []

//     this.createLoadingManager()
//   }

//   createLoadingManager() {
//     this.loadingManager = new THREE.LoadingManager()
//     this.createTextures()
//   }

//   createTextures() {
//     const texturesRutes = [
//       require('../../assets/images/home/mustafa.jpg'),
//       // require('../../assets/images/home/cristian-saenz-portrait.jpg'),
//       require('../../assets/images/home/project1-cscreativedev.jpg'),
//       require('../../assets/images/home/project2-cscreativedev.jpg'),
//       require('../../assets/images/home/project3-cscreativedev.jpg'),
//       // require('../../assets/images/about/cristian-saenz-portrait-lost.jpg'),
//       require('../../assets/images/about/cristian-saenz-portrait-hor.jpg'),
//       require('../../assets/images/about/mustafa.jpg'),
//       require('../../assets/images/cases/ecuatraveling/ecuatraveling-1.jpg'),
//       require('../../assets/images/cases/ecuatraveling/ecuatraveling-2.jpg'),
//       require('../../assets/images/cases/ecuatraveling/ecuatraveling-3.jpg'),
//       require('../../assets/images/cases/ecuatraveling/ecuatraveling-4.jpg'),
//       require('../../assets/images/cases/pencil/pencil-1.jpg'),
//       require('../../assets/images/cases/pencil/pencil-2.jpg'),
//       require('../../assets/images/cases/pencil/pencil-3.jpg'),
//       require('../../assets/images/cases/pencil/pencil-4.jpg'),
//       require('../../assets/images/cases/zinetikan/zinetikan-1.jpg'),
//       require('../../assets/images/cases/zinetikan/zinetikan-2.jpg'),
//       require('../../assets/images/cases/zinetikan/zinetikan-3.jpg'),
//       require('../../assets/images/cases/zinetikan/zinetikan-4.jpg')
//     ]

//     texturesRutes.forEach((texture) => {
//       const textureLoaded = new THREE.TextureLoader(this.loadingManager).load(
//         texture
//       )

//       this.textures.push(textureLoaded)
//     })

//     window.textures = this.textures

//     this.loading()
//   }

//   loading() {
//     this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
//       const progressRatio = itemsLoaded / itemsTotal
//       this.loadingBarElement.style.transform = `scaleX(${progressRatio})`
//       this.preloaderTextElement.innerHTML = Math.round(progressRatio * 100)
//       this.preloaderInfoElement.innerHTML = `${Math.round(
//         progressRatio * 3
//       )} years of experience`
//     }

//     this.loadingManager.onLoad = () => {
//       this.loaded()
//     }
//   }

//   loaded() {
//     return new Promise((resolve) => {
//       this.emit('completed')

//       split({
//         element: this.preloaderTextElement,
//         expression: ''
//       })
//       split({
//         element: this.preloaderTextElement,
//         expression: '<br/>'
//       })

//       this.countSpans = this.preloaderTextElement.querySelectorAll('span span')

//       split({
//         element: this.preloaderInfoElement,
//         expression: ''
//       })
//       split({
//         element: this.preloaderInfoElement,
//         expression: '<br/>'
//       })

//       this.infoSpans = this.preloaderInfoElement.querySelectorAll('span span')

//       this.tlPreloader = gsap.timeline({
//         delay: 0
//       })

//       this.tlPreloader
//         .to(this.countSpans, {
//           duration: 0.8,
//           ease: Power1.easeInOut,
//           stagger: 0.05,
//           y: '100%'
//         })
//         .to(this.loadingBarElement, {
//           duration: 0.5,
//           ease: Power1.easeInOut,
//           opacity: 0,
//           delay: -1
//         })
//         .to(this.infoSpans, {
//           duration: 0.5,
//           ease: Power1.easeInOut,
//           stagger: 0.05,
//           y: '-100%',
//           delay: -1.5
//         })
//         .to(this.preloaderElement, {
//           duration: 0.8,
//           ease: Power1.easeInOut,
//           stagger: 0.05,
//           y: '-100%',
//           delay: -0.2
//         })
//     })
//   }
// }
import EventEmitter from 'events'
import * as THREE from 'three'
import { gsap, Power1 } from 'gsap'

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
      require('../../assets/images/home/project1-cscreativedev.jpg'),
      require('../../assets/images/home/project2-cscreativedev.jpg'),
      require('../../assets/images/home/project3-cscreativedev.jpg'),
      require('../../assets/images/about/mustafa-about.jpg'),
      require('../../assets/images/about/mustafa.jpg'),
      require('../../assets/images/cases/ecuatraveling/ecuatraveling-1.jpg'),
      require('../../assets/images/cases/ecuatraveling/ecuatraveling-2.jpg'),
      require('../../assets/images/cases/ecuatraveling/ecuatraveling-3.jpg'),
      require('../../assets/images/cases/ecuatraveling/ecuatraveling-4.jpg'),
      require('../../assets/images/cases/pencil/pencil-1.jpg'),
      require('../../assets/images/cases/pencil/pencil-2.jpg'),
      require('../../assets/images/cases/pencil/pencil-3.jpg'),
      require('../../assets/images/cases/pencil/pencil-4.jpg'),
      require('../../assets/images/cases/zinetikan/zinetikan-1.jpg'),
      require('../../assets/images/cases/zinetikan/zinetikan-2.jpg'),
      require('../../assets/images/cases/zinetikan/zinetikan-3.jpg'),
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
