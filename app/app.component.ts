// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-new',
    template: '<h1>Hola mundo con Angular 2 !! Edgar hernandez </h1>'
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { }