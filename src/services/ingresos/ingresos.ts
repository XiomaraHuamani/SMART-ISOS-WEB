const errors = ref<Record<string, string | undefined>>({
  Add_RUC: undefined,
  Add_Country: undefined,
})

export interface ingresosData {
  Add_RUC: string,
  Add_Country: string,
}

export const ingresosService = async ( options : ingresosData ) => {
  try {
    const  {
      Add_RUC,
      Add_Country,
    } = options
    const response = await $api('register', {
      
      method: 'POST',
      body: {
        Add_RUC,
        Add_Country,
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
