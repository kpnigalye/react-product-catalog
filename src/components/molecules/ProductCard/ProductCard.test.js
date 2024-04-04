import { render } from "@testing-library/react";
import ProductCard from ".";

describe("ProductCard", () => {
  const product = {
    id: 1,
    title: "Mens Cotton Jacket",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    price: 55.99,
  };

  it("should render component", () => {
    const component = render(<ProductCard product={product} />);
    const id = product.id;

    expect(component.getByTestId(`product-image-${id}`)).toBeInTheDocument();
    expect(component.getByTestId(`product-title-${id}`)).toBeInTheDocument();
    expect(component.getByTestId(`product-price-${id}`)).toBeInTheDocument();
    expect(
      component.getByTestId(`product-view-details-${id}`)
    ).toBeInTheDocument();

    expect(component).toMatchSnapshot();
  });

  it("should display product details", () => {
    const component = render(<ProductCard product={product} />);
    const id = product.id;
    expect(component.getByTestId(`product-title-${id}`)).toHaveTextContent(
      product.title
    );
    expect(component.getByTestId(`product-price-${id}`)).toHaveTextContent(
      product.price
    );
  });
});
