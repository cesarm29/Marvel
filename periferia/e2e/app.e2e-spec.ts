import { PeriferiaPage } from './app.po';

describe('periferia App', function() {
  let page: PeriferiaPage;

  beforeEach(() => {
    page = new PeriferiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
