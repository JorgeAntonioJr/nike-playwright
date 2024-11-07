import { Page, Locator } from '@playwright/test';

export default class NikeElements {
  constructor(private page: Page) {}

  getSearchInput(): Locator {
    return this.page.locator('input[name="search"]');  // Suponha que o seletor seja esse
  }

  getSearchButton(): Locator {
    return this.page.locator('button[type="submit"]');  // Suponha que o seletor seja esse
  }

  getFirstProduct(): Locator {
    return this.page.locator('.product-item:first-child');  // Suponha que o seletor seja esse
  }

  getAddToCartButton(): Locator {
    return this.page.locator('button.add-to-cart');  // Suponha que o seletor seja esse
  }

  getCartButton(): Locator {
    return this.page.locator('button.cart');  // Suponha que o seletor seja esse
  }

  // Corrigindo o método getProductCard
  getProductCard(index: number): Locator {
    // Certifique-se de que o método retorne um Locator válido
    return this.page.locator(`.product-item:nth-child(${index})`);
  }
}
