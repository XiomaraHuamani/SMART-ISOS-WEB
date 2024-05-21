const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
})

export const  loginSession = async ( email: string, password: string) => {
  
  try {
    
    const response = await $api('login', {
      
      method: 'POST',
      body: {
        email: email,
        password: password,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
  
    return response;
  } catch (error) {
    console.log('Login Error - ', error)
  }
}
