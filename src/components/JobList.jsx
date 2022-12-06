import { useDispatch, useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from '../Store/positions/position-selectors';
import { selectFilters } from '../Store/filters/filters-selectors';
import { addFilter } from '../Store/filters/filters-actions';


const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    const position = useSelector((state) =>
        selectVisiblePositions(state, currentFilters)
    );

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    };

    return (
        <div className="job-list">
            {position.map(item => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    )
}

export { JobList };