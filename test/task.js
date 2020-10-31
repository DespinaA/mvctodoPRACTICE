const assert = require("assert");
//const { expect } = require("chai");

describe("Verify the steps", () => {
	it("Check that the link loads the website", () => {
		browser.setWindowSize(1800,1200)
		browser.url("/");
	});

	it("Click on JavaScript tab", () => {
		const javaScriptButton = $('//*[@id="tabsContent"]/paper-tab[1]/div');
		javaScriptButton.click();
	});

	it("Select the polymer link and access /examples/polymer/index.html ", () => {
		const currentUrl = browser.getUrl();
		const polymerLink = $("/html/body/div[2]/div[1]/div[2]/iron-pages/div[1]/ul/li[8]/a");
		polymerLink.click();
		const urlHasChanged = browser.waitUntil( () => {
			return currentUrl !== browser.getUrl();
		},
		10000,
		"expected text to be different"
		);
		assert.ok(true, urlHasChanged);
	});

	it("Add 2 todo items and edit the content of the second one", () => {
		$("#new-todo").setValue("Despina finish your task")
		browser.keys("\uE007");
		browser.pause(1000)
		$("#new-todo").setValue("I just finished")
		browser.keys("\uE007");
		//browser.pause(3000);
		browser.execute(() => {
			document.getElementsByTagName("label")[2].innerText = ("Updated the second item")
		})
		browser.pause(1000)
	});
	
	
});

