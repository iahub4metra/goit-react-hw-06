import css from "./SearchBox.module.css"
const SearchBox = ({value, onFilter}) => {
    return (
        <div>
            <p className={css.labelSearch}>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={value} onChange={(e) => {
                onFilter(e.target.value)
            }} name="filteredSearch" />
        </div>
    )
}
export default SearchBox