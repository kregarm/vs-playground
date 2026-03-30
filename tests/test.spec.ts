import { test, expect } from '../fixtures/pages';

test.describe('Filtering scnnarios', () => {
    test('Filter to no results and reset filter', async ({ landingPage, page }) => {
        await landingPage.filteringRow.filterButton('Namembnost').click()
        await landingPage.filteringRow.menuItem('Pisarna').click()

        await landingPage.filteringRow.filterButton('Stavba').click()
        await landingPage.filteringRow.menuItem('Dvorana A').click()

        await expect(page.getByText('Noben prostor ne ustreza izbranim filtrom.')).toBeVisible();

        await landingPage.filteringRow.resetSelectionItem().click()

        await expect(page.getByText('Noben prostor ne ustreza izbranim filtrom.')).toBeHidden();
    });

    test('User can filter listings and open details', async ({ landingPage, page }) => {
        const resultCard = landingPage.resultCardByTitleAndPrice('Trgovina', 'Po dogovoru');

        await resultCard.clickOnCard();
        // todo complete scenario here

    });

    test('This should fail so I can validate CI', async ({ landingPage, page }) => {
        const resultCard = landingPage.resultCardByTitleAndPrice('LOL', 'Forget about it');
        await resultCard.clickOnCard();
    });
})

