import { Page } from '@playwright/test';
import NikeElements from '../elements/NikeElements';

export default class NikePage {
  readonly nikeElements: NikeElements;

  constructor(readonly page: Page) {
    this.page = page;
    this.nikeElements = new NikeElements(page);
  }

  async searchProduct(product: string): Promise<void> {
    // Alterado de 'searchInput' para 'getSearchInput()'
    await (await this.nikeElements.getSearchInput()).fill(product);
    await (await this.nikeElements.getSearchButton()).click();
  }

  async clickFirstProduct(): Promise<void> {
    // Alterado de 'firstProduct' para 'getFirstProduct()'
    await (await this.nikeElements.getFirstProduct()).click();
  }

  async addToCart(): Promise<void> {
    // Alterado de 'addToCartButton' para 'getAddToCartButton()'
    await (await this.nikeElements.getAddToCartButton()).click();
  }

  async openCart(): Promise<void> {
    // Alterado de 'cartButton' para 'getCartButton()'
    await (await this.nikeElements.getCartButton()).click();
  }
}
