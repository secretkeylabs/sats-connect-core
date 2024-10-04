# Stacks Methods

- All values and types are prefixed with `stx*` / `Stx*` to avoid name name clashes with similar methods from other chains or operations.
- Files have the same name as the method name, without the prefix.
- For consistency, each method file should export
  - method name
  - params: schema & type
  - response: schema & type
  - request message: schema & type
  - helper type built with `MethodParamsAndResult`
