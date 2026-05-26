---
title: Home
nav_order: 1
---

# CS Notes

A small Jekyll + Just the Docs site for code-heavy computer science notes.

## Notes

- [Operating Systems]({{ '/docs/operating-systems/' | relative_url }})
- [Memory Allocator]({{ '/docs/memory-allocator/' | relative_url }})
- [Networks]({{ '/docs/networks/' | relative_url }})
- [Memory Allocator Series]({{ '/series/memory-allocator-series/' | relative_url }})

## Writing style

- Put each note in `docs/` as one Markdown file.
- Add YAML front matter with at least a `title`.
- Use fenced code blocks with lower-case language tags so Rouge highlights them reliably.

Example:

````markdown
---
title: Concurrency
nav_order: 4
---

# Concurrency

```rust
use std::thread;
```
````
