import { configureStore } from '@reduxjs/toolkit'
import dateRangeReducer from './features/dateRange/dateRangeSlice'
import segmentsRulesSlice from './features/segmentRules/segmentsRulesSlice'
import feedRulesSlice from './features/feedRules/feedRulesSlice'

export const store = configureStore({
  reducer: {
    dateRange: dateRangeReducer,
    segmentsRules: segmentsRulesSlice,
    feedRules: feedRulesSlice
  }
})
