import { test, expect } from '../fixtures/pages';
import { ListingPage } from '../pages/listingPage';

test('Filter to no results and reset filter', async ({ landingPage, page }) => {
    await landingPage.filteringRow.filterButton('Namembnost').click()
    await landingPage.filteringRow.menuItem('Pisarna').click()

    await landingPage.filteringRow.filterButton('Stavba').click()
    await landingPage.filteringRow.menuItem('Dvorana A').click()

    await expect(page.getByText('Noben prostor ne ustreza izbranim filtrom.')).toBeVisible();

    await landingPage.filteringRow.resetSelectionItem().click()

    await expect(page.getByText('Noben prostor ne ustreza izbranim filtrom.')).toBeHidden();
});

test('User can successfully submit a form', async ({ landingPage, page }) => {
    const resultCard = landingPage.resultCardByTitleAndPrice('Trgovina', 'Po dogovoru');
    const listingPage = new ListingPage(page);

    await resultCard.clickOnCard();

    await listingPage.waitToLoad();

    await listingPage.fillContactForm({
        firstName: 'Janja',
        lastName: 'Novak',
        phone: '031000000',
        email: 'janja.novak@test.com',
        companySearch: 'medic',
        companyOption: 'MEDIC-INA EMERŠIČ d.o.o.',
        message: 'Zanimam se za najem prostora.',
        consent: true,
    });

    await listingPage.submitForm();
    await listingPage.expectSuccessMessage();
});
