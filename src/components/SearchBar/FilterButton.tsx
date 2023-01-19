import { useSelector, useDispatch } from 'react-redux';
import { showFilterSet } from '../../store/reducers/search';
import { RootState } from '../../store/configureStore';

const FilterButton = () => {
    // state control variable
    const showFilter = useSelector((store : RootState) => store.search.showFilter);
    
    const filterButtonContent = `${showFilter ? "Disable" : "Apply"} Filter`;

    const dispatch = useDispatch();

    const toggleFilter = () => {
        dispatch(showFilterSet(null));
    }

    return (<button className='btn col-2' onClick={toggleFilter}>{filterButtonContent}</button>)
}

export default FilterButton;