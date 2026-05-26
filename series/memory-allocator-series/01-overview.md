---
title: 01. Overview
parent: Memory Allocator Series
nav_order: 1
---

# Memory Allocator Series: Overview

Use `series/` when a topic is better written as multiple connected notes instead of one page.

## Example diagram

![Allocator layout diagram]({{ '/assets/images/memory-allocator-series/allocator-layout.svg' | relative_url }})

## Example Rust snippet

```rust
struct Block {
    size: usize,
    free: bool,
}
```
