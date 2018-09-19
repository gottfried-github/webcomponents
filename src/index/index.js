import {ProductCategory} from '../components/product-category.js'

const categoriesData = [
  {
    name: "Neque porro quisquam",
    description: "Aenean et ante porttitor tellus accumsan pulvinar. Ut dictum condimentum est et pretium. Nullam vel aliquam metus, ac sodales nisl. Vivamus euismod porttitor metus at tincidunt. Duis eget iaculis est, ut facilisis eros. Nunc scelerisque eros eu purus laoreet, vitae tempor turpis porttitor. Donec ornare nunc sed bibendum vestibulum. Duis posuere, velit et ullamcorper scelerisque, mi metus fermentum diam, sed bibendum lorem nibh ut quam."// "we focus on websites for small business: landing page, portfolio website, a catalogue, a store. We craft the site carefully and make sure, that the brand is reflected in tiniest details (that the brand is felt..., that it carries the feel of the brand. )"
  },
  {
    name: "Nunc quis tincidunt fringilla",
    description: "Nunc tincidunt nunc quis tincidunt fringilla. Quisque sodales fermentum est sit amet rhoncus. Phasellus a aliquam erat. Nunc sollicitudin in est non maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum magna eros, facilisis vitae ex sed, efficitur ornare leo. Pellentesque sit amet consectetur lorem. Maecenas est felis, euismod ac ex vitae, ultricies iaculis sem."
  },
  {
    name: "Curabitur scelerisque",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ipsum lectus, tristique quis tortor non, accumsan iaculis elit. In quis feugiat nulla, sit amet rutrum arcu. Nulla condimentum consequat ligula id elementum. Vivamus vel lobortis tellus. Aliquam erat volutpat. Integer elementum vel mauris vitae vestibulum. Nam molestie egestas massa ut ultricies." //
  },
  {
    name: "Maecenas vel commodo leo",
    description: "Proin tincidunt dui ac viverra bibendum. Nam tempus, leo vitae suscipit pulvinar, sapien sapien laoreet mauris, eu accumsan dolor purus ut ipsum. Donec fermentum suscipit varius. Morbi tincidunt sit amet lorem sed blandit. Nulla ut lorem fermentum, eleifend nisl ut, malesuada ipsum. Etiam urna est, malesuada a ultricies id, vehicula et nisl. Ut consectetur nisi ut mauris consequat pulvinar."
  }
]

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
