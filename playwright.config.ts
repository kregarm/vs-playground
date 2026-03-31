import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  use: {
    baseURL: 'https://staging.nepremicnine.btc-city.com/ljubljana',
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1920, height: 900 },
    locale: 'en-US',
    timezoneId: 'UTC',
    colorScheme: 'light',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 200,
    },
  },
  expect: {
    timeout: 15_000,
    toHaveScreenshot: {
      threshold: 0.1,
    },
  },
  reporter: [
    ['line'],
    ['html', { open: 'never' }],
    ['github'],
  ],
});
