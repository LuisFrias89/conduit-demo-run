import { test, expect } from '@playwright/test';

test('Reformation shopping flow - add Black Dusk Knit Top to bag', async ({ page }) => {
  // Step 1: Navigate to development.thereformation.com
  // Credentials are automatically applied via playwright.config.ts httpCredentials
  await page.goto('/');
  await expect(page).toHaveURL(/development.thereformation.com/);
  
  // Step 2: Change shipping country to United States
  await page.getByRole('link', { name: 'Change your shipping country' }).click();
  await page.getByLabel('País').selectOption('US');
  await page.getByRole('button', { name: 'Guardar' }).click();
  
  // Step 3: Validate page is loaded
  
  // Step 4: Click on the search bar and search for "dusk" then hit enter
  await page.getByRole('searchbox', { name: 'search' }).click();
  await page.getByRole('searchbox', { name: 'search' }).fill('dusk');
  await page.getByRole('searchbox', { name: 'search' }).press('Enter');
  
  // Step 5: Click on "Black Dusk Knit Top" item
  await page.getByRole('link', { name: /Black Dusk Knit Top/ }).first().click();
  
  // Step 6: Add an XS size to the bag
  await page.getByRole('button', { name: 'Size: XS' }).click();
  await page.getByRole('button', { name: 'add to bag' }).click();
  
  // Step 7: Validate the "In your bag" slider shows up
  await expect(page.getByRole('heading', { name: 'In your bag' })).toBeVisible();
});
