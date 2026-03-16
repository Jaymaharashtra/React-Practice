import React from "react";

const Record = () => {
  const userData = [
    {
      Id: 1,
      Name: "Pratham",
      Age: 26,
    },
    {
      Id: 2,
      Name: "Shiv",
      Age: 30,
    },
    {
      Id: 3,
      Name: "Sonu",
      Age: 13,
    },
  ];
  return (
    <>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pratham</td>
            <td>26</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Sanu</td>
            <td>26</td>
          </tr>
        </tbody>
      </table>

      <h2>Loop table using Map Fuuction</h2>

      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Record;
