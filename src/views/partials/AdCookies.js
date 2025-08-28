const adCookiesView = () => {
  const view = `
    <div class="adcookies__wrapper">
      <div class="adcookies__info">
        <p class="adcookies__phrase">This site uses cookies to ensure you have the best experience and to analyze website performance.</p>
        <div class="adcookies__buttons">
          <div class="adcookies__button adcookies__button--accept">Accept All</div>
          <div class="adcookies__button adcookies__button--reject">Reject All</div>
          <div class="adcookies__button adcookies__button--customize">Customize</div>
        </div>
        <div class="adcookies__policy">
          <a class="word__link" href="/privacy-policy" target="_blank">Privacy Policy</a>
        </div>
      </div>
    </div>
  `
  return view
}

export default adCookiesView()
