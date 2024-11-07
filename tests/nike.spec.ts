import { test, expect } from '@playwright/test';
import NikePage from '../src/pages/NikePage';

test('Verificar produto na página inicial', async ({ page }) => {
  const nikePage = new NikePage(page);

  // Agora estamos passando um índice (por exemplo, 3)
  const productCard = await nikePage.nikeElements.getProductCard(3);
  await productCard.click();

  // Adicione asserções, como verificar se o produto foi selecionado
  expect(await page.locator('.product-details').isVisible()).toBe(true);
});
