const SearchBox = ({ onChangeHandler }) => {
  return (
    <input
      className='search-box'
      type='search'
      placeholder='search for robots'
      onChange={onChangeHandler}
    />
  );
};
export default SearchBox;
