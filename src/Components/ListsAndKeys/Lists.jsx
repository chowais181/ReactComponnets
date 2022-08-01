import "./List.css";
const students = [
  {
    id: 1,
    name: "Jack",
    email: "jack@gmail.com",
  },
  {
    id: 2,
    name: "Mary",
    email: "mary@gmail.com",
  },
  {
    id: 3,
    name: "John",
    email: "john@gmail.com",
  },
];
const List = () => {
  return (
    <div className="container">
      <h1> Example of React Map Loop </h1>
      {/* inline styling */}
      {/* <table>
        <tr>
          <th style={{ outline: "thin solid", padding: "10px" }}>Id</th>
          <th style={{ outline: "thin solid", padding: "10px" }}>Name</th>
          <th style={{ outline: "thin solid", padding: "10px" }}>Email</th>
        </tr>
        {students.map((item) => (
          <tr>
            <td style={{ outline: "thin solid", padding: "10px" }}>
              {item.id}
            </td>
            <td style={{ outline: "thin solid", padding: "10px" }}>
              {item.name}
            </td>
            <td style={{ outline: "thin solid", padding: "10px" }}>
              {item.email}
            </td>
          </tr>
        ))}
      </table> */}

      {/* external styling */}
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {students.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default List;
