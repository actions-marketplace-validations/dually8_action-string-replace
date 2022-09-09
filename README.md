# Action String Replace

This action takes a string and formats it to a format GitHub actions likes.

## Problem

You've received a message like this:

> Artifact name is not valid
> Invalid characters include: Double quote ", Colon :, Less than <, Greater than >, Vertical bar |, Asterisk *, Question mark ?, Carriage return \r, Line feed \n, Backslash \, Forward slash /

## Solution

You can use this action to replace those bad characters with a delimiter of your choosing.

## Usage

```yaml
- name: Clean string
  id: clean-string
  uses: dually8/action-string-replace@v1
  with:
    # Required: Input the string you want to clean
    # e.g. feat/update-api-calls
    string: ${{ github.ref_name }}
    # Optional: The string you want to replace the bad characters with
    # Defaults to a blank string
    delimiter: '_'
```

then later

```yaml
- uses: actions/upload-artifact@v3
  with:
    name: my-artifact
    # Notice the `clean-string` is the `id` of our Clean string action
    path: ${{ steps.clean-string.outputs.output }}
```
