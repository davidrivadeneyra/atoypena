import AppLink from './AppLink'

function ProductCategoryCard({ category }) {
  return (
    <article className="product-card">
      <div className="product-card-media">
        <img alt={category.name} className="product-card-image" src={category.homeImage} />
      </div>
      <div className="product-card-body">
        <div className="stack-8">
          <h3 className="product-card-title">{category.name}</h3>
          <p className="product-card-copy">{category.description}</p>
        </div>
        <AppLink className="btn-primary btn-small" to={`/productos/${category.slug}`}>
          Ver más
        </AppLink>
      </div>
    </article>
  )
}

export default ProductCategoryCard
