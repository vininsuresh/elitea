import { test, expect } from '@playwright/test';

test('Navigate to Client Work page from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.screenshot({
    path: 'screenshots/home-page.png',
    fullPage: true
  });

  const servicesMenu = page.getByRole('link', {
    name: /services/i
  });
  await expect(servicesMenu).toBeVisible();
  await servicesMenu.click();

  await page.screenshot({
    path: 'screenshots/services-page.png',
    fullPage: true
  });

  const clientWorkLink = page.getByRole('link', {
    name: /explore our client work/i
  });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await page.screenshot({
    path: 'screenshots/client-work-page.png',
    fullPage: true
  });

  await expect(
    page.getByText('Client Work', {
      exact: false
    })
  ).toBeVisible();
});
