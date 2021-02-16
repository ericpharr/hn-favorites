export const FeedContainer = ({ children, ...props }) => {
  return (
    <div className="container mx-auto mb-5 bg-white rounded shadow-lg md:w-5/6 lg:w-7/12">
      {children}
    </div>
  );
};

export const ItemsContainer = ({ children, ...props }) => {
  return (
    <div className="overflow-hidden bg-white border border-t-0 border-gray-500 rounded rounded-t-none">
      {children}
    </div>
  );
};

export const Item = (props) => {
  return (
    <div className="flex px-4 py-2 border-b border-gray-200">
      <div className="flex-grow w-90">
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
      <div className="grid place-items-center">
        <label className="inline-flex items-center">
          <input
            className="mr-1 text-indigo-500 form-checkbox"
            name="favorite"
            value={props.id}
            type="checkbox"
            checked={props.favorite}
            onChange={props.toggleFavorite}
          />
          Favorite
        </label>
      </div>
    </div>
  );
};

export const Tabs = ({ children, ...props }) => {
  return (
    <ul className="flex justify-between overflow-hidden bg-transparent border border-b-0 border-gray-500 rounded rounded-b-none">
      {children}
    </ul>
  );
};

export const Tab = ({ children, active, ...props }) => {
  return (
    <li
      className={`capitalize flex-grow px-2 py-1 text-center ${
        active
          ? "bg-white font-bold border-b-0 border-r border-gray-400 last:border-r-0"
          : "shadow-inner shadow-xl text-gray-700 bg-indigo-50 border-b border-r border-gray-400 last:border-r-0"
      }`}
      {...props}
    >
      {children}
    </li>
  );
};
