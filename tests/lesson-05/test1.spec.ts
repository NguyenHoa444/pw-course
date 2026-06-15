import { test } from '@playwright/test'
test("Register Page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await test.step("Step 1: Điền thông tin", async () => {
        await page.click("//a[text() ='Bài học 1: Register Page (có đủ các element)']");
        await page.locator("//input[@id = 'username']").fill("Nguyen Hoa");
        await page.locator("//input[@id = 'email']").fill("Nguyenthihoa4497@gmail.com");
        await page.locator("//input[@id = 'female']").check();
        await page.locator("//input[@id = 'traveling']").check();
        await page.locator("//select[@id = 'interests']").selectOption("Music");
        await page.locator("//select[@id = 'country']").selectOption("Australia");
        await page.locator("//input[@id = 'dob']").fill("1997-04-04");
        await page.locator("//input[@id = 'profile']").setInputFiles("tests/lesson-05/01-dom.txt");
        await page.locator("//textarea[@id = 'bio']").fill("Tôi là người mới học automation testing");
        await page.locator("//input[@id = 'rating']").fill("9");
        await page.locator("//input[@id = 'favcolor']").fill("#ff7b00");
        await page.locator("//div[@class = 'tooltip']").hover();
        await page.locator("//input[@id = 'newsletter']").check();
        await page.locator("//span[@class = 'slider round']").click();
        await page.locator("//div[@id = 'starRating']").click({
            position: {
                x: 90,
                y: 10
            }
        });
        await page.locator("//input[@id = 'customDate']").evaluate(element => { element.removeAttribute("readonly") });
        await page.locator("//input[@id = 'customDate']").fill("2026-06-15");
    });
    await test.step("Step 2: Submit", async () => {
        await page.locator("//button[@type = 'submit']").click()
    })
})