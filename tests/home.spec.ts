import { test, expect } from "@playwright/test";
test.describe('Home', () => {

    test('Open Home', async ({ page }) => {
        //open urL
        await page.goto("https://practice.sdetunicorns.com");

        //verify Title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")

        
    });
    test('Click get stared button using CSS Selectors', async ({ page }) => {
        //open urL
        await page.goto("https://practice.sdetunicorns.com");

        //click the button
         page.locator('#get-started').click()

        //verify url has #get-started
        //await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started')
        await expect(page).toHaveURL('/.*#get-started/')


        
    });
    test('Verify heading test is visible using text selector', async ({ page }) => {
        //open urL
        await page.goto("https://practice.sdetunicorns.com");

        //find the text locator
         const headingText = await page.locator('text="Think different. Make different."')

        //find the text locator
        
        await expect(headingText).toBeVisible()


        
    });
    test('Verify home link is enabled using text ans CSS selector', async ({ page }) => {
        //open urL
        await page.goto("https://practice.sdetunicorns.com");
        //close
        //close for checking

        //find the home text
         const homeText = await page.locator('#zak-primary-menu >> text="Home"')

        //find the text locator
        
        await expect(homeText).toBeEnabled()

        // Verifying action flow


        
    });

});