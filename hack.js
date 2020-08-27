export default function Post (props) {
  var selected = findById('#ui').selected
  var visibility =
    selected === props.lo['@id'] ? 'email-item-selected' : 'email-item-unread'
  console.log('selected', selected)
  return html`
    <div
      class="email-item pure-g ${visibility}"
      onClick=${() => {
        spux[9].selected = props.lo['@id']
        renderAll()
      }}
    >
      <div class="pure-u">
        <img
          width="64"
          height="64"
          alt="${props.lo.avatar}"
          class="email-avatar"
          src="${props.lo.avatar}"
        />
      </div>

      <div class="pure-u-3-4">
        <h5 class="email-name">${props.lo.author}</h5>
        <h4 class="email-subject">${props.lo.title}</h4>
        <p class="email-desc">
          ${props.lo.description}
        </p>
      </div>
    </div>
  `
}
