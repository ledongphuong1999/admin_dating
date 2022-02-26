import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { Component } from "react";
import axios from "axios";
import { URLDefault } from "../../api/urlDefault";

export default class WidgetSm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname1: '',
      date1: '',
      img1: '',
      fullname2: '',
      date2: '',
      img2: '',
      fullname3: '',
      date3: '',
      img3: '',
      fullname4: '',
      date4: '',
      img4: '',
      fullname5: '',
      date5: '',
      img5: '',
    }
  }
  componentWillMount = () => {
    axios({
      method: 'POST',
      url: `${URLDefault}/getinfoListNew`,
      data: {}
    }).then(res => {
      this.setState({
        fullname1: res.data.InfoAccount[0].fullname,
        date1: res.data.InfoAccount[0].date,
        img1: res.data.InfoAccount[0].imageUri.uri,

        fullname2: res.data.InfoAccount[1].fullname,
        date2: res.data.InfoAccount[1].date,
        img2: res.data.InfoAccount[1].imageUri.uri,

        fullname3: res.data.InfoAccount[2].fullname,
        date3: res.data.InfoAccount[2].date,
        img3: res.data.InfoAccount[2].imageUri.uri,

        fullname4: res.data.InfoAccount[3].fullname,
        date4: res.data.InfoAccount[3].date,
        img4: res.data.InfoAccount[3].imageUri.uri,

        fullname5: res.data.InfoAccount[4].fullname,
        date5: res.data.InfoAccount[4].date,
        img5: res.data.InfoAccount[4].imageUri.uri,

      })
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              src={this.state.img1}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{this.state.fullname1}</span>
              <span className="widgetSmUserTitle">{this.state.date1}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src={this.state.img2}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{this.state.fullname2}</span>
              <span className="widgetSmUserTitle">{this.state.date2}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src={this.state.img3}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{this.state.fullname3}</span>
              <span className="widgetSmUserTitle">{this.state.date3}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src={this.state.img4}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{this.state.fullname4}</span>
              <span className="widgetSmUserTitle">{this.state.date4}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src={this.state.img5}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{this.state.fullname5}</span>
              <span className="widgetSmUserTitle">{this.state.date5}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
