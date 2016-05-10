import { Angular2SocketioPage } from './app.po';

describe('angular2-socketio App', function() {
  let page: Angular2SocketioPage;

  beforeEach(() => {
    page = new Angular2SocketioPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-socketio works!');
  });
});
