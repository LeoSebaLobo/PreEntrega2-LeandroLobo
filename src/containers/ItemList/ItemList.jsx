import React from 'react'
import Item from '../../components/Item/Item'

const ItemList = ({ products }) => {
	return (
		<div>
				{products.map((product) =>
						<Item key={product.id} product={product} />
				)}
		</div>
  )
}

export default ItemList
