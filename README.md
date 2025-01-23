# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by an incorrectly configured `useEffect` hook. The `useEffect` hook is a powerful tool for performing side effects, but it can easily lead to unexpected behavior if not handled correctly. 

## Bug Description
The bug is demonstrated in `bug.js`. The `useEffect` hook continuously increments the `count` state variable, causing an infinite loop. This is because the `count` is included in the dependency array, leading to the effect running every time the count changes. In this case this effect will run forever because it keeps changing the count.

## Solution
The solution is demonstrated in `bugSolution.js`. A conditional check prevents infinite rendering by preventing the setCount function from updating the state when it is not needed.