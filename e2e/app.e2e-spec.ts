import { ChassesPage } from './app.po';

describe('chasses App', () => {
  let page: ChassesPage;

  beforeEach(() => {
    page = new ChassesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
