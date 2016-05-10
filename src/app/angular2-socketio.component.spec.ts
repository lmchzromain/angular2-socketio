import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2SocketioAppComponent } from '../app/angular2-socketio.component';

beforeEachProviders(() => [Angular2SocketioAppComponent]);

describe('App: Angular2Socketio', () => {
  it('should create the app',
      inject([Angular2SocketioAppComponent], (app: Angular2SocketioAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-socketio works!\'',
      inject([Angular2SocketioAppComponent], (app: Angular2SocketioAppComponent) => {
    expect(app.title).toEqual('angular2-socketio works!');
  }));
});
