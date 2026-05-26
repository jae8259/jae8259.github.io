---
title: Operating Systems
nav_order: 2
---

# Operating Systems

A few small examples for processes, scheduling, and shell workflows.

## Process creation in C

```c
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main(void) {
    pid_t pid = fork();

    if (pid == 0) {
        printf("child: pid=%d\n", getpid());
    } else if (pid > 0) {
        printf("parent: child pid=%d\n", pid);
    }

    return 0;
}
```

## RAII lock guard in C++

```cpp
#include <mutex>

std::mutex m;

void critical_section() {
    std::lock_guard<std::mutex> lock(m);
    // shared state update
}
```

## Inspecting processes in Bash

```bash
ps -ef | grep ssh
kill -TERM 12345
watch -n 1 'ps -o pid,ppid,stat,comm -p 12345'
```

## A tiny Rust channel example

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        tx.send("ready").unwrap();
    });

    println!("{}", rx.recv().unwrap());
}
```
