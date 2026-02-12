## Bug Example: Missing Non-Urgent Messages

### Problem
Non-urgent messages were silently dropped from the formatted output.

### Cause
- Non-urgent messages were not appended to the output array.
- The method relied on side effects instead of explicit returns.

### Fix
- Ensured all messages are added to the output array.
- Normalized message data to prevent missing keys.
- The formatter now correctly outputs both urgent and non-urgent messages.