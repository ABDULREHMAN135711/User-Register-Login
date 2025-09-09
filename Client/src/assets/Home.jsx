import React from 'react';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$99.99",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Sneakers",
    price: "$79.99",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80"
  }
];

const Home = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
      padding: "0",
      fontFamily: "sans-serif"
    }}>
      {/* Hero Section */}
      <div style={{
        padding: "2rem",
        textAlign: "center",
        background: "rgba(255,255,255,0.7)",
        marginBottom: "2rem",
        boxShadow: "0 4px 16px rgba(67,198,172,0.15)"
      }}>
        <h1 style={{ fontSize: "2.5rem", color: "#43c6ac", marginBottom: "0.5rem" }}>Shop the Latest Products</h1>
        <p style={{ fontSize: "1.2rem", color: "#333" }}>Discover amazing deals and new arrivals!</p>
        <button style={{
          background: "linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%)",
          color: "#333",
          border: "none",
          borderRadius: "8px",
          padding: "0.75rem 2rem",
          fontWeight: "bold",
          fontSize: "1rem",
          marginTop: "1rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(67,198,172,0.15)"
        }}>
          Shop Now
        </button>
      </div>
      {/* Product Cards */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        padding: "2rem"
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(67,198,172,0.15)",
            width: "250px",
            textAlign: "center",
            padding: "1rem"
          }}>
            <img src={product.img} alt={product.name} style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "12px"
            }} />
            <h2 style={{ fontSize: "1.2rem", color: "#43c6ac", margin: "1rem 0 0.5rem" }}>{product.name}</h2>
            <p style={{ fontWeight: "bold", color: "#333", marginBottom: "1rem" }}>{product.price}</p>
            <button style={{
              background: "linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%)",
              color: "#333",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1.5rem",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;