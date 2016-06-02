import { ContIntgPage } from './app.po';

describe('cont-intg App', function() {
  let page: ContIntgPage;

  beforeEach(() => {
    page = new ContIntgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cont-intg works!');
  });
});
