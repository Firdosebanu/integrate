export class ContIntgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cont-intg-app h1')).getText();
  }
}
