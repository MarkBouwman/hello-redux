import { HelloReduxPage } from './app.po';

describe('hello-redux App', () => {
  let page: HelloReduxPage;

  beforeEach(() => {
    page = new HelloReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
