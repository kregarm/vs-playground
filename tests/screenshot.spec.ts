import { test, expect } from '../fixtures/pages';

test.describe('Screenshoting tests', () => {
    test('Result card', async ({ landingPage }) => {
        const resultCard = landingPage.resultCardByTitleAndPrice('Trgovina', 'Po dogovoru');

        await resultCard.expectVisible();

        await expect(resultCard.card()).toHaveScreenshot('result-card.png', {
            timeout: 15000
        });
    });
})

