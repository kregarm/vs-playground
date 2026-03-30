// pages/landingPage/index.ts
import { Page, Locator } from '@playwright/test';
import { ResultCard } from './cards/resultCard';
import { EnquiryCard } from './cards/enquiryCard';
import { FilteringRow } from './filteringRow';

export class LandingPage {
    readonly filteringRow: FilteringRow;

    constructor(private readonly page: Page) {
        this.filteringRow = new FilteringRow(page);
    }

    async open(): Promise<void> {
        await this.page.goto('/');
    }


    resultCardByTitleAndPrice(title: string, area: string): ResultCard {
        return ResultCard.byTitleAndPrice(this.page, title, area);
    }

    enquiryCardByTitleAnArea(title: string, area: string): EnquiryCard {
        return EnquiryCard.byTitleAndArea(this.page, title, area);
    }

    // These just handle the wizzard -> could be its own class, but good enough for this example
    private get wizardModal(): Locator {
        return this.page.locator('[id^="headlessui-dialog-panel"]');
    }

    private get wizardCloseButton(): Locator {
        return this.wizardModal.locator('button.ml-auto');
    }

    async dismissWizzard(): Promise<void> {
        await this.wizardModal.waitFor();
        await this.wizardCloseButton.waitFor();
        await this.wizardCloseButton.click();
    }

}