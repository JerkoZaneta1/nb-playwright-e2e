import { test, expect, type Page } from '@playwright/test';
const {config} = require ("../config/config.spec")
const {loginExistingUser} = require ("../components/loginExistingUser.ts")
const {logoutUser} = require ("../components/logoutUser.ts")
const {switchLanguageToEn} = require ("../components/switchLanguageToEn.ts")
const {switchLanguageToFi} = require ("../components/switchLanguageToFi.ts")
const {accessibilityCreteUser} = require ("../components/accessibilityCreteUser.ts")


const testsWillBeRunXTimes = 11; //change this to run all tests more then once

test.beforeEach(async ({ page }) => {
});

for (var i = 0; i < testsWillBeRunXTimes; i++) {
  var testNumber = `Test No: ${i + 1}`;

   test.only(`Create new user, ${testNumber}`, async ({ page }) => {
    await accessibilityCreteUser(page)
   })}