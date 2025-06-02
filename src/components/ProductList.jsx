// ProductListing.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        // 🐶 Replace each product image with a puppy image!
        const puppyProducts = response.data.map((product, index) => ({
          ...product,
          image: `https://place-puppy.com/300x300?image=${index + 1}`
        }));
        setProducts(puppyProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5"><Spinner animation="border" /> Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Puppy Store Products 🐾</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductListing;

// This ProductList component fetches and displays a list of puppy-themed products.
// It uses React's useState and useEffect hooks to manage state and simulate loading data.
// The component initializes an empty products array and a loading state.
// After a simulated delay of 0.7 seconds, it sets the products state with data from puppyProducts.
// The component renders a loading spinner while the data is being fetched.
// If no products are available, it displays an informational alert.
//   {
//     id: 110, 
//     id: 108,
//     title: "Thrones Pup of the North",
//     price: 34.99,
//     category: "fantasy", 
//     description: "A puppy from the snowy north wearing armor fit for a throne.",
//     image: "/images/thrones1.jpg",
//   },
//   {