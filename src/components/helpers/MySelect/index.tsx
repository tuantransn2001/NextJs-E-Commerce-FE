/* eslint-disable import/extensions */
import { ChangeEventHandler } from 'react';
import './style/MySelect.scss';

interface MySelectProps {
  placeholder: string;
  options: { id: string; content: string }[];
  onChange: ChangeEventHandler;
}

const MySelect = ({ placeholder, options, onChange }: MySelectProps) => {
  return (
    <div className="select-dropdown">
      <select placeholder={placeholder} onChange={onChange}>
        {options.map((p) => (
          <option value={p.id} key={p.content}>
            {p.content}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
