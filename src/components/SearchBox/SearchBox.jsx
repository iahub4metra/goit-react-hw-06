import css from "./SearchBox.module.css"
import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"
const SearchBox = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const text = e.target.value
        dispatch(changeFilter(text))
    }
    return (
        <div>
            <p className={css.labelSearch}>Find contacts by name</p>
            <input className={css.searchInput} type="text" onChange={handleChange} name="filteredSearch" />
        </div>
    )
}
export default SearchBox