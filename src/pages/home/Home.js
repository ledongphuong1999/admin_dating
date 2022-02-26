import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { Component } from "react";
import { Visibility } from "@material-ui/icons";
import { URLDefault } from "../../api/urlDefault";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="User Numbers" />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    );
  }
}
