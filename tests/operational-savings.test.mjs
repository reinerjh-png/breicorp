import assert from "node:assert/strict";
import test from "node:test";
import {
  ADMIN_MINUTES_SAVED_PER_USER_PER_DAY,
  OPERATING_DAYS_PER_MONTH,
  REFERENCE_HOURLY_VALUE,
  calculateOperationalSavings,
} from "../src/lib/operationalSavings.ts";

const scenarios = [
  { salesPerDay: 10, users: 1, transaction: 10.833333333333334, administrative: 2.1666666666666665, total: 13, value: 130 },
  { salesPerDay: 10, users: 5, transaction: 10.833333333333334, administrative: 10.833333333333334, total: 21.666666666666668, value: 216.66666666666669 },
  { salesPerDay: 10, users: 10, transaction: 10.833333333333334, administrative: 21.666666666666668, total: 32.5, value: 325 },
  { salesPerDay: 100, users: 1, transaction: 108.33333333333333, administrative: 2.1666666666666665, total: 110.5, value: 1105 },
  { salesPerDay: 100, users: 5, transaction: 108.33333333333333, administrative: 10.833333333333334, total: 119.16666666666666, value: 1191.6666666666665 },
  { salesPerDay: 100, users: 10, transaction: 108.33333333333333, administrative: 21.666666666666668, total: 130, value: 1300 },
];

const approximatelyEqual = (actual, expected) => {
  assert.ok(Math.abs(actual - expected) < 1e-9, `Expected ${expected}, received ${actual}`);
};

test("calculates the six requested SUNAT web scenarios consistently", () => {
  for (const scenario of scenarios) {
    const result = calculateOperationalSavings({
      salesPerDay: scenario.salesPerDay,
      users: scenario.users,
      currentMethod: "sunat_web",
    });

    assert.equal(result.monthlyTransactions, scenario.salesPerDay * OPERATING_DAYS_PER_MONTH);
    approximatelyEqual(result.transactionHoursSaved, scenario.transaction);
    approximatelyEqual(result.administrativeHoursSaved, scenario.administrative);
    approximatelyEqual(result.totalHoursSaved, scenario.total);
    approximatelyEqual(result.estimatedTimeValue, scenario.value);
    approximatelyEqual(
      result.administrativeHoursSaved,
      (scenario.users * ADMIN_MINUTES_SAVED_PER_USER_PER_DAY * OPERATING_DAYS_PER_MONTH) / 60,
    );
    approximatelyEqual(result.estimatedTimeValue, result.totalHoursSaved * REFERENCE_HOURLY_VALUE);
  }
});

test("users affect only administrative time and never multiply transactional savings", () => {
  for (const salesPerDay of [10, 100]) {
    const oneUser = calculateOperationalSavings({ salesPerDay, users: 1, currentMethod: "sunat_web" });
    const tenUsers = calculateOperationalSavings({ salesPerDay, users: 10, currentMethod: "sunat_web" });

    approximatelyEqual(oneUser.transactionHoursSaved, tenUsers.transactionHoursSaved);
    assert.notEqual(oneUser.totalHoursSaved, tenUsers.totalHoursSaved);
    assert.ok(tenUsers.totalHoursSaved < oneUser.totalHoursSaved * 10);
  }
});
