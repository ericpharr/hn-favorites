export const Input = (props) => (
  <input
      className="w-full px-2 py-2 mb-2 border border-gray-500 rounded focus:ring-indigo-100 focus:ring-4 focus:outline-none"
    {...props}
  />
);

export const FormTitle = ({ children, ...props }) => (
  <h1 className="w-full mt-1 mb-2 text-2xl font-bold text-center" {...props}>
    {children}
  </h1>
);

export const FormContainer = ({ children, ...props }) => (
    <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md grid place-items-center sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
      {children}
    </div>
);

export const Button = ({ children, ...props }) => (
  <button
    className="w-full px-8 py-2 my-2 font-bold text-center text-white uppercase bg-indigo-500 rounded"
    {...props}
  >
    {children}
  </button>
);

export const FormLabel = ({children, ...props}) => (
    <label htmlFor={props.for} className="mt-4 mb-0 leading-none">
        {children}
    </label>
)

export const ErrorSpan = ({children, ...props}) => <span className="ml-2 text-sm text-red-400"{...props}>{children}</span>
