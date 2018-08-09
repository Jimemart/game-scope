export const reduceNews = (news, ownProps) => {
  if(!ownProps.location.pathname.includes('game'))
  return news

  const half = Math.floor(news.length / 2)
  const myNews = [...news]
  const rest = myNews.slice(0, half)
  return rest
}
