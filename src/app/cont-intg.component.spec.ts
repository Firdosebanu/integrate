import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ContIntgAppComponent } from '../app/cont-intg.component';

beforeEachProviders(() => [ContIntgAppComponent]);

describe('App: ContIntg', () => {
  it('should create the app',
      inject([ContIntgAppComponent], (app: ContIntgAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cont-intg works!\'',
      inject([ContIntgAppComponent], (app: ContIntgAppComponent) => {
    expect(app.title).toEqual('cont-intg works!');
  }));
});
