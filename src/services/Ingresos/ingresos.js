import { ref } from 'vue';

// Definir los errores usando ref
const errors = ref({
  Add_RUC: undefined,
  Add_Country: undefined,
});

// Definir la interfaz addSGData como un JSDoc para proporcionar tipos
/**
 * @typedef {Object} ingresosData
 * @property {string} Add_RUC
 * @property {string} Add_Country
 */

/**
 * Servicio para añadir SG
 * @param {ingresosData} options
 * @returns {Promise<Object>} La respuesta del API
 */
export const ingresosService = async (options) => {
  try {
    const {
      Add_RUC,
      Add_Country,
    } = options;

    const response = await $api('register', {
      method: 'POST',
      body: {
        Add_RUC,
        Add_Country,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors;
      },
    });

    return response;
  } catch (error) {
    console.log('Register Error - ', error);
  }
};

export default {
  errors,
  ingresosService,
};
