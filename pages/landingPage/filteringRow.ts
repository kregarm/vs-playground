// pages/landingPage/filteringRow.ts
import { expect, Locator, Page } from '@playwright/test';

export class FilteringRow {
    constructor(private readonly page: Page) { }

    filterButton(name: 'Namembnost' | 'Stavba' | 'Velikost'): Locator {
        return this.page.getByRole('button', { name, exact: true });
    }

    wizardButton(): Locator {
        return this.page.getByRole('button', { name: /Čarovnik/i });
    }

    menuItem(name: string): Locator {
        return this.page.getByRole('menuitem', { name, exact: true });
    }

    resetSelectionItem(): Locator {
        return this.page.getByRole('button', { name: 'Počisti filtre', exact: true });
    }

    async openWizard(): Promise<void> {
        await this.wizardButton().click();
    }
}