import React from "react"
import { render, screen, within } from "@testing-library/react"
import { carts } from "../../mockData"

import CartItem from "./CartItem"

const cartData: object = carts[0]

describe("<CartItem />", () => {
	it("should display table header", () => {
		render(<CartItem cart={cartData} />)
		const table = screen.getByTestId("cart-table")
		const [columnNames, ...rows] = within(table).getAllByRole("rowgroup")
		within(columnNames).getByText("Image")
		within(columnNames).getByText("Name")
		within(columnNames).getByText("Price")
		within(columnNames).getByText("Quantity")
		within(columnNames).getByText("Remove")
	})
})