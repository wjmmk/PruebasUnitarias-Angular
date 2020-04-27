import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { User } from './models/user.interface';
import { of } from 'rxjs';


describe('AppComponent', () => {


  let appComponent;
  let servicio;

  beforeAll( () => {
    console.log('beforeAll(): Se ejecuta antes de Iniciar las Pruebas');
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UserService,
        AppComponent
      ]
    }).compileComponents();
    console.log('beforeEach');
    appComponent = TestBed.get(AppComponent);
    servicio = TestBed.get(UserService);
  }));

  it('Debe crear el Componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PruebasUnitarias'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PruebasUnitarias');
  });

  it('EL valor de myVar debe ser Hola Mundo', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const appComponent = TestBed.createComponent(AppComponent);
    const app = appComponent.debugElement.componentInstance;
    expect(app.myVar).toEqual('Hola Mundo');
  });

  it('La variable saludo debe contener Jhonatan', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const appComponent = TestBed.createComponent(AppComponent);
    const app = appComponent.debugElement.componentInstance;
    expect(app.saludo).toContain('Jhonatan');
  });

  it('Debe retornar TRUE', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const appComponent = TestBed.createComponent(AppComponent);
    const app = appComponent.debugElement.componentInstance.boleano(22);
    expect(app).toBeTruthy();
  });

  it('Debe retornar FALSE', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const appComponent = TestBed.createComponent(AppComponent);
    const app = appComponent.debugElement.componentInstance.boleano(21);
    expect(app).toBeFalsy();
  });

  it('Debe llamar a UserService y el metodo getAll() para obtener los ususarios', () => {

    const mockUser: User[] = [{
      login: 'simonjefford',
      id: 136,
      node_id: 'MDQ6VXNlcjEzNg==',
      avatar_url: 'https://avatars2.githubusercontent.com/u/136?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/simonjefford',
      html_url: 'https://github.com/simonjefford',
      followers_url: 'https://api.github.com/users/simonjefford/followers',
      following_url: 'https://api.github.com/users/simonjefford/following{/other_user}',
      gists_url: 'https://api.github.com/users/simonjefford/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/simonjefford/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/simonjefford/subscriptions',
      organizations_url: 'https://api.github.com/users/simonjefford/orgs',
      repos_url: 'https://api.github.com/users/simonjefford/repos',
      events_url: 'https://api.github.com/users/simonjefford/events{/privacy}',
      received_events_url: 'https://api.github.com/users/simonjefford/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'josh',
      id: 137,
      node_id: 'MDQ6VXNlcjEzNw==',
      avatar_url: 'https://avatars2.githubusercontent.com/u/137?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/josh',
      html_url: 'https://github.com/josh',
      followers_url: 'https://api.github.com/users/josh/followers',
      following_url: 'https://api.github.com/users/josh/following{/other_user}',
      gists_url: 'https://api.github.com/users/josh/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/josh/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/josh/subscriptions',
      organizations_url: 'https://api.github.com/users/josh/orgs',
      repos_url: 'https://api.github.com/users/josh/repos',
      events_url: 'https://api.github.com/users/josh/events{/privacy}',
      received_events_url: 'https://api.github.com/users/josh/received_events',
      type: 'User',
      site_admin: false
    }];

    const usuarios = spyOn(servicio, 'getAll').and.callFake( users => {
        return of(mockUser);
    });

    appComponent.ngOnInit();

    expect(usuarios).toHaveBeenCalled();

  });

  afterAll( () => {
    console.log('afterAll(): Se ejecuta al Terminar las Pruebas');
  });

});
