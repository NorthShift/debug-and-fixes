## Problem
The code tries to initialize the Google Map before the `map_canvas` div exists.  
This causes a `TypeError: Cannot read property 'appendChild' of null`.

## Cause
The DOM element was not yet loaded when `new google.maps.Map` was called.

## Fix
Wrap the initialization in a `DOMContentLoaded` event listener to ensure the element exists before using it.
