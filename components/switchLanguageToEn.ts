export{}
const { expect } = require("@playwright/test");
const {config} = require ("../config/config.spec")

const switchLanguageToEn = async (page) => {
  
    await page.goto(config.globalUrlFi);

    const entryPassword = await page.getByRole("textbox", {name : "magicPhrase"})
    if (entryPassword.isVisible()) {
      await page.getByRole("textbox").click();
      await page.getByRole("textbox").fill("NiiloNikoNiklasNikiJaNikolai");
      await page.getByRole("button", { name: "Submit" }).click();
}

    const cookies = page.getByRole("button", { name: "Hyväksy evästeet" })
    if (cookies.isVisible()) {
        await page.getByRole("button", { name: "Hyväksy evästeet" }).click();
    }

    await page.getByRole('button', { name: 'Avaa päävalikko' }).click();
    await page.getByRole('button', { name: 'English' }).click();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await expect(page).toHaveURL(/.*en/);

};

module.exports = {
    switchLanguageToEn,
};
