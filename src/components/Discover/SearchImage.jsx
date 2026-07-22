
const SearchImage = ({src}) => {
  return (
    <div className="sm:w-80 w-50 h-auto p-2">
      <img src={src} alt="A lupa searching through files"  className="max-h-full w-auto"/>
    </div>
  );
};

export default SearchImage;

  