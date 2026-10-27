import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const pageUrl = pathToFileURL(path.join(__dirname, 'fixtures', 'welcome.html')).href;

test('welcome page shows heading and greets the user on click', async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page).toHaveTitle('QA Practice — Welcome');
  await expect(page.getByRole('heading', { name: 'Welcome, Tester' })).toBeVisible();
  await page.getByRole('button', { name: 'Say hello' }).click();
  await expect(page.getByRole('status')).toHaveText('Hello from Playwright!');
});