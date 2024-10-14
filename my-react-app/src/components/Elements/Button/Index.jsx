// menggunakan arrow function

const ButtonBaru = (probs) => {
  // style default
  // kalau kita menggunakan ini tidak usah lagi menggunakan probs
  const { classname = "bg-slate-600", onClick = () => {}, type = "button" } = probs;
  return (
    // menggunakan  dolar ketika menangkap variable saja
    <button
      className={`rounded-lg  ${classname} p-2.5 text-white`}
      type= { type }

      // event hendler onClick di dalamnya ada function
      onClick={ () => onClick() }
    >
      {probs.children}
    </button>
  );
};

export default ButtonBaru;
