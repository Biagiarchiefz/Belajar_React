import Input from "./Input";
import Label from "./Label";

const Inputform = (probs) => {
  const { judul, tai, placeholder, name } = probs;

  return (
    <div className="mb-4">
      <Label htmlfor={name}> 

        {judul}
        
      </Label>

      <Input type={tai} placeholder={placeholder} name={name}></Input>
    </div>
  );
};

export default Inputform;
