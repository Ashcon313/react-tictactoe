import React, { Component } from "react";
import { css } from "emotion";

const styles = {
  board: css`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    width: 500px;
    height: 500px;
    background: magenta;
  `,

  square: css``
};

export default class App extends Component {
  render() {
    return (
      <div className={styles.board}>
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
      </div>
    );
  }
}
