// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Caminho para os testes
  timeout: 30000,      // Tempo de espera máximo para cada teste
  use: {
    headless: true,    // Executar testes sem interface gráfica
    viewport: { width: 1280, height: 720 },  // Tamanho da tela
    trace: 'on-first-retry',  // Habilitar trace para depuração
  },
});
