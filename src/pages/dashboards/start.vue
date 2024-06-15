/* stylelint-disable order/properties-order */
/* stylelint-disable order/properties-order */
/* stylelint-disable order/properties-order */
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
  /* stylelint-disable-next-line order/properties-order */
  font-family: Arial, sans-serif;
  /* stylelint-disable-next-line order/properties-order */
  border: 1px solid #2b2d66;
  border-radius: 10px;
  /* stylelint-disable-next-line alpha-value-notation */
  box-shadow: 0 4px 8px rgba(133, 133, 133, 0.171); /* Borde sombreado */
}

.header {
  display: flex;
  justify-content: space-between;
}

.triangle {
  /* stylelint-disable-next-line liberty/use-logical-spec */
  width: 0;
  /* stylelint-disable-next-line liberty/use-logical-spec */
  height: 0;
  border-style: solid;
}

.top-left {
  /* stylelint-disable-next-line liberty/use-logical-spec */
  margin-left: 2%;
  /* stylelint-disable-next-line order/properties-order */
  border-width: 50px; /* Corrige el orden de las dimensiones */
  border-color: transparent transparent rgb(51, 154, 185) transparent; /* Ajusta los colores */
}

.top-right {
  /* stylelint-disable-next-line liberty/use-logical-spec */
  margin-right: 2%;
  /* stylelint-disable-next-line order/properties-order */
  border-width: 50px; /* Corrige el orden de las dimensiones */
  /* stylelint-disable-next-line shorthand-property-no-redundant-values */
  border-color: transparent transparent blue transparent; /* Ajusta los colores */
}

h1 {
  color: teal;
  font-size: 70px;
  font-style: italic; /* Letra itálica */
}

.content {
  display: flex;
  justify-content: space-around;
  /* stylelint-disable-next-line order/properties-order */
  align-items: center;
  /* stylelint-disable-next-line liberty/use-logical-spec */
  margin-top: 10%;
}

.info {
  /* stylelint-disable-next-line liberty/use-logical-spec */
  width: 30%;
  /* stylelint-disable-next-line liberty/use-logical-spec */
  text-align: left; /* Alinea el texto a la izquierda */
}

.qr-code img {
  /* stylelint-disable-next-line liberty/use-logical-spec */
  width: 200px;
  /* stylelint-disable-next-line liberty/use-logical-spec */
  height: 200px;
}

.update {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Cambia "left" a "flex-start" */
}

.update img {
  /* stylelint-disable-next-line liberty/use-logical-spec */
  width: 500px;
}

.update p {
  /* stylelint-disable-next-line liberty/use-logical-spec */
  margin-top: 10px;
  /* stylelint-disable-next-line liberty/use-logical-spec */
  text-align: left; /* Alinea el texto a la izquierda */
}

</style>
