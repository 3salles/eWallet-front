import { LocationOriginEnum } from "@/types";

const {VITE_BASE_API_URL_DEV, VITE_BASE_API_URL, VITE_FREECURRENCY_KEY, VITE_CURRENCY_URL} = import.meta.env

const nameFlag: { [k: string]: LocationOriginEnum } = {
  'ewallet-front': LocationOriginEnum.PROD,
  localhost: LocationOriginEnum.DEV,
};

const keys: string[] = Object.keys(nameFlag);
const idx: number = keys.findIndex((item: string) => origin === item);
const ORIGIN_NAME: LocationOriginEnum =
  idx > -1 ? nameFlag[keys[idx]] : LocationOriginEnum.DEV;

const isProdAmbient = LocationOriginEnum.PROD === ORIGIN_NAME

export const BASE_URL_API = isProdAmbient
  ? VITE_BASE_API_URL_DEV
  : VITE_BASE_API_URL;

export const FREECURRENCY_KEY = VITE_FREECURRENCY_KEY
export const CURRENCY_URL = VITE_CURRENCY_URL