import { useSelector, useStore } from 'react-redux';
import type { AppStore, RootState } from '.';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
