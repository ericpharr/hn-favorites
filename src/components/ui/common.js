export const Button = ({ children, ...props }) => (
  <button
    className="w-full px-8 py-2 my-2 font-bold text-center text-white uppercase bg-indigo-500 rounded"
    {...props}
  >
    {children}
  </button>
);

