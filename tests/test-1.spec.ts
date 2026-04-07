import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://development.thereformation.com/');
  await page.getByRole('link', { name: 'Change your shipping country' }).click();
  await page.getByLabel('País').selectOption('US');
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.getByRole('link', { name: 'dresses' }).click();
  await page.getByRole('link', { name: 'View dresses all dresses' }).click();
  await page.getByRole('searchbox', { name: 'search' }).click();
  await page.getByRole('searchbox', { name: 'search' }).fill('dusk');
  await page.getByRole('searchbox', { name: 'search' }).press('Enter');
  await page.goto('https://development.thereformation.com/search?q=dusk&lang=en_US');
  await page.getByRole('link', { name: 'Product Main Images Dusk Knit Top - Jungle Cat Dusk Knit Top - Jungle Cat Dusk' }).click();
  await page.goto('https://development.thereformation.com/products/dusk-knit-top/1312627JGC.html?dwvar_1312627JGC_color=JGC');
});