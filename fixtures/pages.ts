// tests/fixtures/pages.ts
import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landingPage';

type Pages = {
    landingPage: LandingPage;
};

export const test = base.extend<Pages>({
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPage(page);

        await landingPage.open();
        await landingPage.dismissWizzard();

        await use(landingPage);
    },
});

export { expect } from '@playwright/test';