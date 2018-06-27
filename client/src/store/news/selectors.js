import { createSelector } from 'reselect'
import { reduceNews } from './helpers'

export const getNews = (state) => {
  return state.newsReducer.news
}


export const currentNews = (ownProps) => createSelector(
  (getNews),
    news => reduceNews(news, ownProps)
)
