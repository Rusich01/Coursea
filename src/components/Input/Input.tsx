const Input = ({ type, placeholder, className, id }: any) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
