export const catInformation = async () => {
    const { data } = await useFetch('https://catfact.ninja/fact')
    return data
  }