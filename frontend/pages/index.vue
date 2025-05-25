<template>
    <div class="hearth-home">
      <!-- Logo -->
      <img 
        class="logo" 
        src="/images/hearth_logo__left__balloons.png" 
        alt="Hearth Logo"
      />
      
      <!-- Title Section -->
      <div class="title-section">
        <h1 class="main-title">Space to Rest</h1>
      </div>
      
      <!-- Content Section -->
      <div class="content-section">
        <p class="intro-text">
          Hearth is a for-profit venture that builds community spaces dedicated to 
          providing fresh meals and comfortable rest spaces.
        </p>
        
        <p class="feature-text">
          A key feature is that if residents don't have money to pay the fees they 
          can use the Lendy Pay system to pay for as many meals and days of 
          accommodation as they need/want.
        </p>
        
        <p class="impact-text">
          This means that anyone can afford to stay at a Hearth space and this has 
          a meaningful impact on addressing housing shortages and hunger.
        </p>
        
        <!-- Additional content blocks -->
        <div class="builder-blocks">
          <div class="builder-block"></div>
          <div class="builder-block"></div>
          <div class="builder-block"></div>
          <div class="builder-block"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HearthHome',
    data() {
      return {
        // Add any reactive data here if needed
      }
    },
    methods: {
      // Add any methods here if needed
    }
  }
  </script>
  
  <style scoped>
  /* Global styles */
  * {
    box-sizing: border-box;
  }
  
  /* CSS Variables */
  :root {
    --gjs-t-color-primary: #cf549e;
    --gjs-t-color-secondary: #b9227d;
    --gjs-t-color-accent: #ffb347;
    --gjs-t-color-success: #28a745;
    --gjs-t-color-warning: #ffc107;
    --gjs-t-color-error: #dc3545;
  }
  
  .hearth-home {
    background-color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.75rem;
    font-size: 1rem;
    margin: 0;
    min-height: 100vh;
  }
  
  /* Logo styles */
  .logo {
    color: black;
    margin-top: 50px;
    margin-right: 10%;
    margin-bottom: 20px;
    margin-left: 10%;
    width: 40%;
    display: block;
  }
  
  /* Title section */
  .title-section {
    padding: 10px;
  }
  
  .main-title {
    margin-left: 10%;
    margin-right: 10%;
    color: rgba(121, 2, 255, 1);
    font-size: 52px;
    width: 80%;
    margin-bottom: 0px;
    font-weight: normal;
  }
  
  /* Content section */
  .content-section {
    padding: 10px;
    margin-top: 50px;
    margin-right: 10%;
    margin-bottom: 10%;
    margin-left: 10%;
    font-size: 18px;
    color: rgba(65, 65, 65, 1);
  }
  
  .intro-text,
  .feature-text,
  .impact-text {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  /* Builder blocks */
  .builder-blocks {
    margin-top: 20px;
    margin-right: 10%;
    margin-bottom: 0px;
    margin-left: 10%;
  }
  
  .builder-block {
    margin-bottom: 10px;
    min-height: 20px;
  }
  
  /* Theme classes for potential future use */
  .gjs-t-h1 {
    color: var(--gjs-t-color-secondary);
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  
  .gjs-t-h2 {
    color: #601843;
    font-size: 1.2rem;
    line-height: 1.75rem;
  }
  
  .gjs-t-button {
    background-color: var(--gjs-t-color-primary);
    color: white;
    border-radius: 0.3rem;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .gjs-t-link {
    color: var(--gjs-t-color-primary);
    text-decoration: underline;
  }
  
  .gjs-t-border {
    border-radius: 0.3rem;
    border-color: #e0e0e0;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .logo {
      width: 60%;
      margin-left: 5%;
      margin-right: 5%;
    }
    
    .main-title {
      font-size: 36px;
      margin-left: 5%;
      margin-right: 5%;
      width: 90%;
    }
    
    .content-section {
      margin-left: 5%;
      margin-right: 5%;
      font-size: 16px;
    }
  }
  </style>