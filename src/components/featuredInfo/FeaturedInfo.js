import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Number of participants by day</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5</span>
          <span className="featuredMoneyRate">
            -1 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last day</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number of participants by month</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>
          <span className="featuredMoneyRate">
            +20 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number of participants by year</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">30</span>
          <span className="featuredMoneyRate">
            +20 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last year</span>
      </div>
    </div>
  );
}
