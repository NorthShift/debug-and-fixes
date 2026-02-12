## Bug Example: Todo Loader Returns Incomplete Data

### Problem
The todo loader returned incomplete results or stopped processing the file early.

### Cause
- The `todos` array was returned from inside the loop.
- Control flow exited before all lines were processed.
- File input was not handled defensively.

### Fix
- Moved the return statement outside the loop.
- Ensured all lines are processed before returning results.
- Normalized the `done` value to handle invalid or missing data safely.
