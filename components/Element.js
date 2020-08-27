import { html } from 'https://unpkg.com/spux?module'

var spux

globalThis.findById = (subject, arr) => {
  arr = arr || spux

  return arr.find(a => {
    if (a.children && a.children.length > 0) {
      return a['@id'] === subject ? true : findById(a.children, subject)
    } else {
      return a['@id'] === subject
    }
  })
  return a
}

const Element = props => {
  var lo = findById(props.id)
  if (!lo) return
  var type = props.view || lo['@type']
  if (!type) return
  props.lo = lo

  return eval(type)(props)
}

export default Element
