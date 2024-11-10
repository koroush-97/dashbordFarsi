import React, { useEffect, useState } from "react";
import Errorbox from "../errorbox/Errorbox";
import "./Users.css";
import "../../cms.css";
import DeleteModal from "./../deletmodal/DeleteModal";
import EditModal from "../Editmodal/EditModal";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Deteailsmodal from '../../deteilesmodal/Deteailsmodal'

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, setIsShowdeletModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainUserID, setMainUserID] = useState(null);

  const [userNewFristName, setuserNewFristName] = useState("");
  const [userNewLastName, setuserNewLastName] = useState("");
  const [userNewUserName, setuserNewUserName] = useState("");
  const [userNewPhone, setuserNewPhone] = useState("");
  const [userNewCity, setuserNewCity] = useState("");
  const [userNewEmail, setuserNewEmail] = useState("");
  const [userNewAddress, setuserNewAddress] = useState("");
  const [userNewBuy, setuserNewBuy] = useState("");
  const [userNewPassword, setuserNewPassword] = useState("");
  const [userNewScore, setuserNewScore] = useState("");

  const [mainUserInfos, setMainUserInfos] = useState({});
  const [isShowDetailesModal , setIsShowDetailesModal] = useState(false)

  useEffect(() => {
    getallusers();
  }, []);

  function getallusers() {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }

  const closeDeleteModal = () => setIsShowdeletModal(false);
  const closeEditModal = () => setIsShowdeletModal(false);
  const CloseDetailesModal = () => setIsShowDetailesModal(false)

  const removeUser = () => {
    console.log("کاربر ریمو شد");
    fetch(`http://localhost:8000/api/users/${mainUserID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowdeletModal(false);
        getallusers();
      });
  };

  const UpdateUser = (event) => {
    event.preventDefault();
    console.log("اطلاعات کاربر مورد نظر آپدیت شد");

    const usernewinfos = {
      firsname: userNewFristName,
      lastname: userNewLastName,
      username: userNewUserName,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    fetch(`http://localhost:8000/api/users/${mainUserID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usernewinfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getallusers();
      });
  };

  return (
    <>
      <div className="cms-main">
        <h1 style={{ marginTop: "10px", fontSize: "1.5rem" }}>لیست کاربران</h1>
        {users.length ? (
          <table className="cms-table">
            <thead>
              <tr>
                <th>نام و نام خانوادگی</th>
                <th>یوزرنیم</th>
                <th>رمز عبور</th>
                <th>شماره تماس </th>
                <th>ایمیل </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {" "}
                    {user.firsname} - {user.lastname}{" "}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td> {user.phone} </td>
                  <td> {user.email} </td>
                  <td style={{ display: "flex" }}>
                    <button
                      className="text-modal-close-btn"
                      onClick={() => {
                        setIsShowEditModal(true);
                        setMainUserID(user.id);
                        setuserNewFristName(user.firsname);
                        setuserNewLastName(user.lastname);
                        setuserNewUserName(user.username);
                        setuserNewPhone(user.phone);
                        setuserNewCity(user.city);
                        setuserNewEmail(user.email);
                        setuserNewAddress(user.address);
                        setuserNewBuy(user.buy);
                        setuserNewPassword(user.password);
                        setuserNewScore(user.score);
                      }}
                    >
                      ویرایش
                    </button>
                    <button
                      className="text-modal-close-btn"
                      onClick={() => {
                        setIsShowdeletModal(true);
                        setMainUserID(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button className="text-modal-close-btn"
                    onClick={ () => {
                      setMainUserInfos(user)
                      setIsShowDetailesModal(true)
                    } }
                    >جزئیات</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Errorbox msg="هیچ کاربری یافت نشد" />
        )}
        {isShowDeleteModal && (
          <DeleteModal
            title=" آیا از حذف اطمینان دارید ؟ "
            cancle={closeDeleteModal}
            submit={removeUser}
          />
        )}
        {isShowEditModal && (
          <EditModal onClose={closeEditModal} onsubmit={UpdateUser}>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewFristName}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewFristName(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewLastName}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewLastName(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewUserName}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewUserName(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewPassword}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewPassword(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewPhone}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewPhone(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewCity}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewCity(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewEmail}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewEmail(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewAddress}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewAddress(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewBuy}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewBuy(event.target.value)}
              />
            </div>
            <div className="edit-user-info-input-group">
              <span>
                <MonetizationOnOutlinedIcon />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                value={userNewScore}
                placeholder="مقدار جدید را وارد نمایید..."
                onChange={(event) => setuserNewScore(event.target.value)}
              />
            </div>
          </EditModal>
        )}
        {
          isShowDetailesModal && (
            <Deteailsmodal
            onHide={CloseDetailesModal}
            >
                      <table className="cms-table">
            <thead>
              <tr>
                <th> شهر </th>
                <th> آدرس </th>
                <th> امتیاز  </th>
                <th> میزان خرید  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>  {mainUserInfos.city} </th>
                <th> {mainUserInfos.address} </th>
                <th> {mainUserInfos.score} </th>
                <th> {mainUserInfos.buy} </th>
              </tr>
            </tbody>
          </table>
            </Deteailsmodal>
          )
        }
      </div>
    </>
  );
}
