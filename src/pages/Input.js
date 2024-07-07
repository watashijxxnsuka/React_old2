import React,{useState} from "react";

const Input = () => {
  const [txtValue, setTxtValue] = useState('');

  const onChangeTxt = (e) => {
    setTxtValue(e.target.value)
  };

    return (
      <div>
        <input type="text" value={txtValue} onChange={onChangeTxt} />
        <br />
        <p>{txtValue}</p>
      </div>
    );
};

export default Input;
