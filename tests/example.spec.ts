import { test, expect } from '../src/fixtures/base';

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

