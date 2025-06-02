import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">PuppyStore 🐾</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
// This code defines a `NavigationBar` component for a Puppy Store application using React and React Bootstrap.
// It imports necessary components from React Bootstrap and React Router DOM to create a responsive navigation bar. 
// This component creates a navigation bar using React Bootstrap.
// It includes links to the home page and product list, and is styled with a dark theme.
// The navigation bar is responsive and collapses on smaller screens.
// The `Link` component from `react-router-dom` is used to enable client-side navigation without full page reloads.
// The `Container` component from React Bootstrap is used to center the content and provide padding.
// The `Navbar` component is used to create the navigation bar, with `Navbar.Brand` for the brand name and `Nav` for the navigation links.
// The `Navbar.Toggle` and `Navbar.Collapse` components are used to handle the responsive behavior of the navigation bar.
// The `ms-auto` class is used to align the navigation links to the right side of the navbar.
// This code is a complete React component for a navigation bar in a Puppy Store application.
// It can be imported and used in the main application file (e.g., App.jsx) to provide navigation functionality across the app.
// The component is designed to be reusable and can be easily modified to include additional links or features as needed.
// The `Navbar` component is styled with a dark background and light text using Bootstrap's `bg-dark` and `variant="dark"` props.
// The `Container` component ensures that the navbar content is properly spaced and aligned within the viewport.    
// The `Nav.Link` components are used to create clickable links that navigate to different routes in the application.
// The `as={Link}` prop allows the `Nav.Link` components to behave like React Router links, enabling client-side navigation.
// This component can be easily extended to include dropdown menus, icons, or other navigation elements as needed.
// The `NavigationBar` component can be imported into the main application file (e.g., App.jsx) and used to provide a consistent navigation experience across the app.
// The component is designed to be responsive, adapting to different screen sizes using Bootstrap's responsive utilities.
// The `Navbar` component is a key part of the user interface, providing easy access to different sections of the Puppy Store application.
// The `NavigationBar` component can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the application.
// This code is a complete React component for a navigation bar in a Puppy Store application.
// It can be imported and used in the main application file (e.g., App.jsx) to provide navigation functionality across the app.
// The component is designed to be reusable and can be easily modified to include additional links or features as needed.
// The `Navbar` component is styled with a dark background and light text using Bootstrap's `bg-dark` and `variant="dark"` props.
// The `Container` component ensures that the navbar content is properly spaced and aligned within the viewport.
// The `Nav.Link` components are used to create clickable links that navigate to different routes in the application.
// The `as={Link}` prop allows the `Nav.Link` components to behave like React Router links, enabling client-side navigation.
// This component can be easily extended to include dropdown menus, icons, or other navigation elements as needed.
// The `NavigationBar` component can be imported into the main application file (e.g., App.jsx) and used to provide a consistent navigation experience across the app.
// The component is designed to be responsive, adapting to different screen sizes using Bootstrap's responsive utilities.
// The `Navbar` component is a key part of the user interface, providing easy access to different sections of the Puppy Store application.  
// The `NavigationBar` component can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the application.
// This code is a complete React component for a navigation bar in a Puppy Store application.