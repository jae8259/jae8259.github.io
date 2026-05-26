---
title: Memory Allocator
nav_order: 3
---

# Memory Allocator

Short notes for heaps, free lists, and alignment.

## Simple block header in C

```c
typedef struct block {
    size_t size;
    int free;
    struct block* next;
} block_t;
```

## Alignment helper in C++

```cpp
#include <cstddef>

constexpr std::size_t align_up(std::size_t n, std::size_t alignment) {
    return (n + alignment - 1) & ~(alignment - 1);
}
```

## x86-64 pointer bump in assembly

```nasm
add rax, 16
and rax, -16
mov [rdi], rax
```

## Minimal allocator config in TOML

```toml
[allocator]
strategy = "first-fit"
alignment = 16
coalesce = true
```
