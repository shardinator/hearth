<template>
    <div class="hearth-home">
      <!-- Logo -->
      <img 
        class="logo" 
        src="/images/Hearth_Logo__Left__Balloons.png" 
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
  
        <!-- Facilities Section -->
        <div class="facilities-section">
          <div class="facilities-content">
            <div class="facilities-text">
              <h2 class="facilities-title">Facilities</h2>
              
              <div class="facility-item">
                <h3 class="facility-name">Meals</h3>
                <p class="facility-description">
                  Low cost healthy meals for breakfast, lunch as well as dinner.
                </p>
              </div>
              
              <div class="facility-item">
                <h3 class="facility-name">Cubbies</h3>
                <p class="facility-description">
                  Small hotel style rest spaces that include:
                </p>
                <ul class="facility-features">
                  <li>Single bed</li>
                  <li>Toilet, shower, sink</li>
                  <li>Storage space</li>
                  <li>Desk</li>
                </ul>
              </div>
              
              <div class="facility-item">
                <h3 class="facility-name">Lounges</h3>
                <p class="facility-description">
                  Spaces to rest and relax, as well as read. A selection of books and 
                  periodicals will be available.
                </p>
              </div>
              
              <div class="facility-item">
                <h3 class="facility-name">CoWorking</h3>
                <p class="facility-description">
                  Desks and spaces for work or study.
                </p>
              </div>
              
              <div class="facility-item">
                <h3 class="facility-name">Storage</h3>
                <p class="facility-description">
                  Additional place to keep extra personal items if they don't fit in 
                  the cubby's storage space.
                </p>
              </div>
            </div>
            
            <div class="facilities-image">
              <img 
                src="/images/Hearth_Space__Smaller.png"
                alt="Hearth Space Interior"
                class="space-image"
              />
            </div>
          </div>
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
  
  /* Main container */
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
    margin: 50px 10% 0 10%;
    width: 40%;
    display: block;
  }
  
  /* Title section */
  .title-section {
    padding: 10px;
  }
  
  .main-title {
    margin: 0 10% 0 10%;
    color: rgba(121, 2, 255, 1);
    font-size: 52px;
    width: 80%;
    font-weight: normal;
  }
  
  /* Content section */
  .content-section {
    padding: 10px;
    margin: 20px 10% 10% 10%;
    font-size: 18px;
    color: rgba(65, 65, 65, 1);
  }
  
  .intro-text,
  .feature-text,
  .impact-text {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  /* Facilities section */
  .facilities-section {
    width: 80%;
    margin: 0 10%;
  }
  
  .facilities-content {
    display: flex;
    align-items: stretch;
    flex-wrap: nowrap;
  }
  
  .facilities-text {
    flex-basis: 73.39%;
    width: 80%;
    padding: 10px;
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
  }
  
  .facilities-image {
    flex-basis: 26.61%;
    width: 20%;
    flex-grow: 1;
  }
  
  .facilities-title {
    color: rgba(2, 102, 255, 1);
    font-size: 36px;
    margin-bottom: 1rem;
  }
  
  .facility-item {
    margin-bottom: 1.5rem;
  }
  
  .facility-name {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: rgba(0, 0, 0, 1);
  }
  
  .facility-description {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
  
  .facility-features {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .facility-features li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.25rem;
  }
  
  .facility-features li::before {
    content: '⏩';
    position: absolute;
    left: 0;
  }
  
  .space-image {
    color: black;
    width: 265px;
    height: 449px;
    max-width: 100%;
    height: auto;
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
    
    .facilities-content {
      flex-direction: column;
    }
    
    .facilities-text,
    .facilities-image {
      width: 100%;
      flex-basis: auto;
    }
    
    .space-image {
      width: 100%;
      height: auto;
    }
  }
  </style>