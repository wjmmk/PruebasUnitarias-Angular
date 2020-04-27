import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user.interface';

describe('UserService', () => {

  let injector: TestBed; // Se usa para inyectar la variable, pero tambien se puede usar inject()
  let httpMock: HttpTestingController; // Sirve para simular peticiones Http

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // Se le asigna un valor a las variables antes de cada it()
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController); // Se injecta la peticion Http Sumilada
  });

  afterEach( () => {
    // Aqui se verifica que no haya solicitudes pendientes despues de los it()
    httpMock.verify();
  });


  it('Debe estar creado', () => {
    const service: UserService = TestBed.get(UserService); // Se instancia la variable
    expect(service).toBeTruthy();
  });

  it('Debe retornar un Observable<User[]>', () => {
    const service: UserService = TestBed.get(UserService); // Se instancia la variable
    // Se crea un Mock: Es un objeto simulado de una respuesta Http
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

    // Se ejecuta el Metodo getAll, para poder suscribirnos
    service.getAll().subscribe( (users) => {
      expect(users.length).toBe(2); // Se valida que vengan almenos 2 Usuarios
      expect(users).toEqual(mockUser); // Se Evalua el Mock
      expect(users[0].login).toBeDefined(); // Se verifica que en la primera posicion venga el campo login
    });

    // Se valida la url de la Api
    const req = httpMock.expectOne('https://api.github.com/users?since=135');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser); // Flush: Permite empujar valores simulados de peticiones Http

  });
});
