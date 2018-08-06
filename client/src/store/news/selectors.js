import { createSelector } from 'reselect'
import { get } from 'lodash'
import { reduceNews } from './helpers'

export const getNews = (state) => {
  return state.newsReducer.news
}

export const getRelevant = (state) => {
  return get(state.newsReducer.relevant, 'data')
}


export const currentNews = (ownProps) => createSelector(
  (getNews),
    news => reduceNews(news, ownProps)
)

export const getRelevantNews = createSelector(
  getRelevant,
  relevant => relevant
)
