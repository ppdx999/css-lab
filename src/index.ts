export type state<T> = (update: (prev: T) => T) => T;
export const genState = <T>(initialState: T) => {
  let state = initialState;

  return (update: (prev: T) => T) => {
    const prevState = state;
    state = update(prevState);
    if (state !== prevState) renderApp();
    return state;
  };
};

export const id = <T>(a: T) => a;
export const inc = (prev: number) => prev + 1;
export const dec = (prev: number) => prev - 1;
export const add = (left: number) => (right: number) => left + right;
export const trueIO = () => true;
export const falseIO = () => false;
export const toggle = (prev: boolean) => !prev;

// IMPORTANT: Intentionally Delay Import To Avoid Cyclic Dependency
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
