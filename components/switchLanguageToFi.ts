export {};
const { expect } = require("@playwright/test");
const { config } = require("../config/config.spec");

const switchLanguageToFi = async (page) => {
  await page.goto(config.globalUrlEn);

  const entryPassword = await page.getByRole("textbox", {
    name: "magicPhrase",
  });
  if (entryPassword.isVisible()) {
    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("NiiloNikoNiklasNikiJaNikolai");
    await page.getByRole("button", { name: "Submit" }).click();
  }

  const cookies = page.getByRole("button", { name: "Allow cookies" });
  if (cookies.isVisible()) {
    await page.getByRole("button", { name: "Allow cookies" }).click();
  }
  await page.getByRole("button", { name: "Open main menu" }).click();
  await page.getByRole("button", { name: "Suomi" }).click();
  await page.getByRole("button", { name: "Sulje", exact: true }).click();
};

module.exports = {
  switchLanguageToFi,
};
