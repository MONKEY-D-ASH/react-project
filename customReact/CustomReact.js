// writing the code ourself to see how the react works under the hood 

function customRender(reactElement, container){
    // we are creating an element and injecting the required details in it using the react element we created and then appeding it in the container, but this code is not optimized
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    // A better approach
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // we are creating a loop that automatically takes the prop from the react element and set the attributes of the dom element
    // sometimes the children property is included in the props property, so to skip that case we are defining an if conditional statement
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue
        }
        domElement.setAttribute(prop , reactElement.props[prop]) 
    }
    container.appendChild(domElement)
}

// this is a react element that we want to inject in the "root" div of our index.html file 
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById("root")
console.log(mainContainer);


// we would want a render method that takes two parameters, what we want to inject and where we want to inject it
customRender(reactElement, mainContainer)