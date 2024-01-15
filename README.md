# React-Trivia-Game

Play Trivia with me! This is a 20 question Trivia Game with Trivia questions based on the 2000's! It will keep your score and advance you to the next question. Once the game is complete you can see your score and try again!

This project was created with React using Vite and TypeScript.

- Components: 
- StatBar - displays what question you are on and keeps track of score. 
- QuestionCard - displays the question and all answer choices to the question.
- Answers - hold the logic for answers picked. Sets text color to green if correct answer, red if incorrect answer.
- Answer - displays color and disables buttons once pressed on.

Support tutorials:
- https://www.youtube.com/watch?v=SqcY0GlETPk
- https://www.youtube.com/watch?v=Z-7DRZT4DKA
- https://www.youtube.com/watch?v=UX5HIrxbRUc

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
