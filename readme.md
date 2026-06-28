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
