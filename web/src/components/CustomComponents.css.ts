import { classNames, vars } from "@seed-design/design-token";
import { style } from "@vanilla-extract/css";

import * as t from "../styles/token.css";
import * as u from "../styles/utils.css";

export const h1 = style([t.documentHeading1]);

export const h2 = style([t.documentHeading2]);

export const h3 = style([t.documentHeading3]);

export const h4 = style([t.documentHeading4]);

export const ol = style([
  {
    paddingInlineStart: 0,
  },
]);

export const oli = style([
  classNames.$semantic.typography.bodyL1Regular,
  u.flexAlignCenter,
  {
    marginBottom: "8px",

    "::before": {
      content: "counter(list-item)",
      counterIncrement: "list-item",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      fontSize: "12px",
      fontWeight: "bold",
      width: "24px",
      height: "24px",
      borderRadius: "50%",

      marginRight: "8px",

      backgroundColor: vars.$scale.color.gray900,
      color: vars.$scale.color.gray00,
    },
  },
]);