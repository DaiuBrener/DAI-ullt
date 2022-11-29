import axios from 'axios';

const ApiKey = "71beb4add81639abdd7f2131c29eb5a9";
const axiosClientLogin = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
  
})

export const Clima = async (lat, lon) => {  
  try {
      const response = await axiosClientLogin.get(`?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
      return response.data; //entro
    } catch (exc) {
      throw error;
    }
  }