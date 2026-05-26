---
title: 02. Free Lists
parent: Memory Allocator Series
nav_order: 2
---

# Free Lists

A follow-up page in the same series.

```c
typedef struct free_block {
    size_t size;
    struct free_block* next;
} free_block_t;
```
