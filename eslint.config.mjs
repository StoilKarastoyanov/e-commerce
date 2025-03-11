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
      "max-len": [
        "warn",
        {
          code: 130, // Maximum line length (100 characters)
          tabWidth: 2,
          ignoreUrls: true, // Allow long URLs
          ignoreComments: false, // Enforce max line length in comments too
          ignoreStrings: false, // Enforce max line length in strings too
        },
      ],
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
