import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Student = () => {
  return (
    <>
      <Navbar />
      
      <div style={styles.container}>
        <h1 style={styles.title}>🚀 Coming Soon</h1>
        <p style={styles.subtitle}>
          We are working hard to launch this feature for students.
        </p>
        <p style={styles.description}>
          Stay tuned! Something amazing is on the way.
        </p>
        <button style={styles.button}>Notify Me</button>
      </div>

      <Footer />
    </>
  )
}

const styles = {
  container: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "white"
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "10px"
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#764ba2",
    fontWeight: "bold"
  }
}

export default Student
