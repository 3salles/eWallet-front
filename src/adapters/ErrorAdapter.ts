/* eslint-disable @typescript-eslint/no-unsafe-member-access */

export const ErrorAdapter = (error: any) => {
  return {
    message: error.response.data.message,
    status: error.response.status,
    statusText: error.response.statusText,
  }
}