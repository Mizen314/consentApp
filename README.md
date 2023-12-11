# Consent Mode - Laboratorio Supervielle

## Implementaciones Básicas

-Angular cli

-Firebase cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Laboratorio de Modo de consentimiento para Angular/Firebase

Un proyecto para implementar el modo de consentimiento con el SDK de firebase. Se implementa un objeto en localstorage con un
servicio que se dispara al iniciar la aplicación.

## Funcionamiento del servicio

Este, revisa si existe la key de consentMode. Si no existe setea la key de consentMode en false indicando que no se preguntó al usuario
acerca de sus preferencias. Adicionalmente agrega la key de showBanner en true, para que cuando inicie la aplicación muestre el banner.
En caso que si se le haya preguntado anteiormente, recupera la selección anterior y mantiene las preferencias.

### Keys que se guardan corresponden al tipo de stoage involucrado

-ad_storage

-analytics_storage

-functionality_storage

-personalization_storage

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build para subir al proyecto de Firebase creado en la consola (Firebase)

firebase build
