```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Correct logic here: count is only set to 1 at the initial render
    if (count === 0) {
      setCount(count + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```