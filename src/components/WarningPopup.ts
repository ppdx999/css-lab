import { html } from "lit-html";
import { popupOff } from "./Popup";

export const WarningPopup = ({ popupOff }: popupOff) =>
  html`
    <style>
      .right {
        display: flex;
        justify-content: flex-end;
        padding: 5%;
      }
      .close-icon {
        display: block;
        position: relative;
        width: 30px;
        height: 30px;
        background-color: white;
        cursor: pointer;
      }

      .close-icon::before,
      .close-icon::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 27px;
        background: #333;
      }

      .close-icon::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      .close-icon::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    </style>
    <div>
      <div class="right">
        <span class="close-icon" @click=${popupOff}></span>
      </div>
      <h1>Warning</h1>
      <p>これから先は危険がいっぱいです。注意して進んでください</p>
    </div>
  `;
