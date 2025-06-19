import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable specific rules here
      "react/jsx-no-target-blank": "off", // Disable the rule for opening links in new tab
      "no-console": "off", // Show warning for console logs
      "react/prop-types": "off", // Disable PropTypes validation
      "react/no-unescaped-entities": "off", // Disable the rule for unescaped entities
    },
  },
];

export default eslintConfig;
