const Tables = ({ data }) => {
  return (
    <div
      style={{
        border: "solid",
        color: "red",
        marginTop: "5px",
        padding: "10px",
        borderRadius: "10px",
        width :'100%'
      }}
    >
      <h3>Name : {data.name}</h3>
      <h3>Mobile : {data.Mobile}</h3>
      <h3>City : {data.City}</h3>
      <h3>State : {data.State}</h3>
    </div>
  );
};

export default Tables;
