import React, {  useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../deletmodal/DeleteModal";
import Deteailsmodal from "../../deteilesmodal/Deteailsmodal";
import EditModal from "../Editmodal/EditModal";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Errorbox from "../errorbox/Errorbox";

export default function ProductsTable({ allproducts , getAllProducts }) {
  const deleteModalsubmitAction = () => {
    console.log("مدال تایید شد ");

    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resaultDelet) => {
        setisShowDeleteModal(false);
        getAllProducts();
      });
    console.log(productId);
  };

  const deleteModalcancelAction = () => {
    setisShowDeleteModal(false);
  };

  const closebtnmodal = () => {
    SetisshowDetilesModal(false);
  };

  const updateProductInfos = (e) => {
    e.preventDefault();
    const productsNewinfos = {
      title : productNewTitle,
      price : productNewPrice,
      count : productNewCount,
       img: productNewImg,
       popularity: productNewPopularity,
       sale: productNewSale,
       colors: productNewColors,
    }

    fetch(`http://localhost:8000/api/products/${productId}` , {
      method: 'PUT' , 
      headers: {'Content-type' : 'application/json'} ,
      body : JSON.stringify(productsNewinfos)
    }).then(res => res.json())
    .then(result => {
      console.log(result);
      getAllProducts()
      SetisshowEditModal(false)
    })

  };

  const [isshowDeleteModal, setisShowDeleteModal] = useState(false);
  const [isshowDetilesModal, SetisshowDetilesModal] = useState(false);
  const [isshowEditModal, SetisshowEditModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");


  return (
    <>
      {allproducts.length ? (
        <table className="Products-table">
          <thead>
            <tr className="Products-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>

          <tbody>
            {allproducts.map((product) => (
              <tr key={product.id} className="Products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt="img-products"
                    className="products-table-img"
                  />
                </td>
                <td> {product.title}</td>
                <td>{product.price} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      SetisshowDetilesModal(true);
                      setMainProductInfos(product);
                    }}
                  >
                    جزئیات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setisShowDeleteModal(true);
                      setProductId(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      SetisshowEditModal(true);
                      setProductId(product.id)
                      setProductNewTitle(product.title)
                      setProductNewPrice(product.price)
                      setProductNewCount(product.count)
                      setProductNewImg(product.img)
                      setProductNewPopularity(product.popularity)
                      setProductNewSale(product.sale)
                      setProductNewColors(product.colors)

                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      )}

      {isshowDetilesModal && (
        <Deteailsmodal onHide={closebtnmodal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th> محبوبیت </th>
                <th> فروش </th>
                <th> رنگ بندی </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th> {mainProductInfos.popularity} </th>
                <th> {mainProductInfos.sale} </th>
                <th> {mainProductInfos.colors} </th>
              </tr>
            </tbody>
          </table>
        </Deteailsmodal>
      )}

      {isshowDeleteModal && (
        <DeleteModal
        title="آیا از حذف اطمینان دارین ؟"
          submit={deleteModalsubmitAction}
          cancle={deleteModalcancelAction}
        />
      )}
      {isshowEditModal && (
        <EditModal
          onClose={() => SetisshowEditModal(false)}
          onsubmit={updateProductInfos}
        >
          <div className="edit-products-from-group">
            <span>
              <MonetizationOnOutlinedIcon />
            </span>

            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-inpuit"
              value={productNewTitle}
              onChange={ (event) => setProductNewTitle(event.target.value) }
            />
          </div>

          <div className="edit-products-from-group">
            <span>
              <MonetizationOnOutlinedIcon />
            </span>

            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-inpuit"
              value={productNewPrice}
              onChange={ (event) => setProductNewPrice(event.target.value) }
            />
          </div>

          <div className="edit-products-from-group">
            <span>
              <MonetizationOnOutlinedIcon />
            </span>

            <input
              type="text"
              placeholder="آدرس کاور جدید را وارد کنید"
              className="edit-product-inpuit"
              value={productNewImg}
              onChange={ (event) => setProductNewImg(event.target.value) }
            />
          </div>
          <div className="edit-products-from-group">
            <span>
              <MonetizationOnOutlinedIcon />
            </span>

            <input
              type="text"
              placeholder="موجودی  را وارد کنید"
              className="edit-product-inpuit"
              value={productNewCount}
              onChange={ (event) => setProductNewCount(event.target.value) }
            />
          </div>
          <div className="edit-products-from-group">
            <span>
              <MonetizationOnOutlinedIcon />
            </span>

            <input
              type="text"
              placeholder="محبوبیت محصول را وارد کنید"
              className="edit-product-inpuit"
              value={productNewPopularity}
              onChange={(event) => setProductNewPopularity(event.target.value)}
            />
          </div>
          <div className="edit-products-from-group">
            <span>
              <MonetizationOnOutlinedIcon />
            </span>

            <input
              type="text"
              placeholder="میزان فروش را وارد کنید"
              className="edit-product-inpuit"
              value={productNewSale}
              onChange={ (event) => setProductNewSale(event.target.value) }
            />
          </div>
          <div className="edit-products-from-group">
            <span>
              <MonetizationOnOutlinedIcon />
            </span>

            <input
              type="text"
              placeholder="تعداد رنگ بندی را وارد کنید"
              className="edit-product-inpuit"
              value={productNewColors}
              onChange={ (event) => setProductNewColors(event.target.value) }
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
