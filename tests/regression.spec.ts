import { test, expect, type Page } from '@playwright/test';
const {config} = require ("../config/config.spec")
const {loginExistingUser} = require ("../components/loginExistingUser.ts")
const {logoutUser} = require ("../components/logoutUser.ts")
const {switchLanguageToEn} = require ("../components/switchLanguageToEn.ts")
const {switchLanguageToFi} = require ("../components/switchLanguageToFi.ts")




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
   })

   test(`Change language to english, ${testNumber}`, async ({ page }) => {
    await switchLanguageToEn(page)
   })

   test.only(`Change language to finnish, ${testNumber}`, async ({ page }) => {
    await switchLanguageToFi(page)
   })}