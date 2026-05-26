---
title: Networks
nav_order: 4
---

# Networks

Small examples for sockets, protocols, and traffic inspection.

## Python TCP client

```python
import socket

with socket.create_connection(("example.com", 80)) as sock:
    sock.sendall(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
    print(sock.recv(256).decode())
```

## JavaScript fetch example

```javascript
async function loadStatus() {
  const response = await fetch('/api/status');
  return response.json();
}
```

## TypeScript packet shape

```typescript
type Packet = {
  src: string;
  dst: string;
  ttl: number;
};
```

## Go HTTP server

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "ok")
    })

    http.ListenAndServe(":8080", nil)
}
```

## SQL table for flow logs

```sql
create table flow_logs (
    id integer primary key,
    src_ip text not null,
    dst_ip text not null,
    dst_port integer not null,
    protocol text not null
);
```

## YAML config example

```yaml
capture:
  interface: eth0
  snaplen: 1600
filters:
  - tcp port 80
  - udp port 53
```

## JSON payload example

```json
{
  "event": "packet_drop",
  "reason": "ttl_expired",
  "count": 3
}
```
