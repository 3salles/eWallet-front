import Cookies from "js-cookie";

const getCookies =  (name: string) => Cookies.get(name)
const removeCookies = (name: string) => Cookies.remove(name)

export const cookiesUtils ={
  getCookies,
  removeCookies
}