import axios from "axios";

const url = "https://general-shop-server-code.vercel.app";

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log("error while calling login API: ", error);
  }
};

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};
