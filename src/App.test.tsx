import { render } from "@testing-library/react"
import App from "./App"

describe("App", () => {
	it("should render without crashing", () => {
		render(<App />)
	})

	it("should render cart component", () => {
		const { getByTestId } = render(<App />)
		expect(getByTestId(/cart/i)).toBeInTheDocument()
	})
})
