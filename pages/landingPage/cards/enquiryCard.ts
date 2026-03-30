import { Page, Locator, expect } from '@playwright/test';
import { BaseCard } from './baseCard';

export class EnquiryCard extends BaseCard {
    constructor(root: Locator) {
        super(root);
    }

    static byTitleAndArea(page: Page, title: string, area: string): EnquiryCard {
        const root = page.locator('div').filter({
            has: page.locator('h6', { hasText: title }),
        }).filter({
            has: page.getByText(area, { exact: false }),
        }).filter({
            has: page.getByText('Povpraševanje', { exact: false }),
        }).first();

        return new EnquiryCard(root);
    }

}
