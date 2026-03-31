import { Locator, Page, expect } from '@playwright/test';
import { BaseCard } from './baseCard';

export class ResultCard extends BaseCard {
    constructor(root: Locator) {
        super(root);
    }

    static byTitleAndPrice(page: Page, title: string, price: string): ResultCard {
        const root = page
            .locator('div.cursor-pointer')
            .filter({
                has: page.locator('h6 span.capitalize', { hasText: title }),
            })
            .filter({
                has: page.getByText(price, { exact: false }),
            })
            .first();

        return new ResultCard(root);
    }

    async expectDescriptionText(text: string): Promise<void> {
        await expect(this.root).toContainText(text);
    }
}