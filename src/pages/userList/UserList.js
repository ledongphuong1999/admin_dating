import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import { URLDefault } from "../../api/urlDefault";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    axios({
      method: 'POST',
      url: `${URLDefault}/getinfoListWeb`,
      data: {}
    }).then(res => {
      this.setState({
        data: res.data.InfoAccount,
      })
      console.log('info users22222', this.state.data)
    }).catch(error => {
      console.log(error);
    });
  }

  handleDelete = (id) => {
    let datadel = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: datadel
    })
  };

  render() {
    return (
      <div className="userList">
        <DataGrid
          rows={this.state.data}
          disableSelectionOnClick
          columns={[{ field: "_id", headerName: "ID", width: 90 },
          {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
              return (
                <div className="userListUser">
                  <img className="userListImg" src={params.row.imageUri.uri} alt="" />
                  {params.row.fullname}
                </div>
              );
            },
          },
          {
            field: "username",
            headerName: "Account",
            width: 200
          },
          {
            field: "age",
            headerName: "Age",
            width: 120,
          },
          {
            field: "city",
            headerName: "City",
            width: 160,
          },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/user/" + params.row.username}>
                    <button className="userListEdit">View</button>
                  </Link>
                  <DeleteOutline
                    className="userListDelete"
                    onClick={() => this.handleDelete(params.row.id)}
                  />
                </>
              );
            },
          }]}
          pageSize={10}
          checkboxSelection
          getRowId={(row) => row._id}
          //id="_id"
        />
      </div>
    );
  }
}
