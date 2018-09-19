import {ProductCategory} from '../components/product-category.js'
import {categoriesData} from '../data.js'

function htmlToElement(html) {
  const template = document.createElement('template')
  html = html.trim() // Never return a text node of whitespace as the result
  template.innerHTML = html
  return template.content.firstChild
}

function main() {
  const categoriesSection = document.querySelector('section.categories')

  categoriesData.forEach((categoryData) => {
    const category = new ProductCategory(categoryData)

    const infoStr =
    `<div slot='info' class='info'>
      <h1 class="title">${ categoryData.name }</h1>
      <p class="description">${ categoryData.description }</p>
    </div>`

    const featWorkStr =
    `<div slot="featured-work" class="feat-work_container">
      <div class="feat-work"></div>
    </div>`

    category.appendChild(htmlToElement(infoStr))
    category.appendChild(htmlToElement(featWorkStr))

    categoriesSection.appendChild(category)
  })
}

window.addEventListener("load", main)
