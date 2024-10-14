
const Label = (probs) => {
  const {htmlfor, children} = probs;
  return (
    <label htmlFor={htmlfor} className="font-bold text-slate-700 text-sm ">
    {children}
    </label>
  );
}

export default Label