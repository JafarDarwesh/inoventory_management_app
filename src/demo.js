import React,{useState} from 'react';

export default function App() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleChange2 = () => {
    setChecked2(!checked2);
  };

  return (
    <div>
      <Checkbox
        label="A"
        value={checked}
        onChange={handleChange}
      />
      <Checkbox
        label="B"
        value={checked2}
        onChange={handleChange2}
      />

      <p>Is "My Value" checked? {checked.toString()}:{checked2.toString()}</p>
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <div>
          <label>
      <input type="checkbox" checked={value} onChange={onChange} />
        {label}
    </label>
<br/>
</div>  );

}
