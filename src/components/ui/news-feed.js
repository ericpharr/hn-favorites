export const FeedContainer = ({ children, ...props }) => {
  return (
    <div className="container mx-auto mb-5 bg-white rounded shadow-lg md:w-5/6 lg:w-7/12">
      {children}
    </div>
  );
};

export const ItemsContainer = ({ children, ...props }) => {
  return (
    <div className="bg-white border border-t-0 border-gray-800 rounded rounded-t-none">
      {children}
    </div>
  );
};

export const Item = (props) => {
  return (
    <div className="px-4 py-2 border-b border-gray-200">
      <a
        href={props.url}
        target="_blank"
        rel="noopenner noreferrer"
        className="text-indigo-600 "
      >
        <h2>{props.title}</h2>
      </a>
      <p>{props.by}</p>
    </div>
  );
};

export const Tabs = ({ children, ...props }) => {
  return (
      <ul className="flex justify-between overflow-hidden bg-transparent border border-b-0 border-gray-800 rounded rounded-b-none">
      {children}
    </ul>
  );
};

export const Tab = ({ children, active, ...props }) => {
  return (
    <li
      className={`flex-grow px-2 py-1 text-center ${
        active
          ? "bg-white font-bold border-b-0 border-r border-gray-400"
          : "shadow-inner shadow-xl text-gray-700 bg-indigo-50 border-b border-r border-gray-400 last:border-r-0"
      }`}
    >
      {children}
    </li>
  );
};
