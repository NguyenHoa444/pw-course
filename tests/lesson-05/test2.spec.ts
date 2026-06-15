import { test } from '@playwright/test'
test("Product page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await test.step("Step 1: Đi tới Bài học 2", async () => {
        await page.locator("//a[text() = 'Bài học 2: Product page']").click()
    });
    await test.step("Step 2: Thêm 2 sản phẩm 1 vào cart", async () => {
        await page.locator("//button[@data-product-id = '1']").dblclick()
    });
    await test.step("Step 3: Thêm 3 sản phẩm 2 vào cart", async () => {
        for (let i = 0; i < 3; i++) {
            await page.locator("//button[@data-product-id = '2']").click()
        }
    });
    await test.step("Step 4: Thêm 1 sản phẩm 3 vào cart", async () => {
        await page.locator("//button[@data-product-id = '3']").click()
    })
})