import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test.describe('Test suite', () => {

  test('has title', async ({ page }) => {
    qase.title('has title');
  
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    qase.title('get started link');

    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Fail Installation' })).toBeVisible();
  });

});
