const errors = ref<Record<string, string | undefined>>({
  Add_ISO_number: undefined,
  Add_ISO_name: undefined,
  Add_Country: undefined,
})

export interface addSGData {
  Add_ISO_number: string,
  Add_ISO_name: string,
  Add_Country: string,
}

export const addSGService = async ( options : addSGData ) => {
  try {
    const  {
      Add_ISO_number,
      Add_ISO_name,
      Add_Country,
    } = options
    const response = await $api('register', {
      
      method: 'POST',
      body: {
        Add_ISO_number,
        Add_ISO_name,
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
