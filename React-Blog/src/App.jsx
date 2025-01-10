import Tables from "./tables";

// import Table from "./tables"

function App() {
  const user = [
    {
      id: 1,
      name: "Ramesh",
      Mobile: 9028310031,
      City: "Pune",
      State: "Maharashtra",
    },
    {
      id: 2,
      name: "Vijay ",
      Mobile: 8329952292,
      City: "Ambegaon",
      State: "Maharashtra",
    },
    {
      id: 3,
      name: "Vitthal",
      Mobile: 7385977870,
      City: "Nanded",
      State: "Maharashtra",
    },
    {
      id: 4,
      name: "Arohi",
      Mobile: 8149010212,
      City: "Pune",
      State: "Maharashtra",
    },
  ];
  return (
    <>
    {
      user.map((user)=>(
        <div key={user.id}>

        <Tables data ={user} />
        </div>
      ))
    }
    </>
  );
}

export default App;
