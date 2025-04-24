export{}
const { expect } = require("@playwright/test");
const {config} = require ("../config/config.spec")

const registerNewUser = async (page) => {
  
  await page.goto(config.globalUrlEn);

  const entryPassword = await page.getByRole("textbox", {name : "magicPhrase"})
    if (entryPassword.isVisible()) {
      await page.getByRole("textbox").click();
      await page.getByRole("textbox").fill("NiiloNikoNiklasNikiJaNikolai");
      await page.getByRole("button", { name: "Submit" }).click();
}

  await page.getByRole('button', { name: 'Allow cookies' }).click();
  await page.getByRole('link', { name: 'Account' }).click();
  await page.getByRole('link', { name: 'Create an account' }).click();
  await page.getByPlaceholder('Your first name').click();
  await page.getByPlaceholder('Your first name').fill('Jerko');
  await page.getByPlaceholder('Your first name').press('Tab');
  await page.getByPlaceholder('Your last name').fill('Zaneta');
  await page.getByPlaceholder('Fill in an email address').click();
  await page.getByPlaceholder('Fill in an email address').fill('detestrr+7@gmail.com');
  await page.getByPlaceholder('Fill in a phone number').click();
  await page.getByPlaceholder('Fill in a phone number').fill('091123456789');
  await page.getByLabel('I allow the processing of my').check();
  await page.getByRole('button', { name: 'Done! Create the account' }).click();
  await page.goto("https://gmail.com");
  await page.getByLabel("Email or phone").click();
  await page.getByLabel("Email or phone").fill("detestrr");
  await page.getByLabel("Email or phone").press("Enter");
  await page.getByLabel("Enter your password").click();
  await page.getByLabel("Enter your password").fill('Qweqwe1"');
  await page.getByLabel("Enter your password").press("Enter");
  await page
    .getByText("Verify your email for newilbau")
    .first()
    .dispatchEvent("click");
  const page1Promise = page.waitForEvent("popup");
  await page.waitForTimeout(2000);
  await page
    .getByRole("link", { name: "Continue" })
    .click({ force: true });
  const page1 = await page1Promise;
  await page.waitForTimeout(3000);
  await expect(page1).toHaveURL(/.*account/);
  return (page1)

};

module.exports = {
    registerNewUser,
};
