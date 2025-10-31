/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: ["node_modules", "dist", ".next"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parser: import("@typescript-eslint/parser") },
    plugins: {
      "@typescript-eslint": import("@typescript-eslint/eslint-plugin"),
      import: import("eslint-plugin-import"),
    },
    rules: {
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc" },
          groups: [
            ["builtin", "external", "internal"],
            ["parent", "sibling", "index"],
          ],
        },
      ],
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "./src/components",
              from: "./src/server",
              message: "UI cannot import server-only code",
            },
          ],
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "no-restricted-imports": ["error", { patterns: ["../server/*"] }],
    },
  },
];
