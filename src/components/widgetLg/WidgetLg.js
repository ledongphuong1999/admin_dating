import axios from "axios";
import { Component } from "react";
import { URLDefault } from "../../api/urlDefault";
import "./widgetLg.css";

export default class WidgetLg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname1: '',
      age1: '',
      img1: '',
      fullname2: '',
      age2: '',
      img2: '',
      fullname3: '',
      age3: '',
      img3: '',
      fullname4: '',
      age4: '',
      img4: '',
    }
  }
  componentWillMount = () => {
    axios({
      method: 'POST',
      url: `${URLDefault}/getinfoListOnl`,
      data: {}
    }).then(res => {
      this.setState({
        fullname1: res.data.InfoAccount[0].fullname,
        age1: res.data.InfoAccount[0].age,
        img1: res.data.InfoAccount[0].imageUri.uri,

        fullname2: res.data.InfoAccount[1].fullname,
        age2: res.data.InfoAccount[1].age,
        img2: res.data.InfoAccount[1].imageUri.uri,

        fullname3: res.data.InfoAccount[2].fullname,
        age3: res.data.InfoAccount[2].age,
        img3: res.data.InfoAccount[2].imageUri.uri,

        fullname4: res.data.InfoAccount[3].fullname,
        age4: res.data.InfoAccount[3].age,
        img4: res.data.InfoAccount[3].imageUri.uri,
      })
    }).catch(error => {
      console.log(error);
    });
  }
  Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  render() {
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Status User</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Age</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={this.state.img1}
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{this.state.fullname1}</span>
            </td>
            <td className="widgetLgDate">{this.state.age1}</td>
            <td className="widgetLgStatus">
              <this.Button type="Online" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={this.state.img2}
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{this.state.fullname2}</span>
            </td>
            <td className="widgetLgDate">{this.state.age2}</td>
            <td className="widgetLgStatus">
              <this.Button type="Online" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={this.state.img3}
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{this.state.fullname3}</span>
            </td>
            <td className="widgetLgDate">{this.state.age3}</td>
            <td className="widgetLgStatus">
              <this.Button type="Online" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={this.state.img4}
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{this.state.fullname4}</span>
            </td>
            <td className="widgetLgDate">{this.state.age4}</td>
            <td className="widgetLgStatus">
              <this.Button type="Online" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
