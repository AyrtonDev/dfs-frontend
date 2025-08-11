import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { globalIgnores } from "eslint/config"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import eslintImport from "eslint-plugin-import"
import prettier from "eslint-plugin-prettier"
import eslintTailwindcss from "eslint-plugin-tailwindcss"

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: eslintImport,
      prettier,
      tailwindcss: eslintTailwindcss,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/no-duplicates": "warn",
      "import/newline-after-import": "warn",
      "import/first": "warn",
      "react-refresh/only-export-components": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
  },
])
