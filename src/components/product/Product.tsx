import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"

import { ProductContext, CartContext } from "../../context/context"
import { CartProductType, ProductType } from "../../types"
import Button from "../button/Button"

import "./product.scss"

type Props = {
	cartProduct: CartProductType
	cartIndex: number
}

const Product: Function = ({ cartProduct, cartIndex }: Props) => {
	const products = useContext(ProductContext)!
	let carts = useContext(CartContext)!

	return products.map((product: ProductType) => {
		if (product.id === cartProduct.productId) {
			return (
				<tr className='product' key={`product_${product.id}`}>
					<td className='product__img'>
						<img alt={product.title} src={product.image} />
					</td>
					<td className='product__title'>{product.title}</td>
					<td className='product__price'>{product.price} </td>
					<td className='product__price'>
						<Button
							onClickHandler={() =>
								carts.handleSubtractQuantity(
									cartIndex,
									product.id,
								)
							}>
							<FontAwesomeIcon icon={faMinus} />
						</Button>

						{cartProduct.quantity}
						<Button
							onClickHandler={() =>
								carts.handleAddQuantity(cartIndex, product.id)
							}>
							<FontAwesomeIcon icon={faPlus} />
						</Button>
					</td>
					<td>
						<Button
							onClickHandler={() =>
								carts.handleRemoveProduct(cartIndex, product.id)
							}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
					</td>
				</tr>
			)
		}
	})
}

export default Product
