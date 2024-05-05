

export const Table = (props) => {
  return (
    <div className="student">
        <h1>table</h1>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <td>{props.name}</td>
        </tr>
        <tr> 
          <th>Age</th>
          <td>{props.age}</td>
        </tr>
        <tr>
          <th>IsMarried</th>
          <td>{props.isMarried ? "yes" : "No"}</td>
        </tr>
        </tbody>
      </table>

    </div>
  )
}

Table.defaultProps = {
    name : "No name",
    age : 0,
    isMarried:false
}
