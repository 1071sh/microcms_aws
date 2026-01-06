import dayjs from "dayjs";

export const formatDate = (date: string, format: string = "YY.MM.DD"): string => {
  return dayjs(date).format(format);
};
