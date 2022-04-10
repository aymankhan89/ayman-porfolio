import { gsap } from 'gsap'
import Prefix from 'prefix'

export default class Scroll {
  constructor({ element }) {
		this.element = element
		this.transformPrefix = Prefix('transform')

    this.scroll = {
			current: 0,
			target: 0,
			last: 0,
			limit: 0
    }
  }

	wheel({ pixelY }) {
		this.scroll.target += pixelY * 0.5
	}

	touchMove(target) {
		this.scroll.target += target
	}

  resize() {
    this.scroll.limit = this.element.clientHeight - window.innerHeight
  }

  update() {
    this.scroll.limit = this.element.clientHeight - window.innerHeight

    this.scroll.target = gsap.utils.clamp(
			0,
			this.scroll.limit,
			this.scroll.target
		)

		if (this.scroll.current < 0.01) {
			this.scroll.current = 0
		}

		this.scroll.current = gsap.utils.interpolate(
			this.scroll.current,
			this.scroll.target,
			0.1
    )

    if (this.element) {
			this.element.style[
				this.transformPrefix
			] = `translateY(-${this.scroll.current}px)`
		}
  }
}