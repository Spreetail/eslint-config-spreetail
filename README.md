# eslint-config-spreetail
This package provides an extensible [eslint](https://github.com/eslint/eslint) configuration used by [Spreetail](http://spreetail.com/).

This is intended for use with ES6+ projects.

## Installation
You will need [eslint](https://www.npmjs.com/package/eslint) installed.

This package can be installed from npm:
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
The purpose of this configuration is to aid developers rather than to coerce conformity.

Rules with an asterisk (\*) will issue warnings rather than errors.

### [Possible Errors](http://eslint.org/docs/rules/#possible-errors)

#### [no-await-in-loop](http://eslint.org/docs/rules/no-await-in-loop)
This will lead to poor performance. Use `Promise.all()` instead.

#### [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition)\*
This is almost certainly a mistake.

#### [no-compare-neg-zero](http://eslint.org/docs/rules/no-compare-neg-zero)
Comparing to `-0` will pass for 0 and -0 which is confusing.

#### [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args)\*
This is almost certainly a mistake.

#### [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys)\*
This is almost certainly a mistake.

#### [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case)\*
This is almost certainly a mistake.

#### [no-empty](http://eslint.org/docs/rules/no-empty)\*
Empty block statements are almost certainly unintentional and may be a sign of incomplete code.

#### [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class)\*
Empty character classes won't match anything and are probably just a sign of unfinished regex.

#### [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign)
Reassigning to an exception in a `catch` block is destructive.

#### [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi)\*
This is almost certainly a mistake.

#### [no-func-assign](http://eslint.org/docs/rules/no-func-assign)
Reassigning a function declaration (outside of the function itself) is probably a mistake and otherwise will lead to extremely confusing code.

#### [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp)
These will throw errors anyway.

#### [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls)
This is not allowed as of ES5 anyway.

#### [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins)
It's not safe to assume the default `Object.prototype` methods are accessible by every object since it's possible to create objects without the default prototype.

#### [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays)\*
This is almost certainly a mistake.

#### [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string)\*
This is almost certainly a mistake. Backticks (\`) were probably intended.

#### [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)
This may not behave as expected due to [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion).

#### [no-unreachable](http://eslint.org/docs/rules/no-unreachable)\*
This is almost certainly a mistake.

#### [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)
This does not behave as expected.

#### [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation)\*
This is almost certainly a mistake.

#### [use-isnan](http://eslint.org/docs/rules/use-isnan)
Comparisons directly to `NaN` do not behave as expected.

#### [valid-typeof](http://eslint.org/docs/rules/valid-typeof)\*
This is almost certainly a mistake.

### [Best Practices](http://eslint.org/docs/rules/#best-practices)

#### [array-callback-return](http://eslint.org/docs/rules/array-callback-return)\*
This is almost certainly a mistake.

#### [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)
`var` scoping is [broken and confusing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting).
This rules prevents accidental usage.

#### [consistent-return](http://eslint.org/docs/rules/consistent-return)\*
This is almost certainly a mistake.

#### [curly](http://eslint.org/docs/rules/curly)
Omitting curly braces can lead to extremely confusing code. For example:
```javascript
if (foo)
    bar();
    baz();
```

This is actually equivalent to:
```javascript
if (foo) {
    bar();
}
baz();
```

Any benefits of omitting curly braces is surely outweighed by the potential for confusion.

#### [eqeqeq](http://eslint.org/docs/rules/eqeqeq)
The `==` and `!=` operators use type coercion which [may not behave as expected](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3).
Be explicit and use `===` and `!==` instead.

#### [no-alert](http://eslint.org/docs/rules/no-alert)
The default `alert`, `confirm`, and `prompt` UI elements will block the event loop (not to mention they are horrid).

#### [no-caller](http://eslint.org/docs/rules/no-caller)
This is not allowed as of ES5 anyway.

#### [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations)
This does not behave as expected.

#### [no-div-regex](http://eslint.org/docs/rules/no-div-regex)\*
This is almost certainly a mistake.

#### [no-empty-function](http://eslint.org/docs/rules/no-empty-function)\*
This is almost certainly a mistake.

#### [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern)\*
This is almost certainly a mistake.

#### [no-eq-null](http://eslint.org/docs/rules/no-eq-null)
This does not behave as expected.

#### [no-eval](http://eslint.org/docs/rules/no-eq-null)
While there may be valid use cases for `eval()`, you probably aren't writing one of them.

#### [no-extend-native](http://eslint.org/docs/rules/no-extend-native)
Modifying built-in prototypes can cause conflicts with other scripts and libraries.
Use a function instead:
```javascript
// Bad
String.prototype.getLength = function() {
    return this.length;
}
const helloLength = 'hello'.getLength();

// Good
function getStringLength(string) {
    return string.length;
}
const helloLength = getStringLength('hello');
```

#### [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind)\*
This is almost certainly a mistake.

#### [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough)\*
This is far more likely to be a mistake than intentional.

#### [no-global-assign](http://eslint.org/docs/rules/no-global-assign)\*
This is almost certainly a mistake.

#### [no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals)\*
This may conflict with other scripts and libraries and should be avoided.

#### [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)
See [no-eval](#no-eval).

#### [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this)
This will throw an error in strict mode anyway.

#### [no-iterator](http://eslint.org/docs/rules/no-iterator)
This is obsolete as of ES6.

#### [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)
This is almost certainly a mistake.

#### [no-loop-func](http://eslint.org/docs/rules/no-loop-func)
This does not behave as expected.

#### [no-new](http://eslint.org/docs/rules/no-new)
`new` should only be used with constructors.

#### [no-new-func](http://eslint.org/docs/rules/no-new-func)
See [no-eval](#no-eval).

#### [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)
This does not behave as expected.

#### [no-octal](http://eslint.org/docs/rules/no-octal)
This is deprecated as of ES5 anyway.

#### [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)
This is deprecated as of ES5 anyway.

#### [no-proto](http://eslint.org/docs/rules/no-proto)
This is deprecated as of ES3.1 anyway.

#### [no-redeclare](http://eslint.org/docs/rules/no-redeclare)\*
This is almost certainly a mistake.

#### [no-return-await](http://eslint.org/docs/rules/no-return-await)\*
This is almost certainly a mistake.

#### [no-script-url](http://eslint.org/docs/rules/no-script-url)
See [no-eval](#no-eval).

#### [no-self-assign](http://eslint.org/docs/rules/no-self-assign)\*
This is almost certainly a mistake.

#### [no-self-compare](http://eslint.org/docs/rules/no-self-compare)\*
This is almost certainly a mistake.

#### [no-sequences](http://eslint.org/docs/rules/no-sequences)\*
This is more likely to be a mistake than intentional.

#### [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal)
Only `Error` objects should be thrown, as they provide information about where they originated.

#### [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)\*
This is almost certainly a mistake.

#### [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)\*
This is almost certainly a mistake.

#### [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)\*
This is almost certainly a mistake.

#### [no-with](http://eslint.org/docs/rules/no-with)
This is too ambiguous. Use a new variable instead:
```javascript
my.really.long.variable.has.some.properties.named = {
    thing1: 'and',
    thing2: '!'
};

// BAD
with (my.really.long.variable.has.some.properties.named) {
    console.log(thing1, thing2);
}

// GOOD
const named = my.really.long.variable.has.some.properties.named;
console.log(named.thing1, named.thing2);
```

#### [prefer-promise-reject-errors](http://eslint.org/docs/rules/prefer-promise-reject-errors)
Promises should always reject with an `Error` object so the consumers know exactly what to expect.
Additionally, `Error` objects provide information about where they originated.

#### [radix](http://eslint.org/docs/rules/radix)
Calling `parseInt()` with a string that starts with '0' will force evaluation as an octal, which is almost certainly a mistake. Always pass the intended radix parameter (probably `10`):
```javascript
// BAD
parseInt('071'); // returns 57

// GOOD
parseInt('071', 10); // returns 71
```

#### [require-await](http://eslint.org/docs/rules/require-await)\*
This is almost certainly a mistake.

#### [wrap-iife](http://eslint.org/docs/rules/wrap-iife)
Attempting to immediately execute a function declaration will cause a `SyntaxError`.
This should be wrapped in parentheses instead.

### [Strict Mode](http://eslint.org/docs/rules/#strict-mode)

#### [strict](http://eslint.org/docs/rules/strict)
This should be in strict mode.

### [Variables](http://eslint.org/docs/rules/#variables)

#### [no-undef](http://eslint.org/docs/rules/no-undef)\*
This is almost certainly a mistake (or perhaps you need to specify [your project's environment](http://eslint.org/docs/user-guide/configuring#specifying-environments) or [its globals](http://eslint.org/docs/user-guide/configuring#specifying-globals) in your `.eslintrc` file).

#### [no-undefined](http://eslint.org/docs/rules/no-undefined)
This may not behave as expected. Use `typeof myVar === 'undefined'` instead.

#### [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)\*
This is almost certainly a mistake.

#### [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)\*
[`var` hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) can lead to confusing code.
If variables are used before they are declared, it may be indicative of a mistake.

### [Stylistic Issues](http://eslint.org/docs/rules/#stylistic-issues)

#### [brace-style](http://eslint.org/docs/rules/brace-style)
In most cases, curly brace placement is a matter of personal preference (and such rules do not belong is this configuration).
However, there is one situation in which curly brace placement may alter the behavior of code:
```javascript
// BAD
function getValue()
{
    return
    {
        value: 'here it is!'
    };
}
```

Due to [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion), in this example a semicolon will be replaced after the `return` statement and `getValue()` will actually return `undefined`, *not* the object that was probably intended to be returned. For this reason, [the one true brace style](https://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS_.28OTBS.29) is enforced by this configuration. Turn it off if you must.

```javascript
// GOOD
function getValue() {
    return {
        value: 'here it is!'
    };
}
```

#### [comma-dangle](http://eslint.org/docs/rules/comma-dangle)
This is for the sole purpose of generating cleaner git diffs.

#### [new-cap](http://eslint.org/docs/rules/new-cap)\*
Only constructors should begin with a capital letter to act as a visual differentiator between constructors and other functions or properties.

#### [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)
This may not behave as expected. For example:
```javascript
// BAD
const myArray = new Array(1, 2); // [1, 2]

const myOtherArray = new Array(3); // [undefined, undefined, undefined]
```

Use array literals (`[]`) instead:
```javascript
// GOOD
const myArray = [1, 2]; // [1, 2]

const myOtherArray = [3]; // [3]
```

#### [semi](http://eslint.org/docs/rules/semi)
[Automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) may not behave as expected.

### [ECMAScript 6](http://eslint.org/docs/rules/#ecmascript-6)

#### [constructor-super](http://eslint.org/docs/rules/constructor-super)
This will raise a runtime error anyway.

#### [no-class-assign](http://eslint.org/docs/rules/no-class-assign)\*
This is almost certainly a mistake.

#### [no-const-assign](http://eslint.org/docs/rules/no-const-assign)
This will raise a runtime error anyway.

#### [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members)\*
This is almost certainly a mistake.

#### [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports)\*
This is almost certainly a mistake.

#### [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol)
This will throw a `TypeError` anyway.

#### [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super)
This raises a reference error anyway.

#### [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key)\*
This is almost certainly a mistake.

#### [no-var](http://eslint.org/docs/rules/no-var)\*
[`var` behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) can be confusing and may not behave as expected.
Use `const` or `let` instead.
See [this article](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75) for more information.

#### [prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params)
The `arguments` object does not behave as expected.
It is "array-like" rather than a real array.
Instead of using `arguments`, use [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

#### [require-yield](http://eslint.org/docs/rules/require-yield)\*
This is almost certainly a mistake.

#### [symbol-description](http://eslint.org/docs/rules/symbol-description)
This will throw a `TypeError` anyway.

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT).
