# eslint-config-spreetail
This package provides an extensible [eslint](https://github.com/eslint/eslint) configuration used by [Spreetail](http://spreetail.com/).

## Installation
You will need [eslint](https://www.npmjs.com/package/eslint) installed.
```
npm install eslint-config-spreetail --save-dev
```

## Usage
Once installed, add `"extends": "spreetail"` to your `.eslintrc` file:
```
{
    "extends":  "spreetail"
}
```

## Explanations
Every rule in the configuration should be documented here with an explanation of its inclusion.
It's important to include only rules with clear benefits and avoid rules which amount to little more than personal preference.
This is to maintain a balance of best practices and consistency with the freedom to write code without opinionated restrictions. The goal is to aid developers rather than to coerce conformity.

### [no-await-in-loop](http://eslint.org/docs/rules/no-await-in-loop)
This will lead to poor performance. Use `Promise.all()` instead.

### [no-compare-neg-zero](http://eslint.org/docs/rules/no-compare-neg-zero)
Comparing to `-0` will pass for 0 and -0 which is confusing.

### [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args)
Duplicate arguments in a function definition are almost certainly an error.

### [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys)
Duplicate keys in an object literal are almost certainly an error.

### [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case)
Duplicate case clauses are almost certainly an error.

### [no-empty](http://eslint.org/docs/rules/no-empty)
Empty block statements are almost certainly unintentional and may be a sign of incomplete code.

### [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class)
Empty character classes won't match anything and are probably just a sign of unfinished regex.

### [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign)
Reassigning to an exception in a `catch` block is destructive.

### [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi)
This is probably leftover from refactoring code.

### [no-func-assign](http://eslint.org/docs/rules/no-func-assign)
Reassigning a function declaration (outside of the function itself) is probably a mistake and otherwise will lead to extremely confusing code.

### [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp)
These will throw errors anyway.

### [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls)
This is not allowed as of ES5 anyway.

### [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins)
It's not safe to assume the default `Object.prototype` methods exist since it's possible to create objects without the default prototype.

### [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays)
This is almost certainly a typo.

### [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string)
This is almost certainly a typo. The developer probably intended to use backticks (\`).

### [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)
This may not behave as expected due to JavaScript's [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion).

### [no-unreachable](http://eslint.org/docs/rules/no-unreachable)
This is almost certainly a mistake.

### [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)
This does not behave as expected.

### [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation)
This is almost certainly a mistake.

### [use-isnan](http://eslint.org/docs/rules/use-isnan)
Comparisons directly to `NaN` do not behave as expected.

### [valid-typeof](http://eslint.org/docs/rules/valid-typeof)
This is almost certainly a typo.
