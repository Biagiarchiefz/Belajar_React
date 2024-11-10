// import product from "/image/shoes.jpg";
// import ButtonBaru from "../components/Elements/Button/Index";
import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import ButtonBaru from "../components/Elements/Button/Index";
import { getProduct } from "../services/product.services";

const products = [
  {
    id: 1,
    nama: "Sepatu Bekas",
    price: 900000,
    image: "/image/shoes.jpg",
    description: "ini sepatu keren jangan lupa di beli yaa adik adik",
  },

  {
    id: 2,
    nama: "Sepatu Bekas",
    price: 1000000,
    image: "/image/shoes.jpg",
    description:
      "aku anak sehat tubuhku kuat karna ibu ku rajin dan cermat semasa aku bayi selalu di beri asih makan bergizi dan imunisasi",
  },

  {
    id: 3,
    nama: "Sepatu Bekas",
    price: 5000000,
    image: "/image/shoes.jpg",
    description:
      "aku anak sehat tubuhku kuat karna ibu ku rajin dan cermat semasa aku bayi selalu di beri asih makan bergizi dan imunisasi",
  },
];

const email = localStorage.getItem("email");

const ProductsPages = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="bg-blue-600 h-20 text-white font-bold flex justify-end px-5 items-center gap-4">
        {" "}
        {email}
        <ButtonBaru classname="bg-red-600 " onClick={handleLogout}>
          Logout
        </ButtonBaru>
      </div>

      <div className="flex justify-center py-2 ">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>

                <CardProduct.hed image={product.image}/>

                <CardProduct.bod sepatu={product.title}>
                  {product.description}
                </CardProduct.bod>

                <CardProduct.foot
                  harga={product.price}
                  handleAddToCart={handleAddToCart}
                  id={product.id}
                ></CardProduct.foot>

              </CardProduct>
            ))}
        </div>

        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && 
              cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPages;
