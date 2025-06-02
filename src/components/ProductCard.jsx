import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card className="mb-3" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
// This ProductCard component is designed to display individual product details in a card format.
// It uses React Bootstrap for styling and layout.  
// The component accepts a `product` prop, which contains details like the product's image, title, and price.
// The `Card` component is used to create a visually appealing card layout.
// The `Card.Img` component displays the product image, with inline styles to ensure it fits well within the card.
// The `Card.Body` contains the product title and price, along with a button to view more details.
// The `Button` component is linked to the product detail page using the `useNavigate` hook from `react-router-dom`.    
// When the button is clicked, it navigates to the product detail page using the product's ID.
// The `Card.Text` component is used to display the product price, formatted to two decimal places.
// The component is styled to have a consistent look and feel with other product cards in the application.
// This code is a complete React component for displaying a product card in a Puppy Store application.
// It can be imported and used in the `ProductList` component to render a list of products.
// The component is designed to be reusable and can be easily modified to include additional features or styling as needed.
// The `ProductCard` component can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the application.
// The component is designed to be responsive, adapting to different screen sizes using Bootstrap's responsive utilities.
// This code is a complete React component for displaying a product card in a Puppy Store application.
// It can be imported and used in the `ProductList` component to render a list of products.
// The component is designed to be reusable and can be easily modified to include additional features or styling as needed.
// The `ProductCard` component can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the application.
// The component is designed to be responsive, adapting to different screen sizes using Bootstrap's responsive utilities.
// The `ProductCard` component can be easily extended to include additional information such as product ratings, reviews, or categories.
// The component can also be enhanced with features like hover effects or animations to improve user experience.    