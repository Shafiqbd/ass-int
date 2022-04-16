const TableView = ({ TableData }) => {
  return (
    <div className="table-area">
      <div className="title">
        <p>Project Id: </p>
        <p>Name: </p>
        <p>Address: </p>
        <p>Designation: </p>
        <p>Project Id: </p>
        <p>Name: </p>
        <p>Address: </p>
        <p>Designation: </p>
      </div>
      <div className="info">
        <p>{TableData.id} </p>
        <p>{TableData.name}</p>
        <p>{TableData.address}</p>
        <p>{TableData.designation} </p>
        <p>{TableData.id} </p>
        <p>{TableData.name}</p>
        <p>{TableData.address}</p>
        <p>{TableData.designation} </p>
      </div>
    </div>
  );
};

export default TableView;
