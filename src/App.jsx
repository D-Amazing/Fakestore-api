import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
// This code sets up the main application component for a Puppy Store using React Router.
// It includes a navigation bar and routes for the home page, product list, and product detail pages.
// The `NavigationBar` component provides links to navigate between different sections of the app.
// The `Container` component from React Bootstrap is used to add spacing around the content.
// The `Routes` component defines the different routes in the application, mapping URLs to specific components.
// The `Route` components specify which component to render for each path.
// The `Home` component serves as the landing page, welcoming users to the Puppy Store.
// The `ProductList` component displays a list of products, while the `ProductDetail` component shows details for a specific product based on its ID.
// This structure allows for a clean and organized way to manage navigation and content in the application.
// The `BrowserRouter` component wraps the entire application to enable client-side routing.
// The `useParams` hook is used in the `ProductDetail` component to access the product ID from the URL.
// The application is designed to be responsive and user-friendly, providing a seamless experience for browsing and viewing products.
// The `Container` component ensures that the content is properly spaced and aligned within the viewport.
// The `mt-4` class adds a top margin to the container, providing visual separation from the navigation bar.
// This code is a complete React application setup for a Puppy Store, including routing and navigation.
// It can be easily extended with additional features such as product filtering, search functionality, or user authentication.
// The application can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the Puppy Store. 
// The `App` component serves as the main entry point for the Puppy Store application, bringing together all components and routing logic.
// This code is a complete React application setup for a Puppy Store, including routing and navigation.
// It can be easily extended with additional features such as product filtering, search functionality, or user authentication.
// The application can be styled further using custom CSS or additional Bootstrap classes to match the overall design of the Puppy Store.
// The `App` component serves as the main entry point for the Puppy Store application, bringing together all components and routing logic.
// The `App` component can be imported and rendered in the main index file (e.g., index.js) to start the application.

