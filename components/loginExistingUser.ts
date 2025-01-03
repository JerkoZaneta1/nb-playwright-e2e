export{}
const { expect } = require("@playwright/test");
const {config} = require ("../config/config.spec")

const loginExistingUser = async (page) => {

  await page.goto(config.globalUrlEn);

  const entryPassword = await page.getByRole("textbox", {name : "magicPhrase"})
    if (entryPassword.isVisible()) {
      await page.getByRole("textbox").click();
      await page.getByRole("textbox").fill("NiiloNikoNiklasNikiJaNikolai");
      await page.getByRole("button", { name: "Submit" }).click();
}

  await page.getByRole("button", { name: "Allow cookies" }).click();
  await page.getByRole("link", { name: "Account" }).click();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByPlaceholder("Fill in an email address").click();
  await page
    .getByPlaceholder("Fill in an email address")
    .fill("detestrr@gmail.com");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.waitForTimeout(1000);
  await page.goto("https://gmail.com");
  await page.getByLabel("Email or phone").click();
  await page.getByLabel("Email or phone").fill("detestrr");
  await page.getByLabel("Email or phone").press("Enter");
  await page.getByLabel("Enter your password").click();
  await page.getByLabel("Enter your password").fill('qweqweqwe1"');
  await page.getByLabel("Enter your password").press("Enter");
  await page
    .getByText("Sign in to newilbau-dev requested at")
    .first()
    .dispatchEvent("click");
  const page1Promise = page.waitForEvent("popup");
  await page.waitForTimeout(2000);
  await page
    .getByRole("link", { name: "Sign in to newilbau-dev" })
    .click({ force: true });
  const page1 = await page1Promise;
  await page.waitForTimeout(3000);
  await expect(page1).toHaveURL(/.*account/);
  return (page1)
};

module.exports = {
  loginExistingUser,
};
