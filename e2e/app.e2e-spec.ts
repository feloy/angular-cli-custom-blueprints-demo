import { AngularCliCustomBlueprintsDemoPage } from './app.po';

describe('angular-cli-custom-blueprints-demo App', function() {
  let page: AngularCliCustomBlueprintsDemoPage;

  beforeEach(() => {
    page = new AngularCliCustomBlueprintsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
