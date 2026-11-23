import { test, expect } from '@playwright/test';

test('prueba de calidad de codigo', async ({ page }) => {
  // 1. Prettier: comillas dobles y espacios desordenados
  const   urlDestino = 'https://example.com'

  // 2. CSpell: falta de ortografía en el nombre de la variable ("chekoutBtn")
  const chekoutBtn = page.locator('#checkout');

  // 3. ESLint (@typescript-eslint): variable declarada y nunca usada
  const variableSinUsar = 123;

  await page.goto(urlDestino);

  // 4. ESLint (eslint-plugin-playwright): espera fija (anti-patrón)
  await page.waitForTimeout(2000);

  // 5. TypeScript (tsc --noEmit): pasar un número donde va un string
  await chekoutBtn.fill(99999);

  await expect(chekoutBtn).toBeVisible();
});