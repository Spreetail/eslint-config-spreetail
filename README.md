# eslint-config-spreetail
This package provides an extensible [ESLint](https://github.com/eslint/eslint) configuration with a preference for helping developers avoid errors and find mistakes without being forced to adhere to opinionated, stylistic rules. It is intended for use with ES6+ projects.

This configuration is used and maintained by [Spreetail](http://spreetail.com/).

## Installation
You will need [ESLint](https://www.npmjs.com/package/eslint) as a dependency.
```bash
npm install eslint --save-dev
```

This package can be installed from [npm](https://www.npmjs.com/package/eslint-config-spreetail):
```bash
npm install eslint-config-spreetail --save-dev
```

## Usage
Once installed, add `"extends": "spreetail"` to your project's `.eslintrc` file:
```json
{
    "extends":  "spreetail"
}
```

If you are using a module bundler such as [webpack](https://webpack.js.org/) or [rollup.js](https://rollupjs.org/), be sure to add `"sourceType": "module"` to a `"parserOptions"` section of your project's `.eslintrc` file as well:
```json
{
    "parserOptions": {
        "sourceType": "module"
    }
}
```

## Rules
Every rule in the configuration is documented here with an explanation of its inclusion.

### Philosophy
The purpose of this configuration is to aid developers rather than to coerce conformity.
Therefore, it may be a bit less strict than other configurations.
Great care has been taken to ensure all the rules provide a worthwhile benefit to any developer.

#### Warnings vs Errors
Rules which raise an **error** inform the developer, "This is going to break now or sometime in the future, is a security vulnerability, or will lead to poor performance."
Developers should be cautious when disabling these rules.

Rules which raise a **warning** inform the developer, "This is probably indicative of a mistake or might not behave as one would expect."
Developers can be more comfortable disabling these rules but are encouraged to understand why the rules exist and evaluate alternatives.

Rules marked here with an asterisk (\*) will issue warnings rather than errors.

### [Possible Errors](http://eslint.org/docs/rules/#possible-errors)

#### [no-await-in-loop](http://eslint.org/docs/rules/no-await-in-loop)
This will lead to poor performance. Use `Promise.all()` instead.

#### [no-compare-neg-zero](http://eslint.org/docs/rules/no-compare-neg-zero)\*
Comparing to `-0` will pass for 0 and -0 which is confusing.

#### [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition)\*
This is almost certainly a mistake.

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

#### [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign)\*
Reassigning to an exception in a `catch` block is destructive.

#### [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi)\*
This is almost certainly a mistake.

#### [no-func-assign](http://eslint.org/docs/rules/no-func-assign)\*
Reassigning a function declaration (outside of the function itself) is probably a mistake and otherwise will lead to extremely confusing code.

#### [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp)
This will throw an error.

#### [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls)
This is not allowed as of ES5.

#### [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins)\*
It's not safe to assume the default `Object.prototype` methods are accessible by every object since it's possible to create objects without the default prototype.

#### [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays)\*
This is almost certainly a mistake.

#### [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string)\*
This is almost certainly a mistake. Backticks (\`) were probably intended.

#### [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)\*
This may not behave as expected due to [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion).

#### [no-unreachable](http://eslint.org/docs/rules/no-unreachable)\*
This is almost certainly a mistake.

#### [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)\*
This does not behave as expected.

#### [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation)\*
This is almost certainly a mistake.

#### [use-isnan](http://eslint.org/docs/rules/use-isnan)\*
Comparisons directly to `NaN` do not behave as expected.

#### [valid-typeof](http://eslint.org/docs/rules/valid-typeof)\*
This is almost certainly a mistake.

### [Best Practices](http://eslint.org/docs/rules/#best-practices)

#### [array-callback-return](http://eslint.org/docs/rules/array-callback-return)\*
This is almost certainly a mistake.

#### [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)\*
`var` scoping is [confusing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting).

#### [consistent-return](http://eslint.org/docs/rules/consistent-return)\*
This is almost certainly a mistake.

#### [curly](http://eslint.org/docs/rules/curly)\*
Omitting curly braces can lead to code that does not behave as expected. For example:
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

The [multi-line](https://eslint.org/docs/rules/curly#multi-line) option for this rule is enabled, meaning brackets may be omitted for single-line statements:
```JavaScript
if (foo) bar();
```

#### [eqeqeq](http://eslint.org/docs/rules/eqeqeq)\*
The `==` and `!=` operators use type coercion which [may not behave as expected](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3).
Be explicit and use `===` and `!==` instead.
The [smart](http://eslint.org/docs/rules/eqeqeq#smart) option for this rule is enabled.

#### [no-caller](http://eslint.org/docs/rules/no-caller)
This is not allowed as of ES5.

#### [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations)\*
This does not behave as expected.

#### [no-div-regex](http://eslint.org/docs/rules/no-div-regex)\*
This is almost certainly a mistake.

#### [no-empty-function](http://eslint.org/docs/rules/no-empty-function)\*
This is almost certainly a mistake.

#### [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern)\*
This is almost certainly a mistake.

#### [no-eq-null](http://eslint.org/docs/rules/no-eq-null)\*
This does not behave as expected.

#### [no-eval](http://eslint.org/docs/rules/no-eq-null)
While there may be valid use cases for `eval()`, they are extremely rare, and `eval()` can be dangerous.

#### [no-extend-native](http://eslint.org/docs/rules/no-extend-native)\*
Modifying built-in prototypes can cause conflicts with other scripts and libraries.
Use a function instead:
```javascript
// BAD
String.prototype.getLength = function() {
    return this.length;
}
const helloLength = 'hello'.getLength();

// GOOD
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
This might be a mistake.
Be explicit to avoid confusion:
```javascript
// BAD
const globalVar = 'hello';

// GOOD
window.globalVar = 'hello'; // in the browser
// or
global.globarVar = 'hello'; // in Node
```

#### [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)
See [no-eval](#no-eval).

#### [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this)
This will throw an error in strict mode.

#### [no-iterator](http://eslint.org/docs/rules/no-iterator)\*
This is obsolete as of ES6.

#### [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)\*
This is almost certainly a mistake.

#### [no-loop-func](http://eslint.org/docs/rules/no-loop-func)\*
This does not behave as expected.

#### [no-new](http://eslint.org/docs/rules/no-new)\*
This is almost certainly a mistake.

#### [no-new-func](http://eslint.org/docs/rules/no-new-func)
See [no-eval](#no-eval).

#### [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)\*
This does not behave as expected.

#### [no-octal](http://eslint.org/docs/rules/no-octal)
This is deprecated as of ES5.

#### [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)
This is deprecated as of ES5.

#### [no-proto](http://eslint.org/docs/rules/no-proto)
This is deprecated as of ES3.1.

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

#### [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal)\*
Only `Error` objects should be thrown, as they provide information about where they originated.
Code set up to handle thrown objects typically expect that only `Error` objects will be thrown.

#### [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)\*
This is almost certainly a mistake.

#### [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)\*
This is almost certainly a mistake.

#### [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)\*
This is almost certainly a mistake.

#### [prefer-promise-reject-errors](http://eslint.org/docs/rules/prefer-promise-reject-errors)\*
There is an expectation that Promises will only reject with an `Error` object.
This ensures Promise rejections can be handled consistently.

#### [radix](http://eslint.org/docs/rules/radix)\*
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

Due to [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion), in this example a semicolon will be inferred after the `return` statement and `getValue()` will actually return `undefined`, *not* the object that was probably intended to be returned.
For this reason, the "[one true brace style](https://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS_.28OTBS.29)" is enforced by this configuration.

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
Use semicolons instead of relying on ASI.

### [ECMAScript 6](http://eslint.org/docs/rules/#ecmascript-6)

#### [constructor-super](http://eslint.org/docs/rules/constructor-super)
This will raise a runtime error.

#### [no-class-assign](http://eslint.org/docs/rules/no-class-assign)\*
This is almost certainly a mistake.

#### [no-const-assign](http://eslint.org/docs/rules/no-const-assign)
This will raise a runtime error.

#### [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members)\*
This is almost certainly a mistake.

#### [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports)\*
This is almost certainly a mistake.

#### [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol)
This will throw a `TypeError`.

#### [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super)
This raises a reference error.

#### [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key)\*
This is almost certainly a mistake.

#### [no-var](http://eslint.org/docs/rules/no-var)\*
[`var` behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) can be confusing and unexpected.
Use `const` or `let` instead.
See [this article](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75) for more information.

#### [prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params)
The `arguments` object does not behave as expected.
It is "array-like" rather than a real array.
Instead of using `arguments`, use [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

#### [require-yield](http://eslint.org/docs/rules/require-yield)\*
This is almost certainly a mistake.

#### [symbol-description](http://eslint.org/docs/rules/symbol-description)
This will throw a `TypeError`.

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT).
