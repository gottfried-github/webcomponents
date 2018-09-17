const templateStr = { gulp_inject: 'product-category.html' }

class ProductCategory extends HTMLElement {
  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, valOld, valNew) {
    if (valOld == valNew)
      return
  }

  constructor(catInfo) {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = templateStr;
    if (!catInfo)
      return this

    const h = shadowRoot.querySelector('div h1')
    h.innerText = catInfo.name || ''

    const p = shadowRoot.querySelector('div p')
    p.innerText = catInfo.description || ''
  }
}

window.customElements.define('product-category', ProductCategory)
// console.log('running from within component module', document.createElement('product-category'))

export {ProductCategory}
