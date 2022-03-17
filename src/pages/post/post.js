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
import "./post.css";
import { userRows } from "../../dummyData";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { URLDefault } from "../../api/urlDefault";
import axios from "axios";
import { List } from "@material-ui/core";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      fullname: '',
      age: '',
      city: '',
      description: '',
      post: '',
      comments: []
    }
  }

  componentDidMount() {
    axios({
      method: 'POST',
      url: `${URLDefault}/getDetailPost`,
      data: { _id: window.location.href.slice(window.location.href.lastIndexOf('/') + 1) }
    }).then(res => {
      this.setState({
        post: res.data.detailPost,
        comments: res.data.detailPost.comments,
      })
      console.log(res.data.detailPost.comments);
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
    const listItems = this.state.comments.map((item) =>
      <div className="userShowInfo">
        <MailOutline className="userShowIcon" />
        <span className="userShowInfoTitle">{item.fullnamecoment} : {item.fullcoment}</span>
      </div>
    );
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Detail Post</h1>
          <Link to="/posts">
            <button className="userAddButton">Back</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={this.state.post.imageUri?.uri}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{this.state.post.fullname}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Info Post Details</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{this.state.post.statusPost}</span>
              </div>
              <div className="userShowInfo">
                <img
                  className="userUpdateImg2"
                  src={this.state.post.imagePost?.uri}
                  alt=""
                />
              </div>
              <span className="userShowTitle">Comments Details</span>
              {listItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
