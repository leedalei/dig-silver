/**
 * 滚动条转跳到指定位置
 */
export function scrollTo(element, to = 0, duration = 300) {
  if (duration <= 0) return
  const difference = to - element.scrollTop
  const perTick = (difference / duration) * 10

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop == to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}
