import { LoginPage } from './login.po';
import { browser, logging, element, by } from 'protractor';
import { TestBed, async } from '@angular/core/testing';
// import { LoginComponent } from '../../../src/app/login/login.component';



describe('Login', () => {
    let page: LoginPage;

    const wrongCredentias = {
        username: 'wrongname',
        password: 'wrongpassword'
    };

    beforeEach(() => {
        page = new LoginPage();
    });

    it('should display the heading of Toolbar', () => {
        browser.driver.getCurrentUrl();
        expect(element(by.css('toolbar')).getText()).toEqual('Login');
    });

    it('when user trying to login with wrong credentials he should stay on the login page', () => {
        page.navigateTo();
        page.fillCredentials(wrongCredentias);
        expect(browser.driver.getCurrentUrl()).toMatch('/');
    });

    it('when user login with correct credentials he should redirect to the home page', () => {
        page.navigateTo();
        page.fillCredentials();
        browser.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toMatch('/');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
