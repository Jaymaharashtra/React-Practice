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
      <table border="1" style={{ margin: "20px" }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Mobile</td>
            <td>City</td>
            <td>State</td>
          </tr>
        </thead>
        <tbody>
          {
            user.map((item)=>{
              return(

                <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.Mobile}</td>
              <td>{item.City}</td>
              <td>{item.State}</td>
            </tr>
            );
            })
            }
          
        </tbody>
      </table>
    </>
  );
}

export default App;
