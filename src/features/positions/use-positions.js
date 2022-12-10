import { useSelector } from 'react-redux';

import { selectVisiblePositions } from './position-slice';
import { selectFilters } from '../filter/filter-slice';


export const usePositions = () => {
    const currentFilters = useSelector(selectFilters);
    return useSelector((state) => selectVisiblePositions(state, currentFilters));
}