import {ProductCategory} from '../components/product-category.js'

const categoriesData = [
  {
    name: "web design",
    description: "we specialize in websites for artists, craftsmen or any small business that appreciates (understands) ([the harmony of brand, product and identity], [good (excellent) aestethics and (straight to the point) design]). We can create all sorts of functionality - from simple landing page to a blog, a store, a catalogue. With us, the subtleties (all the (subtle) shades) of your (occupation) will be (instilled) tranferred to a prospects' (mind, consciousness, cognition..). Come see what we've done in the past."// "we focus on websites for small business: landing page, portfolio website, a catalogue, a store. We craft the site carefully and make sure, that the brand is reflected in tiniest details (that the brand is felt..., that it carries the feel of the brand. )"
  },
  {
    name: "photography editing",
    description: "we have over a decade of professional experience behind, and we consider photography an artform. We do album art design, retouch, and also technical neccessities like (mixing, ...)"
  },
  {
    name: "polygraphy",
    description: "we have a decade of experience of working in printing press, label and package design, ..." //
  },
  {
    name: "3d graphics",
    description: "we have over a decade of experience in ..."
  }
]

function main() {
  const categoriesSection = document.querySelector('section.categories')

  categoriesData.forEach((categoryData) => {
    const category = new ProductCategory(categoryData)
    const featuredWorkPlaceholder = document.createElement('div')
    featuredWorkPlaceholder.className = 'feat-work-placeholder'
    featuredWorkPlaceholder.setAttribute('slot', 'featured-work')
    category.appendChild(featuredWorkPlaceholder)
    
    categoriesSection.appendChild(category)
  })
}

window.addEventListener("load", main)
