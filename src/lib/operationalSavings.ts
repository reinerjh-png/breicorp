export const OPERATING_DAYS_PER_MONTH = 26;
export const ADMIN_MINUTES_SAVED_PER_USER_PER_DAY = 5;
export const REFERENCE_HOURLY_VALUE = 10;

export const MINUTES_SAVED_PER_TRANSACTION = {
  sunat_web: 2.5,
  manual: 4,
  old_software: 1.5,
} as const;

export type CurrentMethod = keyof typeof MINUTES_SAVED_PER_TRANSACTION;

export function calculateOperationalSavings({
  salesPerDay,
  users,
  currentMethod,
}: {
  salesPerDay: number;
  users: number;
  currentMethod: CurrentMethod;
}) {
  const minutesSavedPerTransaction = MINUTES_SAVED_PER_TRANSACTION[currentMethod];
  const monthlyTransactions = salesPerDay * OPERATING_DAYS_PER_MONTH;
  const transactionHoursSaved =
    (monthlyTransactions * minutesSavedPerTransaction) / 60;
  const administrativeHoursSaved =
    (users * ADMIN_MINUTES_SAVED_PER_USER_PER_DAY * OPERATING_DAYS_PER_MONTH) / 60;
  const totalHoursSaved = transactionHoursSaved + administrativeHoursSaved;
  const estimatedTimeValue = totalHoursSaved * REFERENCE_HOURLY_VALUE;

  return {
    minutesSavedPerTransaction,
    monthlyTransactions,
    transactionHoursSaved,
    administrativeHoursSaved,
    totalHoursSaved,
    estimatedTimeValue,
  };
}
