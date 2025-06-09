RaceStrategyWEB
Aplicación web desarrollada con Angular 16 y Angular Material para una interfaz moderna y funcional. Se conecta a una API externa que debe configurarse en el entorno.
Requisitos

Node.js (versión compatible con Angular 16)
Angular CLI (v16.2.16): npm install -g @angular/cli@16.2.16

Configuración

Clona el repositorio e instala dependencias:
git clone <https://github.com/gomezcamilo9701/RaceStrategyManagerWEB.git>
cd RaceStrategyWEB
npm install


Configura la URL de la API en src/environments/environment.ts:
export const environment = {
  production: false,
  apiUrl: 'https://localhost:elpuertodeustedes.com'
};


Desarrollo
Inicia el servidor de desarrollo:
ng serve

Accede en http://localhost:4200/. Los cambios se reflejan automáticamente.
Compilación
Compila el proyecto para producción:
ng build

Los archivos se generan en dist/.
Pruebas

Unitarias: ng test (con Karma)
End-to-end: ng e2e (requiere paquete adicional, ej. Cypress)

Angular Material
La aplicación usa Angular Material para componentes de UI. Importa los módulos necesarios en app.module.ts o módulos específicos.
Ayuda
Consulta la documentación de Angular CLI o ejecuta ng help para más detalles.
