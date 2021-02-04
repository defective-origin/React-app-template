import slice, { ISomeSlice } from './slice-name.slice'

type TSliceContainer = Record<string, ISomeSlice>

export const getSlice = (store: TSliceContainer): ISomeSlice => store[slice.name]

export const getName = (store: TSliceContainer): string => getSlice(store).name || 'Anonymous'
export const getSalary = (store: TSliceContainer): number => getSlice(store).salary
export const getTags = (store: TSliceContainer): string[] => getSlice(store).tags
export const getLoadingFlag = (store: TSliceContainer) => getSlice(store).loading
