Rendering and State
recap: 
- a state setter function is called
- your code finishes running
- the component re-renders
- in this re-render, state will be set to the new value

Can we do something after a render or re-render? yes! These are called side-effects or effects
- we use the use effect hook 
We would use it in situations using: 
-> Changing parts of the Dom not covered by React
-> Async operations, like AJAX requests when a component is mounted
-> Doing things when a component is about to be unmounted
-> Effects are used for "side-effects": doing things unrelated to render

useEffect:
to use an effect, register it with useEffect(fn);

- effect always runs after first render
- by default, my effect runs after all re-renders

2nd Argument we can provide to useEffect:
- The 1st argument is our callback function:
   useEffect(myCallbackFn);
   -> Runs myCallbackFn effect after every render

- The 2nd argument in the form of an array: (these are two dependencies, they are state, if any one of them changes we want to call the callback function.)
   useEffect(myCallbackFn, [productId, userId])
   -> runs myCallbackFn effect only if productId or userId vars changed

   There is a third option:
   useEffect(myCallbackFn, [])
   -> runs myCallbackFn effect only the first time (on mount) and never again

Use cases: Fetching data from an api on initial render: 
Use: Getting Data via Ajex on mount
- "when a component renders, fetch data from an api"
    -> Data fetching is asynchronous, and may take a moment to complete
    -> Want to show us something, like a loading message, while fetching

- to fetch correctly:
    -> Have an effect that runs only once
    -> Inside effect, when API call is finished, will set state & re-render