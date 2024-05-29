const errors = ref<Record<string, string | undefined>>({
  ISO_numero: undefined,
  ISO_nombre: undefined,
})

export interface ingresosData {
  ISO_numero: string,
  ISO_nombre: string,
}

export const ingresosService = async ( options : ingresosData ) => {
  try {
    const  {
      ISO_numero,
      ISO_nombre,
    } = options
    const response = await $api('register', {
      
      method: 'POST',
      body: {
        ISO_numero,
        ISO_nombre,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
  
    return response;
  } catch (error) {
    console.log('Register Error - ', error)
  }
}
