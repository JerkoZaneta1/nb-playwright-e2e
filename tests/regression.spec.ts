import { test, expect, type Page } from '@playwright/test';
const {config} = require ("../config/config.spec")
const {loginExistingUser} = require ("../components/loginExistingUser.ts")
const {logoutUser} = require ("../components/logoutUser.ts")


const testsWillBeRunXTimes = 1; //change this to run all tests more then once

test.beforeEach(async ({ page }) => {
});

for (var i = 0; i < testsWillBeRunXTimes; i++) {
  var testNumber = `Test No: ${i + 1}`;

  test(`Login to site, ${testNumber}`, async ({ page }) => {
   await loginExistingUser(page)
  })

  test(`Logout user, ${testNumber}`, async ({ page }) => {
    const page1 = await loginExistingUser(page)
    await logoutUser(page1)
   })}