import React, { Component } from 'react';
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
//background: linear-gradient(135deg, ${colors.pink400} 0%, ${colors.purple400} 100%);
const ButtonContainer = styled("button")`
    padding: 1em 2em;
    background: ${colors.green500};
    font-weight: 600;
    color: ${colors.grey900};
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: 2px;
    position: relative;
    transition: background 100ms ease-in-out;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        padding: 0.8em 1.8em;
        font-size: 1em;
    }

    p {
        margin: 0;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${colors.green600};
        z-index: -1;
    }

    &:hover {
        cursor: pointer;
        background: transparent;
        transition: background 100ms ease-in-out;
    }

    &.Button--secondary {
        border-style: solid;
        border-width: 3px;
        border-color: ${colors.green500};
        background-color: ${colors.grey900};
        color: ${colors.grey100};
        padding: 0.95em 1.8em;
        font-size: 0.95rem;

        &:hover {
            background: ${colors.green500};
            color: ${colors.grey900};
            transition: all 100ms ease-in-out;
        }
    }
`

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <ButtonContainer
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </ButtonContainer>
        );
    }
}

export default Button;