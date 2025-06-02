import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Image, Button, Spinner, Alert } from "react-bootstrap";
import puppyProducts from "./puppyData"; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prod = puppyProducts.find((p) => p.id === parseInt(id));
    setProduct(prod);
    setLoading(false);
  }, [id]);

  if (loading) return <Spinner animation="border" />;

  if (!product)
    return <Alert variant="danger">Product not found.</Alert>;

  return (
    <Container className="text-center">
      <h2>{product.title}</h2>
      <Image
        src={product.image}
        alt={product.title}
        fluid
        style={{ maxHeight: "400px", marginBottom: "1rem" }}
      />
      <p>{product.description}</p>
      <h4>${product.price.toFixed(2)}</h4>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <Button variant="success" onClick={() => alert("Added to cart!")}>
        Add to Cart
      </Button>{" "}
      <Button
        variant="danger"
        onClick={() => {
          alert("This would delete the product (not implemented here).");
          navigate("/products");
        }}
      >
        Delete Product
      </Button>
    </Container>
  );
};

export default ProductDetail;
// // This ProductDetail component fetches and displays detailed information about a specific product.
// // It uses React Router's useParams to get the product ID from the URL.  
// // The component initializes a product state to hold the product details and a loading state.
// // After the component mounts, it finds the product in the puppyProducts array using the ID.
// // If the product is found, it sets the product state and updates the loading state.
// // While loading, it displays a spinner. If the product is not found, it shows an error alert.
// // Once the product is loaded, it displays the product title, image, description, price, and category.
// // The product image is displayed using the Image component from React Bootstrap, ensuring it is responsive.
//   //     id: 109,
//   //     title: "Fantasy Pup Adventure Tee", 
//   //     price: 33.99,
//   //     category: "fantasy",
//   //     description: "A puppy on a fantasy adventure, ready for epic quests.",
//   //     image: "/images/thrones2.jpg",  
//   //   },
//   // ];