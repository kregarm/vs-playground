import { expect, Locator } from '@playwright/test';

export abstract class BaseCard {
    protected readonly root: Locator;

    constructor(root: Locator) {
        this.root = root;
    }

    card(): Locator {
        return this.root;
    }

    title(): Locator {
        return this.root.locator('h6');
    }

    area(): Locator {
        return this.root.getByText(/\d+\s*m²|m²/);
    }

    description(): Locator {
        return this.root.locator('p');
    }

    async expectVisible(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    async expectTitle(title: string): Promise<void> {
        await expect(this.title()).toHaveText(title);
    }

    async expectArea(area: string | RegExp): Promise<void> {
        await expect(this.area()).toHaveText(area);
    }

    async clickOnCard(): Promise<void> {
        await expect(this.root).toBeVisible();
        await this.root.click();
    }
}
