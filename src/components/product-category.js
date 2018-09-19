const templateStr = "<style>:host {\n    display: flex;\n  }\n\n  .category-info-slot-container, .featured-work-slot-container {\n    /**/\n    flex-grow: 1;\n    min-width: 50%;\n  }\n\n  .category-info-slot-container {\n    /*\n    background-color: blue;\n    */\n  }\n\n  .featured-work-slot-container {\n    /*\n    background-color: yellow;\n    */\n  }\n\n  /*\n  .category-info h1 {\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n  }\n\n  .category-info p {\n    font-family: var(--font-family-p);\n    font-weight: var(--font-weight-p);\n  }\n\n  .featured-work-slot-container {\n    display: flex;\n    flex-direction: column;\n  }\n  */\n\n  @media (max-width: 1500px) {\n    :host {\n      flex-direction: column;\n    }\n  }\n\n  @media (min-width: 1501px) {\n    .category-info, .featured-work-slot-container {\n      min-width: 50%;\n\n      /*\n      flex-grow: 1;\n      */\n    }\n  }</style><div class=\"category-info-slot-container\"><slot name=\"info\"></slot></div><div class=\"featured-work-slot-container\"><slot name=\"featured-work\"></slot></div>"

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
    //if (!catInfo)
    //  return this

    //const h = shadowRoot.querySelector('div h1')
    //h.innerText = catInfo.name || ''

    //const p = shadowRoot.querySelector('div p')
    //p.innerText = catInfo.description || ''
  }
}

window.customElements.define('product-category', ProductCategory)
// console.log('running from within component module', document.createElement('product-category'))

export {ProductCategory}
