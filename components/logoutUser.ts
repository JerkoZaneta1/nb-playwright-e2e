export{}
const { expect } = require("@playwright/test");
const {config} = require ("../config/config.spec")

const logoutUser = async (page) => {
  
  await page.goto(config.globalUrlEn);
  await page.getByRole("link", { name: "Account" }).click();
  await page.getByRole("Button", { name: "Log out" }).click();
  await expect(page.getByText('Log in')).toContainText('Log in');

};

module.exports = {
  logoutUser,
};
