## Bug Example: Incorrect Analytics Calculations

### Problem
The average and variance calculations produced incorrect results or failed for empty input.

### Cause
- Integer division caused loss of precision.
- Empty input arrays were not validated.
- Values were not consistently treated as numeric types.

### Fix
- Converted values to floating-point numbers.
- Added validation to prevent empty input.
- Ensured calculations use floating-point division for accuracy.