# start of react js

NOTE: if you are returning html from your javascript it is called jsx or the files is calles a jsx file

NOTE: you can only return one element from the jsx file to the main.jsx file you cannot return two seperate <h1> tags from one function but there is a hack you can wrap all the things you want to return from the function inside a <div> tag and then return that whole div tag, BUT this creates an extra div tag, so it was removed and empty paranthesis are introduced ( <> </> ) in place of the <div> tags 

NOTE: use the .jsx extension in the files you are writing the jsx, also the first letter of the jsx file adn the function you are exporting in that jsx file must be kept in capital, it is just a jsx convention , this rule is exclusive for the vite framework, but can be ignored in the CRA (create react app)

so instead of taking up to a differnt page by generating a seperate dom structure, what it does is it removes the old node form the dom and inject the new node in that same dom , is that why react is known for building single page application

Yes, that is exactly why React is known for building Single Page Applications (SPAs).Instead of requesting a completely new HTML page from a server when a user clicks a link, React intercepts that action and updates the existing page dynamically.Here is a breakdown of how this process works.

The Single Page MechanismOne HTML File:

 The server sends only one minimal HTML file (usually containing just a single <div>) to the browser at the very beginning.
 
 JavaScript Control: React loads into the browser and takes complete control over that single HTML structure.
 
 Dynamic Swapping: When a user navigates, React automatically destroys the current components (DOM nodes) and injects new ones into the exact same page.

# what does react scripts do: 

react-scripts is a package of pre-defined configuration and build tools (like Webpack and Babel) that run inside Node.js. When you run a command, it triggers a specific sequence of these tools to process your React files.How It WorksReads package.json: Node.js looks at the scripts object to see what happens when you run a command (e.g., npm start).Executes react-scripts: It executes the script associated with that command.
these scripts also inject the javascript inside you index.html file before sending it to the browser

# virtual DOM and its working 
The Virtual DOM (VDOM) is a lightweight, in-memory JavaScript representation of the actual DOM. Used by modern frameworks like React and Vue, it acts as a blueprint. Instead of directly making heavy, performance-sapping updates to the actual browser UI, frameworks modify the VDOM and efficiently sync the differences.

How It Works
The update process in a Virtual DOM environment relies on three specific steps:
1. Render the VDOM: Whenever the application state changes, a completely new Virtual DOM representation is created in memory.
2. Diffing Algorithm: The framework compares this newly created VDOM tree with the previous VDOM tree to pinpoint exactly what has changed.
3. Reconciliation: Only the minimal set of necessary updates (e.g., changing a single text node) is applied to the real browser DOM

# react component
A React component is a self-contained, reusable building block of a user interface (UI) that encapsulates its own appearance, logic, and data. Essentially, components act like JavaScript functions that output HTML using a special markup syntax called JSX (JavaScript XML).

They allow you to divide complex website layouts into smaller, manageable, and isolated pieces.

Key Characteristics of Components
1. Reusability: You can write a single Button or UserProfile component and render it hundreds of times with different data.
2. Nesting: Components can be placed inside other components. An entire webpage is structured as a hierarchical tree of nested components starting from a single "root" component.
3. Isolation: Every component manages its own internal mechanics without interfering with the rest of the web application.

# HOW TO CREATE YOUR OWN REACT LIBRARY AND JSX 

NOTE: react is just a ton of javascript that is written by somebody else and a lot of algotrithms which makes the manipulation in the DOM much more consistent and easier, thats all. It just helps you in manipulating the UI 

# react element : 
A React element is a plain, lightweight JavaScript object that describes what you want to see on the screen. It is the smallest building block of a React application.
When you write JSX code like const element = <h1>Hello</h1>;, it compiles down to a standard React Element Object via a 
React.createElement() call.

# STATE IN REACT: 
state is a built-in object used to store data that changes over time within a component. Think of it as a component's personal memory. Whenever the data inside a state object changes, React automatically forces the component to re-render so the user interface stays perfectly in sync with the new data.

To create a state component we use the useState() method which returns a stateful value (a variable) and a function to update it. and in the useState() you have to pass the initial value of the variable 

by maintaining this state method the react is able to update the value in the whole dom and hence it resolves the ghost or phantom problem initially faced by the facebook 

<!------------------------------------------------------------------------------------------------------------------------------->
## react flow of execution 
# Phase 1: Build Time (Happens on your computer via Vite/Webpack/Babel)
 Babel is a build tool. It converts your human-readable JSX into plain JavaScript before your website is deployed or loaded.
 
 1. The Translation: Babel takes your <App /> and component files and transforms all JSX tags into standard JavaScript functions.- Old React: Babel turned <div>Hello</div> into React.createElement('div', null, 'Hello').
 - Modern React (17+): Babel turns it into a special internal function called _jsx('div', { children: 'Hello' }).
 2. The Output: The file that actually gets shipped to the browser contains zero JSX. It is pure, compiled JavaScript.
 
 # Phase 2: Runtime (Happens in the browser when root.render runs)
 Now, the user opens your webpage, your JavaScript file runs, and root.render(<App />) is triggered.
 1. Executing the Functions: React executes root.render(). Because Babel already compiled everything, the browser isn't reading <App />. It is executing the compiled _jsx or .createElement functions.
 2. Creating the Objects: As these functions execute from the top of the component tree down to the bottom, they instantly return plain JavaScript objects.For example, a button tag becomes: { type: 'button', props: { className: 'btn', children: 'Click' } }.
 3. Building the Virtual DOM: You are spot on here. React collects all of these plain JavaScript objects and links them together. This tree of objects is the Virtual DOM.
 4. The Initial Commit: Because this is the very first render, React doesn't have an old tree to compare it to. It takes this entire Virtual DOM structure, translates those JavaScript objects into real HTML nodes (like document.createElement('div')), and injects them all at once into the browser's DOM.
 ( the browser maintains copy of your index.html file in its live memory based on which it creates the real dom and the react have access to this DOM structure in which it injects this newly generated node )
 5. The Screen Paints: The browser receives the new HTML nodes, calculates the layout, and paints the pixels on the user's screen.
 
 # summary
  Babel compiles (at build time) → Code is shipped → root.render triggers → .createElement runs → Virtual DOM forms → Screen.


# What Triggers a Render?
A component will only render under two primary scenarios:
Initial Render: When your application first loads, React must call the root component to build the very first UI snapshot on the screen.
State Updates: Once the app is running, updating a component's state (e.g., using useState's setter function) automatically queues a re-render for that specific component.

# The Domino Effect (Re-rendering Children)
When a component re-renders because its state changes, React recursively re-renders all of its child components by default, regardless of whether their props changed

