// import product from "/image/shoes.jpg";
// import ButtonBaru from "../components/Elements/Button/Index";
import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import ButtonBaru from "../components/Elements/Button/Index";


const products = [
  {
    id: 1,
    nama: "Sepatu Bekas",
    price: "Rp. 900.000",
    image: "/image/shoes.jpg",
    description: "ini sepatu keren jangan lupa di beli yaa adik adik",
  },

  {
    id: 2,
    nama: "Sepatu Bekas",
    price: "Rp. 900.000",
    image: "/image/shoes.jpg",
    description: "aku anak sehat tubuhku kuat karna ibu ku rajin dan cermat semasa aku bayi selalu di beri asih makan bergizi dan imunisasi",
  },


  {
    id: 3,
    nama: "Sepatu Bekas",
    price: "Rp. 900.000",
    image: "/image/shoes.jpg",
    description: "aku anak sehat tubuhku kuat karna ibu ku rajin dan cermat semasa aku bayi selalu di beri asih makan bergizi dan imunisasi",
  },
];



const email = localStorage.getItem("email")

const ProductsPages = () => {

  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/login"
  }

  return (
   <Fragment>
    <div className="bg-blue-600 h-20 text-white font-bold flex justify-end px-5 items-center gap-4"> {email} 
      <ButtonBaru classname="bg-red-600 " onClick={handleLogout}>Logout</ButtonBaru>
      
    </div>


     <div className="flex justify-center py-2 ">
      {products.map((product) => (
        
        <CardProduct key = {product.id}>
          <CardProduct.hed image={product.image}/>
          <CardProduct.bod sepatu={product.nama}>{product.description}</CardProduct.bod>
          <CardProduct.foot harga={product.price}></CardProduct.foot>
        </CardProduct>

      ))}
      ;
    </div>

  
   </Fragment>
  );
};

export default ProductsPages;
