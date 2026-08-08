import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  type: 'input' | 'select';
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  options?: SelectOption[];
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  label,
  value,
  placeholder,
  options,
  required = false,
  onChange,
  className = 'form-control',
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      
      {type === 'input' && (
        <input
          type="text"
          className={className}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      )}
      
      {type === 'select' && (
        <select
          className={className}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="">{placeholder || 'Select an option'}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FormField; 