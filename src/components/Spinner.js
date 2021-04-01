import { useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
function Spinner() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const override = css`
    display: block;
    margin: 0 auto;
    border:dotted
  `;
    return (
      <div className="sweet-loading">
      <ClipLoader color={color} loading={loading} css={override} size={70} />
    </div>
    );
  }
  export default Spinner;