# :shopping_cart: DevStore

DevStore is an application focused on ecommerce, with some small functionalities created to show the use of some of next's important features.

### Preview
<img src="https://github.com/avilyre/avilyre/blob/master/projects-images/devstore/cover.png?raw=true" />

### Features
- *:pencil: Github Actions with Cypress*
- *:pencil: Connection to external product API*
- *:pencil: List of featured products*
- *:pencil: Product details*
- *:pencil: Search by product*

### Technologies
- *:fire: NextJS - Application SPA*
- *:fire: TypeScript - Static typing*
- *:fire: Eslint - For linting*
- *:fire: Tailwind - Styling*
- *:fire: Zod - Validation data format*
- *:fire: Lucide React - Iconography*
- *:fire: Cypress - For end-to-end testing*

### Important technical points

- *:gear: All featured products was statically generated to improve detail page*
- *:gear: Products that are not featured are dynamically generated because they do not have much access as those that are featured*
- *:gear: When you are waiting for a product, a skeleton is displayed to improve the user experience*
- *:gear: All component that use client resources have been componentized to optimize the usage of server components*

### Installing
```javascript
  // First you have to clone the projecto into your wokspace
  git clone https://github.com/avilyre/dev-store
```
```javascript
  // Install all dependencies with npm or your favorite package manager
  pnpm install
```
:warning: Now you have to setup the environment variables. You can find an example file in the project root
```javascript
  // That is it, run the project
  pnpm run dev
```
You can view the project at the address displayed in the terminal

### Testing
Cypress was used for testing and it's simple to run it
```javascript
  // Running application's tests
  pnpm cypress run
  // or
  // Running cypress's ui testing
  pnpm cypress open
```

Developed with :blue_heart: by avilyre@gmail.com
