import { test, expect, Browser } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/development.thereformation.com/);

  if (await page.getByRole('link', { name: 'Change your shipping country' }).isVisible()) {
  await page.getByRole('link', { name: 'Change your shipping country' }).click();
  await expect(page.getByRole('heading', { name: 'Envía mis artículos aquí:' })).toBeVisible();
  await page.getByLabel('País').selectOption('US');
  await page.getByRole('button', { name: 'Guardar' }).click();
  }
  await page.getByRole('searchbox', { name: 'search' }).click();
  await page.getByRole('searchbox', { name: 'search' }).fill('dusk');
  await page.getByRole('searchbox', { name: 'search' }).press('Enter');
  await page.getByRole('link', { name: 'Product Main Images Dusk Knit Top - Black Dusk Knit Top - Black Dusk Knit Top' }).click();
  await expect(page.getByRole('heading', { name: 'Dusk Knit Top' })).toBeVisible({ timeout: 8000});
  await page.locator('.pdp_sizepicker__label-toggle').click();
  await expect(page.getByRole('heading', { name: 'Dusk Knit Top' })).toBeVisible();
  await page.getByRole('button', { name: 'Size: XS' }).click({ timeout: 8000});
  await page.getByRole('button', { name: 'add to bag' }).click({ timeout: 8000});
  await expect(page.getByRole('heading', { name: 'In your bag' })).toBeVisible({ timeout: 10000});
  //await expect(page.locator('div').filter({ hasText: 'In your bag view bag Add some' }).nth(2)).toBeVisible();
  await page.getByRole('button', { name: 'Close shopping cart panel' }).click();
  
});