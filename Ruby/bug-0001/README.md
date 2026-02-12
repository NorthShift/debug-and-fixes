## Bug Example: Incorrect Most Active User Calculation

### Problem
The `most_active_user` method could return an incorrect user or `nil` even when login data existed.

### Cause
- The maximum login count was not tracked correctly.
- The comparison logic did not reliably update the current maximum value.

### Fix
- Updated the logic to correctly track the highest login count.
- Ensured the associated username is updated when a new maximum is found.
- The method now consistently returns the correct most active user.