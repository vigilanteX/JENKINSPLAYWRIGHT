// @ts-check
import { test, expect } from '@playwright/test';

test('print title', async ({ page }) => {
  await page.goto('https://google.com/');
  console.log(await page.title())

});
test('check title', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle("Google")

});

