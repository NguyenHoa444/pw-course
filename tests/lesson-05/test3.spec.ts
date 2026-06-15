import { test } from '@playwright/test'
test('Todo page', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await test.step("Step 1: Đi tới Bài học 3", async () => {
        await page.click("//a[text() = 'Bài học 3: Todo page']")
    });
    await test.step("Step 2: Add 100 tasks", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id = 'new-task']").fill(`Todo ${i}`);
            await page.click("//button[@id = 'add-task']")
        }
    });
    await test.step("Step 3: Xóa các task có Id là số lẻ", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 99; i += 2) {
            await page.locator(`//button[@id = 'todo-${i}-delete']`).click()
        }
    })
})