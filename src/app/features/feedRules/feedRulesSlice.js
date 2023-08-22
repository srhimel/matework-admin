import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'abc',
  note: '',
  conditions: {
    condition_0: [
      {
        operand: 'IF',
        match_by: '',
        condition: '',
        value: ''
      }
    ]
  },
  active: false
}

export const feedsRulesSlice = createSlice({
  name: 'feedsRules',
  initialState,
  reducers: {
    feedState: (state) => state,
    changeFeedName: (state, action) => {
      state.name = action.payload.name
    },
    changeFeedNote: (state, action) => {
      state.note = action.payload.note
    },
    addAndConditionFeed: (state, action) => {
      state.conditions[action.payload.id].push({
        operand: 'AND',
        match_by: '',
        condition: '',
        value: ''
      })
    },
    addOrConditionFeed: (state, action) => {
      state.conditions[action.payload.id] = [
        {
          operand: 'OR IF',
          match_by: '',
          condition: '',
          value: ''
        }
      ]
    },
    deleteAndConditionFeed: (state, action) => {
      state.conditions[action.payload.id].splice(action.payload.index, 1)
    },
    deleteOrConditionFeed: (state, action) => {
      delete state.conditions[action.payload.id]
    },
    manipulateInputFeed: (state, action) => {
      state.conditions[action.payload.id][action.payload.index][
        action.payload.field
      ] = action.payload.value
    },
    saveConditionFeed: (state, action) => {
      state.name = action.payload.name
      state.conditions = action.payload.conditions
      state.active = action.payload.active
    },
    restoreConditionFeed: (state) => {
      state.name = initialState.name
      state.conditions = initialState.conditions
      state.active = initialState.active
    },
    changeActiveFeed: (state, action) => {
      state.active = action.payload.active
    },
    changeExitFeed: (state, action) => {
      state.exit = action.payload.exit
    }
  }
})

export const {
  feedState,
  changeFeedName,
  changeFeedNote,
  addAndConditionFeed,
  addOrConditionFeed,
  deleteAndConditionFeed,
  deleteOrConditionFeed,
  manipulateInputFeed,
  saveConditionFeed,
  restoreConditionFeed,
  changeExitFeed,
  changeActiveFeed
} = feedsRulesSlice.actions

export default feedsRulesSlice.reducer
