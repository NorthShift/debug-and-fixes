# Bug Example: Calendar Ajax Preview

## Problem
The original code threw `TypeError` errors when trying to read input values or update the preview element.  
This happened when one or more elements did not exist on the page or were empty.

## Cause
- The code accessed DOM elements without checking if they existed.  
- `XMLHttpRequest` response was written to the preview element without verifying its presence.  
- Empty input values were not handled safely.

## Fix
- Added checks to ensure all required elements exist before accessing their values.  
- Cleared the preview safely if all input values are empty.  
- Used `XMLHttpRequest` correctly and updated the preview element only after the request completed.  
- Now the code runs safely on page load and avoids null errors.