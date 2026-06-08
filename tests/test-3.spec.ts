import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://astroflow.wingflows.com/');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'AstroFlow' })).toBeVisible();
  await page.getByRole('link', { name: 'Request Quote' }).nth(1).click();
  await expect(page.getByRole('heading', { name: 'Request a Quote' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Luis');
  await page.getByRole('textbox', { name: 'First Name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Frias');
  await page.getByRole('textbox', { name: 'Last Name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('alberto-frias@hotmail.com');
  await page.getByRole('textbox', { name: 'Email Address *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Phone Number *' }).fill('7031524895');
  await page.getByRole('textbox', { name: 'Phone Number *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Company Name *' }).fill('TestComp');
  await page.getByRole('textbox', { name: 'Company Name *' }).press('Tab');
  await page.getByLabel('Industry *').selectOption('technology');
});