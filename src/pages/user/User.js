import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./user.css";
import { userRows } from "../../dummyData";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { URLDefault } from "../../api/urlDefault";
import axios from "axios";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      fullname: '',
      age: '',
      city: '',
      description: '',
    }
  }

  componentDidMount() {
    axios({
      method: 'POST',
      url: `${URLDefault}/viewUserWeb`,
      data: { username: window.location.href.slice(window.location.href.lastIndexOf('/') + 1) }
    }).then(res => {
      this.setState({
        data: res.data.InfoAccount,
        fullname: res.data.InfoAccount.fullname,
        age: res.data.InfoAccount.age,
        city: res.data.InfoAccount.city,
        description: res.data.InfoAccount.description
      })
      console.log('info', this.state.fullname)
    }).catch(error => {
      console.log(error);
    });
  }

  onUpdate() {
    console.log('ten', this.state.fullname)
    axios({
      method: 'POST',
      url: `${URLDefault}/updateUserWeb`,
      data: {
        username: this.state.data.username,
        fullname: this.state.fullname,
        age: this.state.age,
        city: this.state.city,
        description: this.state.description,
      }
    }).then(res => {
      window.location.reload()
    }).catch(error => {
      console.log(error);
    });

  }


  render() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Overview User</h1>
          <Link to="/users">
            <button className="userAddButton">Back</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={this.state.data.imageUri?.uri}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{this.state.data.fullname}</span>
                <span className="userShowUserTitle">{this.state.data.description}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{this.state.data.username}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{this.state.data.age} age</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">xxx-xxx-xxx@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{this.state.data.city} | Việt Nam</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder={this.state.data.fullname}
                    className="userUpdateInput"
                    onChange={event => {
                      this.setState({
                        fullname: event.target.value
                      })
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Age</label>
                  <input
                    type="text"
                    placeholder={this.state.data.age}
                    className="userUpdateInput"
                    onChange={event => {
                      this.setState({
                        age: event.target.value
                      })
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={this.state.data.city}
                    className="userUpdateInput"
                    onChange={event => {
                      this.setState({
                        city: event.target.value
                      })
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder={this.state.data.description}
                    className="userUpdateInput"
                    onChange={event => {
                      this.setState({
                        description: event.target.value
                      })
                    }}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg3"
                    src={this.state.data.imageUri?.uri}
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
              </div>
            </form>
            <div className="userUpdateRightbtn">
              <button className="userUpdateButton" onClick={() => this.onUpdate()}>Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
