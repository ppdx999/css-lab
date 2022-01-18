import { html } from "lit-html";
import { Popup, popupOn } from "./Popup";
import { WarningPopup } from "./WarningPopup";

const _WarningButton = ({ popupOn }: popupOn) =>
  html`<button @click=${popupOn}>Warning</button>`;

export const WarningButton = Popup(WarningPopup)(_WarningButton);
