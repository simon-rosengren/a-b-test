import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [visitor, setVisitor] = useState(0);

  useEffect(() => {
    const randomizeVisitor = Math.random();
    console.log(randomizeVisitor);
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log({
      event: "ctaClick",
      cta: "button",
      variant: visitor === 0 ? "variantA" : "variantB",
    });
  };

  return (
    <>
      {visitor === 1 ? (
        <img src="https://picsum.photos/200" alt="image" />
      ) : (
        <></>
      )}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <form action="submit" className="form">
        <p>Sign up to our newsletter!</p>
        <input type="text" placeholder="Email" />
        <button type="submit" onClick={handleClick}>
          Sign Up
        </button>
      </form>
    </>
  );
}

export default App;
