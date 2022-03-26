import Cars from "./Cars";
import Bus from "./Bus";

function App() {
  return (
    <>
      <Cars />
      <Bus tires={4} />
    </>
  );
}

export default App;
