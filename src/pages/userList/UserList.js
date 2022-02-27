import "./userList.css";
import "./loader.css";
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
      data: [],
      isLoading: true,
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
        isLoading: false,
      })
    }).catch(error => {
      console.log(error);
      this.setState({
        isLoading: false,
      })
    });
  }

  handleDelete = (username) => {
    let datadel = this.state.data.filter((item) => item.username !== username);
    this.setState({
      data: datadel
    })
    axios({
      method: 'POST',
      url: `${URLDefault}/delUserWeb`,
      data: { username: username }
    }).then(res => {
      console.log('info users del', res.data.InfoAccount)
    }).catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="userList">{
        this.state.isLoading ? (<div class="loader"></div>) :
          (
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
                      <Link to={{
                        pathname: "/user/" + params.row.username
                      }} >
                        <button className="userListEdit">View</button>
                      </Link>
                      <DeleteOutline
                        className="userListDelete"
                        onClick={() => this.handleDelete(params.row.username)}
                      />
                    </>
                  );
                },
              }]}
              pageSize={10}
              checkboxSelection
              getRowId={(row) => row._id}
            />
          )}
      </div>
    );
  }
}
