- Context allows us to share state within a component tree
- Gives us a central place to store data or state and share between components without having to pass it down as props
- Similar to concept of redux in that it has a central place to store data and can be accessed without having to continually pass down props
- Similar to redux when paired with hooks

- Instead we can create a new Context in a new file, which is me making a place where a shared state can be initially defined and setup
- Then we have to Provide that context to our component tree so the components in the tree can access the data. Do this context provider which is a react tag that wraps the components that need access to data
- Now all the components in the tree that have access but don't need to use it
- No longer pass props down, rather components directly access data from the context

- How Do We access the data in Context from the components that are being wrapped by the Provider?
- Class Component - Context Type
  // used in class components
  // set equal to the type of context we want to have access to in this component
  // attaches data from the ThemeContext to the context property and can be accessed via
  // this.context
  // static contextType = ThemeContext

- Can also have access to Context via a Consumer which we can use in functional components
- When using a Consumer we can consume multiple context in one component

Updating Context Data
# context-hooks-app
