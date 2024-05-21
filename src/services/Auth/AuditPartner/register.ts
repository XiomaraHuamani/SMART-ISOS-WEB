const errors = ref<Record<string, string | undefined>>({
  names: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined,
  phone: undefined,
})

export interface registerData {
  names: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
}

export const registerService = async ( options : registerData ) => {
  try {
    const  {
      names,
      lastName,
      email,
      password,
      phone,
    } = options
    const response = await $api('register', {
      
      method: 'POST',
      body: {
        names,
        lastName,
        email,
        password,
        phone,
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
