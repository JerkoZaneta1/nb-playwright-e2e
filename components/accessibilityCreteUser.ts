export {};
const { expect } = require("@playwright/test");
const { config } = require("../config/config.spec");

const accessibilityCreteUser = async (page) => {
    const uuid = () => {
        const head = Date.now().toString();
        const tail = Math.random().toString().substr(2);
        return head + tail;
    };
    let id = uuid();
    let userName = `jerko.zaneta+${id}@softwaresauna.com`;
    await page.goto(config.globalUrlEn);

    const entryPassword = await page.getByRole("textbox", {
        name: "magicPhrase",
    });
    if (entryPassword.isVisible()) {
        await page.getByRole("textbox").click();
        await page.getByRole("textbox").fill("NiiloNikoNiklasNikiJaNikolai");
        await page.getByRole("button", { name: "Submit" }).click();
    }
    await page.waitForTimeout(1000);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
    await page.keyboard.type("Jerko");
    await page.keyboard.press("Tab");
    await page.keyboard.type("Zaneta");
    await page.keyboard.press("Tab");
    await page.keyboard.type(userName);
    console.log(userName);
    await page.keyboard.press("Tab");
    await page.keyboard.type("1234567890");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(13000);

    const verification = await page.getByRole("heading", {
        name: /^(Verification|Vahvistus)$/,
    });
    await expect(verification).toBeVisible();
};
module.exports = {
    accessibilityCreteUser,
};
