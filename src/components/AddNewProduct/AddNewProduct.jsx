import React, { useState } from "react";
import "./AddNewProduct.css";

export default function AddNewProduct({getAllProducts}) {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const newProductsInfos = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColors,
  };

  function empety ()  {
setNewProductTitle("");
setNewProductPrice("");
setNewProductCount("");
setNewProductImg("");
setNewProductPopularity("");
setNewProductSale("");
setNewProductColors("")
  }

  // const addproduct = (event) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:8000/api/products`, {
  //     method: "POST",
  //     headers: {
  //      "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(newProductsInfos),
  //   })
  //       getAllProducts()
  //       empety()
  //     });
  // };



  // const addproduct = (event) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:8000/api/products`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(newProductsInfos),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("خطایی در ارسال داده رخ داده است");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("محصول با موفقیت اضافه شد:", data);
  //       getAllProducts(); // به‌روزرسانی لیست محصولات
  //       empety(); // خالی کردن ورودی‌ها
  //     })
  //     .catch((error) => {
  //       console.error("خطا:", error);
  //     });
  // };
  


  // const addproduct = (event) => {
  //   event.preventDefault();
    
  //   fetch(`http://localhost:8000/api/products`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(newProductsInfos),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("خطایی در ارسال داده رخ داده است");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("محصول با موفقیت اضافه شد:", data);
  //       getAllProducts(); // به‌روزرسانی لیست محصولات
  //       empety(); // خالی کردن ورودی‌ها
  //     })
  //     .catch((error) => {
  //       console.error("خطا:", error);
  //     });
  // };
  
  // const addproduct = (event) => {
  //   event.preventDefault();
    
  //   fetch(`http://localhost:8000/api/products`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newProductsInfos),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("خطایی در ارسال داده رخ داده است");
  //       }
        
  //       // بررسی می‌کنیم که آیا پاسخی وجود دارد
  //       return response.text().then((text) => {
  //         return text ? JSON.parse(text) : {}; // اگر پاسخی بود، آن را به JSON تبدیل می‌کنیم
  //       });
  //     })
  //     .then((data) => {
  //       console.log("محصول با موفقیت اضافه شد:", data);
  //       getAllProducts(); // به‌روزرسانی لیست محصولات
  //       empety(); // خالی کردن ورودی‌ها
  //     })
  //     .catch((error) => {
  //       console.error("خطا:", error);
  //     });
  // };
  

  const addproduct = (event) => {
    event.preventDefault();
    
    fetch(`http://localhost:8000/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProductsInfos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("خطایی در ارسال داده رخ داده است");
        }
        
        // بررسی می‌کنیم که آیا پاسخی وجود دارد
        return response.text().then((text) => {
          return text ? JSON.parse(text) : {}; // اگر پاسخی بود، آن را به JSON تبدیل می‌کنیم
        });
      })
      .then((data) => {
        console.log("محصول با موفقیت اضافه شد:", JSON.stringify(data, null, 2));
        getAllProducts(); // به‌روزرسانی لیست محصولات
        empety(); // خالی کردن ورودی‌ها
      })
      .catch((error) => {
        console.error("خطا:", error);
      });
  };
  
  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>
      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="اسم محصول را وارد کنید"
              value={newProductTitle}
              onChange={(event) => setNewProductTitle(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="قیمت محصول را وارد کنید"
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="موجودی محصول را وارد کنید"
              value={newProductCount}
              onChange={(event) => setNewProductCount(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="آدرس عکس محصول را وارد کنید"
              value={newProductImg}
              onChange={(event) => setNewProductImg(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان محبوبیت محصول را وارد کنید"
              value={newProductPopularity}
              onChange={(event) => setNewProductPopularity(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان فروش محصول را وارد کنید"
              value={newProductSale}
              onChange={(event) => setNewProductSale(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="تعداد رنگ بندی محصول را وارد کنید"
              value={newProductColors}
              onChange={(event) => setNewProductColors(event.target.value)}
            />
          </div>
        </div>
        <button onClick={addproduct} className="add-products-submit">
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
