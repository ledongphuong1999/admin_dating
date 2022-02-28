import axios from "axios";
import { Component } from "react";
import { URLDefault } from "../../api/urlDefault";
import "./newUser.css";

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullname: '',
      gender: true,
      email: '',
      phone: '',
      address: '',
      msg: '',
    }
  }
  onSignUp = () => {
    axios({
      method: 'POST',
      url: `${URLDefault}/createAccountAdmin`,
      data: {
        username: this.state.username,
        password: this.state.password,
        fullname: this.state.fullname,
        gender: this.state.gender,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address
      }
    }).then(res => {
      console.log(res.data);
      if (res.data.length > 0) {
        alert(res.data[0].msg)
      }
      else {
        alert('Đã đăng ký thành công')
      }
    }).catch(error => {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="newUser">
        <h1 className="newUserTitle">Request New Admin</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Full name</label>
            <input type="text" placeholder="Le Ngoc Dong Phuong" onChange={event => {
              this.setState({
                fullname: event.target.value
              })
            }} />
          </div>
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="phuonglnd" onChange={event => {
              this.setState({
                username: event.target.value
              })
            }} />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="phuonglnd@gmail.com" onChange={event => {
              this.setState({
                email: event.target.value
              })
            }} />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" onChange={event => {
              this.setState({
                password: event.target.value
              })
            }} />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" onChange={event => {
              this.setState({
                phone: event.target.value
              })
            }} />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="Đà Nẵng | Việt Nam" onChange={event => {
              this.setState({
                address: event.target.value
              })
            }} />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
            </div>
          </div>
          <button className="newUserButton" onClick={() => this.onSignUp()}>Create</button>
        </form>

      </div>
    );
  }
}
