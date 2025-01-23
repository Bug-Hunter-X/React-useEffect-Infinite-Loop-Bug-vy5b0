```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here: this will cause an infinite loop
    setCount(count + 1);
  }, [count]); //count is always changing so this effect runs infinite times

  return <div>Count: {count}</div>;
}
```