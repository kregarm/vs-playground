import { test, expect } from '../fixtures/pages';

test.describe('Screenshoting tests', () => {
    test('User can filter listings and open details', async ({ landingPage, page }) => {
        const resultCard = landingPage.resultCardByTitleAndPrice('Trgovina', 'Po dogovoru');

        await resultCard.expectVisible();

        await expect(resultCard.card()).toHaveScreenshot('result-card.png');
    });
})

