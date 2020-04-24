import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

// example of puttings things outside of css string
// const color = "#333";

const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

const NavBar = () => {
    const [padding, setPadding] = useState(15);

    return (
        <header
            // onClick={() => setPadding(padding + 15)}
            css={css`
                background-color: ${colors.secondary};
                padding: ${padding}px;
            `}
        >
            <Link to="/">Adopt Me!</Link>
            <span
                css={css`
                    font-size: 60px;
                    display: inline-block;
                    /* animation: 1s ${spin} linear infinite; */

                    &:hover {
                        animation: 1s ${spin} linear infinite reverse;
                        text-decoration: underline;
                    }
                `}
                role="img"
                aria-label="logo"
            >
                🐶
            </span>
        </header>
    );
};

export default NavBar;
