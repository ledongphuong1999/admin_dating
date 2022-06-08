import "./payment.css";
import "./loader.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import { URLDefault } from "../../api/urlDefault";

export default class PaymentList extends Component {
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
          url: `${URLDefault}/getPaymentList`,
          data: {}
        }).then(res => {
            var paymentList = res.data.PaymentList.map(x => x * 2)
          this.setState({
            data: res.data.PaymentList,
            isLoading: false,
          })
        }).catch(error => {
          console.log(error);
          this.setState({
            isLoading: false,
          })
        });
      }


    render() {
        return (
            <div className="userList">{
                this.state.isLoading ? (<div class="loader"></div>) :
                    (
                        <DataGrid
                            rows={this.state.data}
                            disableSelectionOnClick
                            columns={[{ field: "_id", headerName: "ID", width: 200 },
                            // {
                            //     field: "user",
                            //     headerName: "User",
                            //     width: 200,
                            //     renderCell: (params) => {
                            //         return (
                            //             <div className="userListUser">
                            //                 <img className="userListImg" src={params.row.imageUri.uri} alt="" />
                            //                 {params.row.fullname}
                            //             </div>
                            //         );
                            //     },
                            // },
                            {
                                field: "username",
                                headerName: "Account",
                                width: 150
                            },
                            {
                                field: "itemname",
                                headerName: "Item",
                                width: 150,
                            },
                            {
                                field: 'cost',
                                headerName: "Cost($)",
                                width: 150,
                            },
                            {
                                field: 'date',
                                headerName: "Time",
                                width: 200,
                            },
                            {
                                field: "tradingcode",
                                headerName: "Trading code",
                                width: 330,
                            }
                            ]}
                            pageSize={10}
                            checkboxSelection
                            getRowId={(row) => row._id}
                        />
                    )}
            </div>
        );
    }
}
