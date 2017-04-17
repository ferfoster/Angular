import { AngularHeroTourPage } from './app.po';

describe('angular-hero-tour App', () => {
  let page: AngularHeroTourPage;

  beforeEach(() => {
    page = new AngularHeroTourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
