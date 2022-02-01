import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { showTransactions } from "../../Actions/dashboard";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "transactionId",
    headerName: "ID",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 1,
    align: "center",
  },
  {
    field: "type",
    headerName: "Type",
    type: "String",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
  {
    field: "transactionDate",
    headerName: "Transaction Date",
    type: "String",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
  {
    field: "description",
    headerName: "Description",
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
    field: "openingBal",
    headerName: "Opening Balance",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
  {
    field: "closingBal",
    headerName: "Closing Balance",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
];

function Statement(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      showTransactions(props.user.token, e.target.from.value, e.target.to.value)
    );
  };
  useEffect(() => {
    setData(props.data.data);
  }, [props.data.data]);
  return (
    <div
      style={{
        maxWidth: "1065px",
        width: "95%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <Input type="date" id="from" style={{ marginRight: "3rem" }} />
        <Input type="date" id="to" style={{ marginRight: "3rem" }} />
        <Button type="submit" variant="contained">
          SUBMIT
        </Button>
      </form>
      <DataGrid
        key={(row) => row.transactionId}
        rows={data}
        columns={columns}
        getRowId={(row) => row.transactionId}
        pageSize={10}
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
          marginTop: "2rem",
        }}
        density="standard"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    data: state.transactions,
  };
};

export default connect(mapStateToProps)(Statement);
