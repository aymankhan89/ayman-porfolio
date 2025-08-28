const preloaderView = () => {
    const view = `
      <div class="preloader__wrapper">
        <div class="preloader-strips">
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
          <div class="preloader-item"></div>
        </div>
        <div class="name-text">
        <span class="name-letter">S</span>
        <span class="name-letter">Y</span>
        <span class="name-letter">E</span>
        <span class="name-letter">D</span>
<span class="name-letter">  </span>
          <span class="name-letter">M</span>
          <span class="name-letter">U</span>
          <span class="name-letter">S</span>
          <span class="name-letter">T</span>
          <span class="name-letter">A</span>
          <span class="name-letter">F</span>
          <span class="name-letter">A</span>
        </div>
      </div>
    `
    return view
  }
  
  export default preloaderView()
  