import ProductCard from '../screens/ProductCard/ProductCard'

function Products({ products = [] }) {
	return (
		<div>
			{/* вывод товаров на главной странице */}
			<div className='flex flex-wrap justify-start gap-y-5'>
				{products.map((product) => (
					<ProductCard
						key={product._id}
						data={product}
						// putProdToCart={
						//     putProdToCart
						// }
					/>
				))}
			</div>
		</div>
	)
}

export default Products
