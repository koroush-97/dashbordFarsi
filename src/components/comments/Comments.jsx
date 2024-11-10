import React, { useEffect, useState } from "react";
import Errorbox from "../errorbox/Errorbox";
import Deteailsmodal from "../../deteilesmodal/Deteailsmodal";
import DeleteModal from "../deletmodal/DeleteModal";
import EditModal from "../Editmodal/EditModal";
import "./Comments.css";
import "../../cms.css";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailmodal, setisShowDetailmodal] = useState(false);
  const [isShowDeletemodal, setisShowDeletemodal] = useState(false);
  const [isShowEditmodal, setisShowEditmodal] = useState(false);
  const [isShowAcceptmodal, setisShowAcceptmodal] = useState(false);
  const [mainCommentBody, setmainCommentBody] = useState("");
  const [CommentID, setCommentID] = useState(null);

  const closeAcceptModal = () => {setisShowAcceptmodal(false)}
  const acceptComment = () => {

    fetch(`http://localhost:8000/api/comments/accept/${CommentID}` , {
      method : 'POST'
    }).then(res => res.json())
    .then( result => {
      console.log(result);
      setisShowAcceptmodal(false)
      getallcomments()
      console.log('درخواست تایید اجرا شد');
    } )

    setisShowAcceptmodal(false)
  }    

  useEffect(() => {
    getallcomments();
  }, []);

  function getallcomments() {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((Comment) => setAllComments(Comment));
  }

  const closeDetailModal = () => setisShowDetailmodal(false);
  const closeDeleteModal = () => setisShowDeletemodal(false);
  const closeEditModal = () => setisShowEditmodal(false);

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${CommentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setisShowDeletemodal(false);
        getallcomments();
      });

    setisShowDeletemodal(false);
  };

  const updatecomment = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/comments/${CommentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: mainCommentBody,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setisShowEditmodal(false);
        getallcomments();
      });
  };

  return (
    <div className="css-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم محصول</th>
              <th> محصول</th>
              <th>کامنت</th>
              <th> تاریخ</th>
              <th>ساعت </th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((Comment) => (
              <tr key={Comment.id}>
                <td>{Comment.userID}</td>
                <td>{Comment.productID}</td>
                <td>
                  <button
                    className="text-modal-close-btn"
                    onClick={() => {
                      setisShowDetailmodal(true);
                      setmainCommentBody(Comment.body);
                      setCommentID(Comment.id);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{Comment.date}</td>
                <td>{Comment.hour}</td>
                <td style={{ display: "flex" }}>
                  <button
                    onClick={() => {
                      setisShowDeletemodal(true);
                      setCommentID(Comment.id);
                    }}
                    className="text-modal-close-btn"
                  >
                    حذف
                  </button>
                  <button
                    className="text-modal-close-btn"
                    onClick={() => {
                      setisShowEditmodal(true);
                      setmainCommentBody(Comment.body);
                    }}
                  >
                    ویرایش
                  </button>
                  <button className="text-modal-close-btn">پاسخ</button>
                  <button className="text-modal-close-btn" onClick={ () => {
                       setisShowAcceptmodal(true) 
                       setCommentID(Comment.id , console.log(Comment.id) )
                  }} >تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد" />
      )}

      {isShowDetailmodal && (
        <Deteailsmodal onHide={closeDetailModal}>
          <p className="text-modal">{mainCommentBody}</p>
        </Deteailsmodal>
      )}

      {isShowDeletemodal && (
        <DeleteModal
          title="آیا از حذف اطمینان دارین ؟"
          cancle={closeDeleteModal}
          submit={deleteComment}
        />
      )}
      {isShowEditmodal && (
        <EditModal onClose={closeEditModal} onsubmit={updatecomment}>
          <textarea
            value={mainCommentBody}
            onChange={(event) => setmainCommentBody(event.target.value)}
          ></textarea>
        </EditModal>
      )}
      {isShowAcceptmodal && (
        <DeleteModal
          title="آیا از تایید اطمینان دارین ؟"
          cancle={closeAcceptModal}
          submit={acceptComment}
        />
      )}
    </div>
  );
}
