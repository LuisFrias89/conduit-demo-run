import { test, expect, Browser } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/development.thereformation.com/);
  await page.getByRole('link', { name: 'Change your shipping country' }).click();
  await page.getByLabel('País').selectOption('US');
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.getByRole('searchbox', { name: 'search' }).click();
  await page.getByRole('searchbox', { name: 'search' }).fill('dusk');
  await page.getByRole('searchbox', { name: 'search' }).press('Enter');
  await page.getByRole('link', { name: 'Product Main Images Dusk Knit Top - Black Dusk Knit Top - Black Dusk Knit Top' }).click();
  await expect(page.getByRole('heading', { name: 'Dusk Knit Top' })).toBeVisible();
  await page.locator('.pdp_sizepicker__label-toggle').click();
  await page.getByRole('button', { name: 'Size: XS' }).click();
  await page.getByRole('button', { name: 'add to bag' }).click();
  //await page.waitForLoadState('networkidle');
  await expect(page.locator('.header__minicart-overlay.utility-overlay.toggle--active.set--loaded')).toBeVisible();
  await page.getByRole('button', { name: 'Close shopping cart panel' }).click();
  
});