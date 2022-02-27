import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { Component } from "react";
import axios from "axios";
import { URLDefault } from "../../api/urlDefault";

export default class WidgetSm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentWillMount = () => {
    axios({
      method: 'POST',
      url: `${URLDefault}/getinfoListNew`,
      data: {}
    }).then(res => {
      this.setState({
        data: res.data.InfoAccount,
      })
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const listItems = this.state.data.map((user) =>
      <li className="widgetSmListItem">
        <img
          src={user.imageUri.uri}
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">{user.fullname}</span>
          <span className="widgetSmUserTitle">{user.date}</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display
        </button>
      </li>);
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          {listItems}
        </ul>
      </div>
    );
  }
}
