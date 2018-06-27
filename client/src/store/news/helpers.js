export const reduceNews = (news, ownProps) => {
  if(!ownProps.location.pathname.includes('game'))
  return news

  const half = Math.ceil(news.length / 2)
  const rest = news.splice(0, half)
  return rest
}
