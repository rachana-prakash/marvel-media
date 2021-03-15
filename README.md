# MarvelMediaApp
I do not own any of the images or text. All copyright goes to Marvel Entertainment.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Features
`ngrx Stores` used for state management

`local Storage` used for state management as well in case user refreshes the page

`responsive web design` included

`material icons` included

`module is Lazy Loaded`

`Resolver` used for data call in gallery page

`Marvel API` call is limited to 3000 per day

`Auth Guard` enabled for gallery page

`mixins` included

`external links` are included which route to original marvel page

`login` is a popup modal using secondary routes

`copyright pdf` is a sample pdf not related to Marvel

## Pages
`home` contains interesting text and images with the latest marvel news

`gallery` contains images in a grid view from a Marvel API. Clicking on the image opens an image viewer which can navigate to next or previous image

`about-us` contains details about Marvel and the Key People

`login` contains a modal which has a form to enter login details

## Login Details
Find login details in `src/assets/userDatabase.ts`
