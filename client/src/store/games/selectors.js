import { get } from 'lodash'
import { createSelector } from 'reselect'
import { arrayOfFile, formatFile } from './helpers'

export const singleGame = state => state.gamesReducer.game
export const getFile = state => get(state, 'gamesReducer.game.file')

export const getFileFormated = createSelector(
  getFile,
   (file) => formatFile(file)
)

export const getArrayFormated = createSelector(
  getFileFormated,
  file => arrayOfFile(file)
)
