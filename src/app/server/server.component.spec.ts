import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServerComponent } from './server.component';

describe('ServerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ServerComponent
      ],
    }).compileComponents();
  }));

  it('should create the ServerComponent', () => {
    const fixture = TestBed.createComponent(ServerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
