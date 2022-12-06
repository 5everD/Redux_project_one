import {useSelector, useDispatch} from "react-redux";
import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';
import {selectFilters} from "../Store/filters/filters-selectors";
import {removeFilter, clearFilter} from "../Store/filters/filters-actions";


const FilterPanel = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);

    if (currentFilters.length === 0) return null;

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map(filter =>
                        <Badge
                            key={filter}
                            variant="clearable"
                            onClear={() => dispatch(removeFilter(filter))}
                        >
                            {filter}
                        </Badge>
                    )}
                </Stack>

                <button
                    className='link'
                    onClick={() => dispatch(clearFilter)}
                >
                    Clear
                </button>
            </div>
        </Card>
    )
}

export {FilterPanel};