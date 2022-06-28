import { test, expect, type Page } from '@playwright/test';

test('google.cn', async ({ page }) => {
  await page.goto('http://www.google.cn/');
  await expect(page).toHaveScreenshot();
})

test("amazon.cn", async ({ page }) => {
  await page.goto("https://www.amazon.cn/");
  await expect(page).toHaveScreenshot();
})
