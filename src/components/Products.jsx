import ProductCard from '../screens/ProductCard/ProductCard'

function Products({ products = [] }) {
	return (
		<div>
			{/* вывод товаров на странице */}
			<div
				data-testid='product-list'
				className='flex flex-wrap justify-start gap-y-5'
			>
				{products.map((product) => (
					<ProductCard
						key={product._id}
						data-testid='product-item'
						data={product}
					/>
				))}
			</div>
		</div>
	)
}

export default Products
