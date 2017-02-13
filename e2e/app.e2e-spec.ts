import { CatchTheGnatPage } from './app.po';

describe('catch-the-gnat App', function() {
  let page: CatchTheGnatPage;

  beforeEach(() => {
    page = new CatchTheGnatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
