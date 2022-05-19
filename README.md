# Project Initialization

The project has been created with VUE CLI.
Because of the nature of the application and separation of concerns, the project does not have a default preset, the tools integrated include a further separation of concerns when it commes to semantic and decoupling. 

- VUE 3
- VUEX 4
- Vue Router
- [vee-validate 4](https://vee-validate.logaretm.com/v4/)
- Axios 
- JEST 

## Setup

# clone the repository
git clone 

# install dependencies
npm install

# Compiling and runing the application
npm run serve

# Compiles and running for Production
npm run build

# Run unit tests
npm run test:unit

As with all custom Vue Project creation process, Vue CLI creates components folder, store, router, view. 
In the HomeView there we find the Form wrapper and the UserDetail Component. 

As for the form it self in wraps a slot for displaying the components that will be requested through handleSubmit, which scopes each steps data and stores them in a setters, which can dynamically referenced in the next button and when you come back by clicking previous button.

Switching betweeen each steps triggers showing each step component, which in total are three. The first step loads immediatly and welcomes the user to go through the other steps. Then the second step render renders three `<Field> <ErrorMessage>` to handle errors which also have basic validation.
The in HomeView there is a method called `validateCurrentStep` that will check the values and errors on current step. If the value on the current step is invalid, the "Next" button will be disabled.

The `<UserDetail>` component shows up only when user finish the steps and submit the from. It will fetch the GitHub API with username to get response data and show the avatar image.

The second componenent, `<UserDetail>` will show after we have filled all the field and clicked on submit button. This event will trigger a request with Axios that will provide us with a payload containing the username, name and surname from the getter, and GitHub Avatar.

### Add HTML `autofocus` attribute on the first text field

Let the first input field automatically get focus when the component loads

### CSS - libraries and code separation

For styling i used BOOTSTRAP 5. Reference to the Bootstrap classes can be found in App, Home, and all the other vue components in the steps directory. 


### Next and Previous buttons with Native Behavior

Approach: Vue Router has not been used in navigating through steps. So you referencing step for each component. Although it could also have been through a Vue Router. This implementation would have created a back and forth through buttons of the browser application. In the application is not implemented, but, the code for this can be found in the routes in the index.js in the router directory. 
Here it would have looked as follows. 
```js
{
    path: '/',
    component: HomeView
  },
  {
    path: '/steps',
    component: Steps,
    children: [
      { path: '', component: StepOne, name: 'StepOne' },
      { path: '2', component: StepTwo, name: 'StepTwo' },
      { path: '3', component: StepThree, name: 'StepThree' }
    ],
  },
```

You can see familiarities with routes declared in React or Angular. So almost indentical, main route and then an array for child routes if we would make use of them. 
This and the already support that vue has for navigation with the `createWebHistory` we could go back and forth through the history of our navigation to the site. 

### Animate with transitions

Vue offers the ability to transition and animate through its animation hooks, There are six classes applied for enter / leave transitions. I have used them here, but not with css animation. So to say, ive used another library that is installed animate.css, to transition and make use of declaring, delaying, duration of transition. Although many are native css, the transition and appear attribute is neccesary to make the animation or transition work, because then Vue would have not known where to set them. So only with this transition wrapper, which will not show in the dom, but serves internally for Vue, we avoid worrying much about delaying and focusing only on the components.

In the App.vue there are keyframes declared that becuase they are not scoped and are parent Views, allow child component to use them. So there is scoped separation, in other words, things that belong only the component and global classes, things that could be used in the entire application. 

