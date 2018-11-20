//添加class
export function addClass(el, className) {
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}