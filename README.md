# Powers of Two

Powers of Two is a simple React app that contains a self-validating form. The form accepts valid, sequential powers of two (2, 4, 8, 16, 32 for example). These numbers MUST be sequential, so something like 2, 4, 16, 32, 64 won’t work because there is a missing ’8’. This form validates itself as the user types into it. Blank inputs are always valid as we can assume the user has not gotten to them yet. When the form state is invalid, the smallest set of fields that are causing the conflict are marked as incorrect.

## How to run locally
1. Clone repo
2. Navigate to repo
3. Run "npm install"
4. Run "webpack --watch"
5. Copy the full file path for "index.html" into a browser and enjoy!
