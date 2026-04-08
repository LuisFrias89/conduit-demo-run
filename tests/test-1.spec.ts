import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/development.thereformation.com/);
  if (await page.getByRole('link', { name: 'Change your shipping country' }).isVisible()) {
  await page.getByRole('link', { name: 'Change your shipping country' }).click();
  await expect(page.getByRole('heading', { name: 'Envía mis artículos aquí:' })).toBeVisible();
  await page.getByLabel('País').selectOption('US');
  await page.getByRole('button', { name: 'Guardar' }).click();
  }
  await expect(page.getByRole('button', { name: 'account' })).toBeVisible();
  await page.getByRole('button', { name: 'account' }).hover();
  await expect(page.locator('#accountFlyout').getByRole('link', { name: 'sign in' }).first()).toBeVisible();
  await expect(page.locator('#accountFlyout').getByRole('link', { name: 'favorites' })).toBeVisible();
  await expect(page.locator('#accountFlyout').getByRole('link', { name: 'order lookup' })).toBeVisible();
  await expect(page.locator('#accountFlyout').getByRole('link', { name: 'stores' })).toBeVisible();
  await expect(page.locator('#accountFlyout').getByRole('link', { name: 'contact us' })).toBeVisible();

  await page.locator('#accountFlyout').getByRole('link', { name: 'sign in' }).click();
  await expect(page.getByRole('dialog', { name: 'Create an account' })).toBeVisible();
});