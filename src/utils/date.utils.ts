import dayjs from "dayjs";
import brLanguage from "dayjs/locale/pt-br";

const getFullDate = (value: string) => {
  if (value) {
    return dayjs(value)
    .locale(brLanguage)
    .format("DD [de] MMM [de] YYYY")
  }

  return dayjs()
  .locale(brLanguage)
  .format("DD [de] MMM [de] YYYY")
}

const getDayAndMonth = (value: string) => {
  return dayjs(value).locale(brLanguage).format('DD MMM')
}

const formatFormDate = (date: string) =>
    new Date(date).toISOString().split("T")[0];

export const DateUtils = {
  getFullDate,
  getDayAndMonth,
  formatFormDate
}