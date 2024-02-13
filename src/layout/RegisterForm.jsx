import axios from 'axios';
import { useState } from "react";


export default function RegisterForm() {
  const [input, setInput] = useState({
    username: '',
    firstname: '',
    lastname: '',
    age: '', // เปลี่ยนเป็น string
    phone: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const hdlChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();
      // Validation
      if (input.password !== input.confirmPassword) {
        return alert('Please check confirm password');
      }

      // แปลงค่า "age" เป็นตัวเลข
      const userData = {
        username: input.username,
        firstname: input.firstname,
        lastname: input.lastname,
        age: parseInt(input.age), // แปลงค่าเป็นตัวเลข
        phone: input.phone,
        address: input.address,
        email: input.email,
        password: input.password,
        confirmPassword: input.confirmPassword,
      };

      const response = await axios.post('http://localhost:8001/auth/register', userData);
      console.log(response);
      if (response.data.msg === 'Registration successful') {
        alert('Register Successful');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

 
  return (
    <div className="background-container1">
      <div className="border2">
        <div className="text-3xl text-center mb-5 mt-3">สมัครใช้งาน</div>
        <form className="form2" onSubmit={hdlSubmit}>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ชื่อผู้ใช้:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="username"
              value={input.username}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ชื่อ:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="firstname"
              value={input.firstname}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">นามสกุล:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="lastname"
              value={input.lastname}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">อายุ:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="age"
              value={input.age}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">เบอร์โทรศัพท์ :</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="phone"
              value={input.phone}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ที่อยู่ :</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="address"
              value={input.address}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">อีเมล :</span>
            </div>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              name="email"
              value={input.email}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">รหัสผ่าน :</span>
            </div>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              name="password"
              value={input.password}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ยืนยันรหัสผ่าน :</span>
            </div>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={hdlChange}
            />
          </label>

          <div className="center-button mt-7">
            <button type="submit" className="bg-red-500 text-white border border-white py-3 px-6 rounded hover:bg-pink-300">
              สมัคร
            </button>
          </div>

          <div className="login-link">
            <a href="/login">กลับไปที่หน้า Login</a>
          </div>

        </form>
      </div>
    </div>
  );
}
