# Bug Example: Custom JSON Stringifier

## Problem
The code throws a `TypeError` when trying to convert `null` or `undefined` values.  
This happens because the program tries to access the keys of a `null` or `undefined` object.

## Cause
- The original code only checked for the string `'null'` instead of the actual `null` value.  
- `Object.keys()` was called on `null` or `undefined`, causing a crash.  

## Fix
- Added a check for real `null` values before calling `Object.keys()`.  
- Ensured `undefined` and functions are handled correctly.  
- The rest of the logic for numbers, booleans, strings, arrays, and objects now works safely.
