export type IStatusBill = "pending" | "paid" | "expired"

export interface IBill {
  status: IStatusBill;
  date: string;
  description: string;
  amount: number
}

export interface IBillResume {
  pending_bills: number;
  expired_bills: number;
  data: IBill[]
}