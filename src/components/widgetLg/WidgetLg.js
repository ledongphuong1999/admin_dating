import axios from "axios";
import { Component } from "react";
import { URLDefault } from "../../api/urlDefault";
import "./widgetLg.css";
export default class WidgetLg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentWillMount = () => {
    axios({
      method: 'POST',
      url: `${URLDefault}/getinfoListOnl`,
      data: {}
    }).then(res => {
      this.setState({
        data: res.data.InfoAccount,
      })
      console.log('online ne', res.data.InfoAccount)
    }).catch(error => {
      console.log(error);
      this.setState({
      })
    });
  }

  Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  render() {
    const listItems = this.state.data.map((user) =>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src={user.imageUri.uri}
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{user.fullname}</span>
        </td>
        <td className="widgetLgDate">{user.age}</td>
        <td className="widgetLgStatus">
          <this.Button type="Online" />
        </td>
      </tr>);
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Users Online</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Age</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {listItems}
        </table>
      </div>
    );
  }
}
