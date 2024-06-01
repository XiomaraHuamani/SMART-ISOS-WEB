import { ref } from 'vue';

// Definir los errores usando ref
const errors = ref({
  Add_ISO_number: undefined,
  Add_ISO_name: undefined,
  Add_Country: undefined,
});

// Definir la interfaz addSGData como un JSDoc para proporcionar tipos
/**
 * @typedef {Object} addSGData
 * @property {string} Add_ISO_number
 * @property {string} Add_ISO_name
 * @property {string} Add_Country
 */

/**
 * Servicio para añadir SG
 * @param {addSGData} options
 * @returns {Promise<Object>} La respuesta del API
 */
export const addSGService = async (options) => {
  try {
    const {
      Add_ISO_number,
      Add_ISO_name,
      Add_Country,
    } = options;

    const response = await $api('register', {
      method: 'POST',
      body: {
        Add_ISO_number,
        Add_ISO_name,
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
  addSGService,
};
