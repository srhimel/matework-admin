import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  note: '',
  conditions: {
    condition_0: [
      {
        operand: 'IF',
        match_by: 'product_price',
        condition: 'is_equal_to',
        value: ''
      }
    ]
  },
  active: false
}

const formatCondition = (con) => {
  let condition = {}
  let index = 0
  for (let i = 0; i < con.length; i++) {
    if (con[i].operand === 'OR IF') {
      index += 1
    }
    if (!condition[`condition_${index}`]) condition[`condition_${index}`] = []
    condition[`condition_${index}`].push(con[i])
  }

  return condition
}

export const segmentsRulesSlice = createSlice({
  name: 'feedsRules',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload.name
    },
    changeNote: (state, action) => {
      state.note = action.payload.note
    },
    addAndCondition: (state, action) => {
      state.conditions[action.payload.id].push({
        operand: 'AND',
        match_by: '',
        condition: '',
        value: ''
      })
    },
    addOrCondition: (state, action) => {
      state.conditions[action.payload.id] = [
        {
          operand: 'OR IF',
          match_by: '',
          condition: '',
          value: ''
        }
      ]
    },
    deleteAndCondition: (state, action) => {
      state.conditions[action.payload.id].splice(action.payload.index, 1)
    },
    deleteOrCondition: (state, action) => {
      delete state.conditions[action.payload.id]
    },
    manipulateInput: (state, action) => {
      state.conditions[action.payload.id][action.payload.index][
        action.payload.field
      ] = action.payload.value
    },
    saveCondition: (state, action) => {
      state.name = action.payload.name
      state.conditions = formatCondition(action.payload.conditions)
      state.active = action.payload.active
    },
    restoreCondition: (state) => {
      state.name = initialState.name
      state.conditions = initialState.conditions
      state.active = initialState.active
    },
    changeActive: (state, action) => {
      state.active = action.payload.active
    },
    changeExit: (state, action) => {
      state.exit = action.payload.exit
    }
  }
})

export const {
  changeName,
  changeNote,
  addAndCondition,
  addOrCondition,
  deleteAndCondition,
  deleteOrCondition,
  manipulateInput,
  saveCondition,
  restoreCondition,
  changeExit,
  changeActive
} = segmentsRulesSlice.actions

export default segmentsRulesSlice.reducer
