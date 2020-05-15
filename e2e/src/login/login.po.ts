import { browser, by, element, promise, ElementFinder } from 'protractor';

export class LoginPage {
    private credentias = {
        username: 'admin',
        password: 'admin'
    };

    navigateToHome(): promise.Promise<any> {
        return browser.get('/');
    }

    getToolbar(): ElementFinder {
        return element(by.css('.toolbar'));
    }

    /* Toolbar Heading*/
    getToolbarHeading(): promise.Promise<string> {
        return this.getToolbar().element(by.css('span')).getText();
    }

    alert = element(by.className('nofi'));

    navigateTo() {
        return browser.get('/login');
    }

    fillCredentials(credentias: any = this.credentias) {
        element(by.className('username')).sendKeys(credentias.username);
        element(by.className('password')).sendKeys(credentias.password);
        element(by.className('login')).click();
    }


    getErrorMessage() {
        return element(by.className('nofi')).getText();
    }
}
