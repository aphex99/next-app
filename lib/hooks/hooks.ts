import { AppDispatch, AppStore, RootState } from '@/lib/store';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<RootState>();
