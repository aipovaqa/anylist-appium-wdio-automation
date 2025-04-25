describe('AnyList App UI Flow', () => {
    it('should add "tomato" to My Grocery List', async () => {
        await driver.activateApp('com.purplecover.anylist');
        await driver.pause(4000);

        // Проверка главного экрана
        const title = await $('android=new UiSelector().text("Lists")');
        expect(await title.isDisplayed()).toBe(true);

        // Открыть "My Grocery List"
        const groceryList = await $('android=new UiSelector().textContains("My Grocery List")');
        await groceryList.click();
        await driver.pause(3000);

        // Нажать "+ Add Item"
        const addItem = await $('android=new UiSelector().textContains("Add Item")');
        await addItem.click();
        await driver.pause(1000);

        // Ввести "tomato"
        const inputField = await $('android.widget.EditText');
        await inputField.setValue('tomato');
        await driver.pressKeyCode(66); // нажимаем Enter

        await driver.pause(2000);

        // Проверка, что "tomato" появился в списке
        const addedItem = await $('android=new UiSelector().textContains("tomato")');
        expect(await addedItem.isDisplayed()).toBe(true);

        // Назад и завершить
        await driver.back();
        await driver.pause(1000);
        await driver.terminateApp('com.purplecover.anylist');
    });
});
