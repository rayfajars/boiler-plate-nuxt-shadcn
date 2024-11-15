import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-console': 'warn', // Warns on console.log statements
    'no-unused-vars': 'error', // Throws error on unused variables
    'prettier/prettier': 'error', // Ensures Prettier rules are enforced
    'vue/multi-word-component-names': 'off', // Disable multi-word names in Vue components
  },
})
