import { html, TemplateResult } from "lit-html";
import { falseIO, genState, id, state, trueIO } from "..";

export type popupOn = {
  popupOn: () => boolean;
};

export type popupOff = {
  popupOff: () => boolean;
};

export const Popup =
  (Popup: (props: popupOff) => TemplateResult) =>
  (Trigger: (props: popupOn) => TemplateResult) => {
    const visible = genState(false);
    const popupOn = () => visible(trueIO);
    const popupOff = () => visible(falseIO);
    return () => {
      return html`
        ${Trigger({ popupOn })}
        ${visible(id)
          ? html`
              <style>
                .popup {
                  position: fixed;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  background-color: rgba(0, 0, 0, 0.5);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }

                .popup-inner {
                  background-color: white;
                }
              </style>

              <div class="popup">
                <div class="popup-inner">${Popup({ popupOff })}</div>
              </div>
            `
          : null}
      `;
    };
  };
