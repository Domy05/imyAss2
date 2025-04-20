export const weatherInformation = async () => {
    const { data } = await useFetch('https://api.open-meteo.com/v1/forecast?latitude=-25.7461&longitude=28.1881&current_weather=true')
    return data
  }