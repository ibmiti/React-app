# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# React-app

  ::: Render :::  

Q: Render? :    
A: 
    a function that takes two arguments
    
    the html code and an html element

Q: goal of render method/function? :    
A: 
    take given html code , display within html element

Q: example of render method? :   
A: 
    ReactDOM.render(<p>hello</p>, document.getElementById('root'));

   >> output :

    <body>     
       <div id="root"></div>     
    <body>         

    ::: JSX :::     

Q: JSX?   :   
A: Allows us to write HTML elements in Javascript    

Q: alternatives to jsx ? :     
A: createElement() and appendChild()

Q: What does JSX stand for? :   
A: Javascript XML ( eXtensible Markup Languag )

Q: what is an example of jsx? :    
A:    
    const myelement = React.createElement('h1', {}, 'ello world');
    ReactDOM.render(myelement, document.getElementById('root));

Q: example os jsx expressions? :    
A:  
   const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

Q: how can we use jsx to insert large blocks of HTML? :   
A: we can wrap the html within parenthesis:   
    
Q: what is an example of multi-line html/jsx? :  
A: 
    const myelement = ( 
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>sea-weed</li>
        </ul>
    );

Statemenet::   



      ::: Props :::

Q: Props ?   :   
A: 

Q: State ?   :   
A:


Q: Lifecycle ?   :   
A:


Q: Events ?   :   
A:



