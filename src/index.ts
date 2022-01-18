export const state = <T>(initialState: T) => {
  let state = initialState;

  if (typeof state === "object")
    return (newState?: Partial<T>) => {
      if (newState !== undefined) {
        state = { ...state, ...newState };
        renderApp();
      }
      return state;
    };
  else
    return (newState?: T) => {
      if (newState !== undefined) {
        state = newState;
        renderApp();
      }
      return state;
    };
};

// IMPORTANT: To Avoid Cyclic Dependency
import { html, render } from "lit-html";
import { WarningButton } from "./components/WarningButton";

const App = () => html`
  <div>
    <h1>CSS-Lab</h1>
    ${WarningButton()}
  </div>
`;

const renderApp = () => render(App(), document.body);
renderApp();
