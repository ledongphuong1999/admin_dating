import "./postList.css";
import "./loader.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import { URLDefault } from "../../api/urlDefault";

export default class PostList extends Component {
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
      url: `${URLDefault}/getPost`,
      data: {}
    }).then(res => {
      this.setState({
        data: res.data.listPost,
        isLoading: false,
      })
    }).catch(error => {
      console.log(error);
      this.setState({
        isLoading: false,
      })
    });
  }

  handleDelete = (_id) => {
    let datadel = this.state.data.filter((item) => item._id !== _id);
    this.setState({
      data: datadel
    })
    axios({
      method: 'POST',
      url: `${URLDefault}/delPostWeb`,
      data: { _id: _id }
    }).then(res => {
      console.log('info users del', res.data.InfoPost)
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
                field: "imagePost",
                headerName: "Image Post",
                width: 200,
                renderCell: (params) => {
                  return (
                    <div className="userListUser">
                      {params.row.imagePost?.uri != null ? (
                        <img className="postListImg" src={params.row.imagePost?.uri} alt="" />
                      ) : (
                        <h5>No image</h5>
                      )}
                    </div>
                  );
                },
              },
              {
                field: "statusPost",
                headerName: "Post",
                width: 160,
              },
              {
                field: "username",
                headerName: "Account",
                width: 200
              },
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
                field: "action",
                headerName: "Action",
                width: 150,
                renderCell: (params) => {
                  return (
                    <>
                      <Link to={{
                        pathname: "/post/" + params.row._id
                      }} >
                        <button className="userListEdit">View</button>
                      </Link>
                      <DeleteOutline
                        className="userListDelete"
                        onClick={() => this.handleDelete(params.row._id)}
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
