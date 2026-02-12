## Bug Example: Order Fulfillment Stock Corruption

### Problem
Order fulfillment could result in negative stock values or partially applied changes.

### Cause
- Stock and quantity values were not validated.
- Mutations occurred directly on the original data.
- Failures during processing left orders in an inconsistent state.

### Fix
- Added validation for stock and quantity values.
- Implemented a deep copy to prevent unintended mutation.
- Added rollback logic to restore original state on failure.