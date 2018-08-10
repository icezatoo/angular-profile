import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';

let fixture: ComponentFixture<AppComponent>;
let comp: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [AppComponent, RouterLinkDirectiveStub],

      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
      });
  }));

  tests();
  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

function tests() {
  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];

  // #docregion test-setup
  beforeEach(() => {
    fixture.detectChanges(); // trigger initial data binding
    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkDirectiveStub)
    );

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });
  // #enddocregion test-setup
  it('can instantiate the component', () => {
    expect(comp).not.toBeNull();
  });

  // #docregion tests
  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(3, 'should have 3 routerLinks');
  });

  it('can click profile link in template', () => {
    const profileLink = routerLinks[1]; // profile link directive
    expect(profileLink.navigatedTo).toBeNull('should not have navigated yet');
  });
  // #enddocregion tests
}
