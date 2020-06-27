// imports
import 'https://unpkg.com/dior'
import { h, html, render, Component } from 'https://unpkg.com/spux?module'
import Plyr from 'https://jspm.dev/plyr'

const MediaObject = props => {
  if (props.contentUrl.includes('youtube.com')) {
    return html`
      <div class="container">
        <div
          id="player"
          data-plyr-provider="youtube"
          data-plyr-embed-id="${props.contentUrl}"
        ></div>
      </div>
    `
  } else if (props.contentUrl.includes('vimeo.com')) {
    return html`
      <div class="container">
        <div
          id="player"
          data-plyr-provider="vimeo"
          data-plyr-embed-id="${props.contentUrl}"
        ></div>
      </div>
    `
  } else {
    return html`
      <video id="player" playsinline controls>
        <source src="${props.contentUrl}" type="video/mp4" />
      </video>
    `
  }
}

export default MediaObject
