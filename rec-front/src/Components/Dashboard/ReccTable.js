import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { cancelRecc, showRecurring } from "../../Actions/reccpayaction";

const columns = [
  {
    field: "reccId",
    headerName: "ID",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 1,
    align: "center",
  },
  {
    field: "description",
    headerName: "Utility",
    type: "String",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
  {
    field: "startDate",
    headerName: "Start Date",
    type: "String",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
  {
    field: "amount",
    headerName: "Amount",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
  {
    field: "noOfTimes",
    headerName: "No Of Times",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
];

function ReccTable(props) {
  const dispatch = useDispatch();
  const [deleteRecc, setDeleteRecc] = useState(-1);
  // const data = props.data;

  const handleCellClick = (e) => {
    setDeleteRecc(e.id);
  };
  const handleCancelRecc = () => {
    if (deleteRecc !== -1) {
      dispatch(cancelRecc(props.token, deleteRecc));
    }
  };
  useEffect(() => {
    dispatch(showRecurring(props.token));
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        onCellClick={handleCellClick}
        key={(row) => row.reccId}
        rows={props.data}
        columns={columns}
        getRowId={(row) => row.reccId}
        pageSize={5}
        autoHeight={true}
        getRowClassName={(row) => "row"}
        sx={{
          width: "100%",
          borderRadius: "12px",
          border: "none",
          overflow: "hidden",
          boxShadow: "0 .6px 6px rgba(37, 37, 37, 0.564)",
          fontSize: "1.1rem",
          // marginLeft: "2rem",
          marginTop: "4rem",
        }}
        density="standard"
      />
      <Button onClick={handleCancelRecc}>Cancel</Button>
    </div>
  );
}

export default ReccTable;
