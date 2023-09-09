/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { CURRENCY_URL, FREECURRENCY_KEY } from "@/configs"
import { IExchangeFetchParams } from "@/types";
import axios from "axios"

export const getCurrency = async({date_from, date_to}:IExchangeFetchParams) => {
  const params = {
    apikey: FREECURRENCY_KEY,
    currencies: 'USD',
    base_currency: 'BRL',
    date_from,
    date_to
  };

  try {
    // eslint-disable-next-line
    const response = await axios.get(`${CURRENCY_URL}/historical?`, { params })
    console.log('>>> api: ', response)
    return response
  } catch (error) {
    console.error(error);
    throw error; 
  }
}