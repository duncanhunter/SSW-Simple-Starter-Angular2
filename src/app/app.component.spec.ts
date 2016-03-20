import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AppComponent} from './app.component';

class MockAppComponent extends AppComponent {
}

describe('App Component', () => {

  beforeEachProviders(() => [
    provide(AppComponent, {useClass: MockAppComponent}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder, AppComponent], (tcb:TestComponentBuilder, app) => {
    return tcb.createAsync(AppComponent).then((fixture) => {
      fixture.detectChanges();
      expect(app.title).toBe('App Component');
      
    });
  }));

});