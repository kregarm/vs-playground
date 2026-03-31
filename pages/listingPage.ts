import { expect, Locator, Page } from '@playwright/test';

export class ListingPage {
    readonly page: Page;

    // Main content
    readonly pageLabel: Locator;
    readonly title: Locator;
    readonly description: Locator;
    readonly price: Locator;

    // Optional tags / chips
    readonly highlights: Locator;

    // Form
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly phoneInput: Locator;
    readonly emailInput: Locator;
    readonly companyInput: Locator;
    readonly companyDropdown: Locator;
    readonly companyOptions: Locator;
    readonly noCompanyInSloveniaCheckbox: Locator;
    readonly messageTextarea: Locator;
    readonly consentCheckbox: Locator;
    readonly submitButton: Locator;

    // Success message
    readonly successAlert: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // The page has:
        // h1 => "Oglas"
        // h2 => actual listing title
        // description => div with span text under the h2
        this.pageLabel = page.locator('h1');
        this.title = page.locator('h2').first();
        this.description = page.locator('div.mb-4.text-gray-600.text-base span').first();
        this.price = page.locator('div:has(> .font-bold:text("Cena:")) span.text-4xl').first();

        this.highlights = page.locator('div.flex.flex-wrap.gap-1\\.5.mb-6 span');

        // Form fields by name / id are much more stable than classes
        this.firstNameInput = page.locator('input[name="firstname"]');
        this.lastNameInput = page.locator('input[name="lastname"]');
        this.phoneInput = page.locator('input[name="phone"]');
        this.emailInput = page.locator('input[name="email"]');
        this.companyInput = page.locator('input[name="company"]');
        this.companyDropdown = page.locator('ul.absolute.z-50');
        this.companyOptions = this.companyDropdown.locator('li');
        this.noCompanyInSloveniaCheckbox = page.locator('#noCompanyInSlovenia');
        this.messageTextarea = page.locator('textarea[name="comment"]');
        this.consentCheckbox = page.locator('#consent');
        this.submitButton = page.getByRole('button', { name: 'Oddaj povpraševanje' });

        this.successAlert = page.locator('div[class*="AlertBox-module__"][class*="success"]');
        this.successMessage = this.successAlert.locator('span');
    }

    async getTitle(): Promise<string> {
        return (await this.title.textContent())?.trim() ?? '';
    }

    async getDescription(): Promise<string> {
        return (await this.description.textContent())?.trim() ?? '';
    }

    async getPrice(): Promise<string> {
        return (await this.price.textContent())?.trim() ?? '';
    }

    async getHighlights(): Promise<string[]> {
        return (await this.highlights.allTextContents()).map(text => text.trim());
    }

    async selectCompany(companySearch: string, companyOption: string): Promise<void> {
        await this.companyInput.fill(companySearch);

        await expect(this.companyDropdown).toBeVisible();

        const option = this.companyOptions.filter({ hasText: companyOption }).first();
        await expect(option).toBeVisible();
        await option.click();
    }

    async fillContactForm(data: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        companySearch: string;
        companyOption: string;
        message?: string;
        noCompanyInSlovenia?: boolean;
        consent: boolean;
    }): Promise<void> {
        // Scroll the form into view before interacitng with it
        await this.submitButton.scrollIntoViewIfNeeded()
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);

        await this.phoneInput.fill(data.phone);

        await this.emailInput.fill(data.email);

        await this.selectCompany(data.companySearch, data.companyOption);

        if (data.message) {
            await this.messageTextarea.fill(data.message);
        }

        if (data.noCompanyInSlovenia !== undefined) {
            if (data.noCompanyInSlovenia) {
                await this.noCompanyInSloveniaCheckbox.check();
            } else {
                await this.noCompanyInSloveniaCheckbox.uncheck();
            }
        }

        if (data.consent) {
            await this.consentCheckbox.check();
        }

        if (!data.consent) {
            await this.consentCheckbox.uncheck();
        }
    }

    async submitForm(): Promise<void> {
        await this.submitButton.click();
    }


    async expectSuccessMessage(): Promise<void> {
        await expect(this.successAlert).toBeVisible();
        await expect(this.successMessage).toHaveText(
            'Vaše povpraševanje je bilo uspešno oddano. Odgovor lahko pričakujete v najkrajšem času.'
        );
    }

    async waitToLoad(): Promise<void> {
        await expect(this.title).toBeVisible();
        await expect(this.description).toBeVisible();
    }
}