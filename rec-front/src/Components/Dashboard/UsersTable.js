import { React, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { connect } from "react-redux";
import "./dashboard.css";

const columns = [
  {
    field: "name",
    headerName: "Name",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 1,
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
  {
    field: "roles",
    headerName: "Roles",
    type: "String",
    headerAlign: "center",
    headerClassName: "iamgood",
    flex: 2,
    align: "center",
  },
];

function DataTable(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/users", {
        headers: {
          Authorization: "Bearer " + props.user.token,
        },
      })
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  }, [props.user.token]);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        key={(row) => row.email}
        rows={users}
        columns={columns}
        getRowId={(row) => row.email}
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
      {/* <DataGrid
        key={(row) => row.email}
        getRowId={(row) => row.email}
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
  };
};

export default connect(mapStateToProps)(DataTable);
