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
