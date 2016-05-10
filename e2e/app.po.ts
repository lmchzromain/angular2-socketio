export class Angular2SocketioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-socketio-app h1')).getText();
  }
}
