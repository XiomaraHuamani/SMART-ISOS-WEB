<script setup>
    import qrCode from '@images/start/qr_image.png'
    import banner from '@images/start/banner_start.png'

</script>
<template>
    <div class="welcome-screen">
      <div class="header">
        <div class="triangle top-left"></div>
        <div class="triangle top-right"></div>
      </div>
      <h1>BIENVENIDO "ABEL..." - SOCIO AUDITOR</h1>
      <div class="content">
        <div class="info">
          <h2>Contestamos tus dudas</h2>
          <p>
            Prototyping is made possible through artboards, and multiple artboards can be
            tiled in one canvas to make relationships.
          </p>
        </div>
        <div class="qr-code">
          <img :src="qrCode" alt="QR Code" />
        </div>
        <div class="update">
          <img :src="banner" alt="Update" />
          <p>TE DAMOS NUEVAS ACTUALIZACIONES</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WelcomeScreen',
  };
  </script>
  
  <style scoped>

  .welcome-screen {
    text-align: center;
    font-family: Arial, sans-serif;
    border: 1px solid #2b2d66;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(133, 133, 133, 0.171); /* Borde sombreado */

  }
  
  .header {
    display: flex;
    justify-content: space-between;
  }
  
  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
  }
  
.top-left {
  margin-left: 2%;
  border-width: 100px 50px 0 50px; /* Cambia el orden de las dimensiones */
  border-color: rgb(51, 154, 185) transparent transparent transparent; /* Ajusta los colores */
}

.top-right {
  margin-right: 2%;
  border-width: 100px 50px 0 50px; /* Cambia el orden de las dimensiones */
  border-color: blue transparent transparent transparent; /* Ajusta los colores */
}
  
  h1 {
    color: teal;
    font-size: 70px;
    font-style: italic; /* Letra itálica */


  }
  
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10%;
  }
  
  .info {
    width: 30%;
    text-align: left; /* Alinea el texto a la izquierda */

  }
  
  .qr-code img {
    width: 200px;
    height: 200px;
    text-align: left; /* Alinea el texto a la izquierda */

  }
  
  .update {
    display: flex;
    flex-direction: column;
    align-items: left;

  }
  
  .update img {
    width: 500px;
  }
  
  .update p {
    margin-top: 10px;
    text-align: left; /* Alinea el texto a la izquierda */

  }
  </style>
  