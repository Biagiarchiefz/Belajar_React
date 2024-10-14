const Input = (probs) => {
  const { placeholder, type, name } = probs;
  return (
    <input
      type={type}
      name={name}
      className="border-solid border-2 border-sky-500 rounded py-1 px-3 placeholder= opacity-50 w-full"
      placeholder={placeholder}
      id={name}
    />
  );
};

export default Input;
