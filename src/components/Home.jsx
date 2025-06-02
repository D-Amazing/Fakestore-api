import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to PuppyStore 🐶</h1>
      <p className="lead">
        Browse our fantasy-themed, anime, and cartoon puppies on t-shirts!
      </p>
      <Button variant="primary" onClick={() => navigate("/products")}>
        View Products
      </Button>
    </Container>
  );
};

export default Home;

// This Home component serves as the landing page for the PuppyStore application.
// It welcomes users and provides a button to navigate to the product list.
// The `useNavigate` hook from `react-router-dom` is used to programmatically navigate to the products page.
// The component is styled using Bootstrap classes for a clean and responsive design.
// The `Container` component centers the content and adds padding.
// The `Button` component is used to create a clickable button that directs users to the product list.
// The text content is wrapped in a `p` tag with the `lead` class for emphasis.
// This component can be easily extended to include more features, such as promotional banners or featured products.
// The Home component is designed to be simple and user-friendly, providing a clear call to action for users to explore the products.
// The component can be imported and used in the main application file (e.g., App.jsx) to provide a consistent landing page experience.
// The Home component can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the application.
// This code is a complete React component for the home page of a Puppy Store application.
// It can be imported and used in the main application file (e.g., App.jsx) to provide a consistent landing page experience.
// The component is designed to be reusable and can be easily modified to include additional features or content as needed.
// The `Container` component ensures that the content is properly spaced and aligned within the viewport.
// The `Button` component is styled with Bootstrap's primary variant for a visually appealing call to action.
// The `useNavigate` hook allows for programmatic navigation, making it easy to redirect users to the product list.
// The component is designed to be responsive, adapting to different screen sizes using Bootstrap's responsive utilities.
// The Home component can be easily extended to include promotional banners, featured products, or other content.
// The text content is wrapped in a `p` tag with the `lead` class for emphasis, making it stand out.
// This component serves as the landing page for the PuppyStore application, welcoming users and guiding them to explore the products.
// The Home component can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the application.
// This code is a complete React component for the home page of a Puppy Store application.
// It can be imported and used in the main application file (e.g., App.jsx) to provide a consistent landing page experience.
// The component is designed to be reusable and can be easily modified to include additional features or content as needed.
// The `Container` component ensures that the content is properly spaced and aligned within the viewport.
// The `Button` component is styled with Bootstrap's primary variant for a visually appealing call to action.
// The `useNavigate` hook allows for programmatic navigation, making it easy to redirect users to the product list.
// The component is designed to be responsive, adapting to different screen sizes using Bootstrap's responsive utilities.
// The Home component can be easily extended to include promotional banners, featured products, or other content.
// The text content is wrapped in a `p` tag with the `lead` class for emphasis, making it stand out.
// This component serves as the landing page for the PuppyStore application.
// It welcomes users and provides a button to navigate to the product list.
// The Home component can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the application.
// This code is a complete React component for the home page of a Puppy Store application.
// It can be imported and used in the main application file (e.g., App.jsx) to provide a consistent landing page experience.
// The component is designed to be reusable and can be easily modified to include additional features or content as needed.
// The `Container` component ensures that the content is properly spaced and aligned within the viewport.