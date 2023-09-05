import { ICategories } from "@/types";
import { textUtils } from "@/utils/text.utils";

const selectOptions = [
  'entertainment',
  'housing',
  'food',
  'transportation',
  'shopping',
  'others',
  'income',
  'education',
];

export const categoryOptions = selectOptions.map((option) => ({
  label: textUtils.translateCategories(option as ICategories),
  value: option
}))
