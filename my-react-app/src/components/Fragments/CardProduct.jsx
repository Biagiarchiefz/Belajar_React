import ButtonBaru from "../Elements/Button/Index";

const CardProduct = (probs) => {
  const { children } = probs;
  return (
    <div className="w-full max-w-sm bg-slate-500 border border-gray-700 rounded-lg shadow mx-3 flex flex-col justify-between">
      {children}
    </div>
  );
};




const Header = (probs) => {
  const {image} = probs;  
  return (
    <a href="/login">
      <img src={image} alt="" className="p-8 rounded-[10%]" />
    </a>
  );
};

const Body = (probs) => {
  const { children, sepatu } = probs
  return (
    <div className="px-5 pb-3 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {sepatu}
        </h5>
        <p className="text-sm text-white">
         {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (probs) => {
  const { harga } = probs
  return (
    <div className="flex items-center justify-between px-5 pb-2">
      <span className="text-xl font-bold text-white"> { harga } </span>
      <ButtonBaru classname="bg-blue-600">Add to card</ButtonBaru>
    </div>
  );
};


CardProduct.hed = Header;
CardProduct.bod = Body;
CardProduct.foot = Footer;


export default CardProduct;
