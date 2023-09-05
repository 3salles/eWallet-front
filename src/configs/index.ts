import { LocationOriginEnum } from "@/types";

const {VITE_BASE_API_URL_DEV, VITE_BASE_API_URL} = import.meta.env

const nameFlag: { [k: string]: LocationOriginEnum } = {
  'ewallet-three': LocationOriginEnum.PROD,
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