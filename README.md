# CS Notes on GitHub Pages

Minimal GitHub Pages setup for writing CS notes in Markdown with Jekyll, Just the Docs, and Rouge syntax highlighting.

## What this repo does

- Stores notes as plain Markdown files
- Builds a static documentation-style site with Jekyll
- Uses Just the Docs for navigation and layout
- Uses Rouge for fenced code block syntax highlighting
- Keeps the workflow simple: add one Markdown file, commit, push

## Where to put notes

Put notes in the `docs/` directory.

Example:

```text
docs/
  operating-systems.md
  memory-allocator.md
  networks.md
```

## How to add a new note

1. Create a new Markdown file in `docs/`, for example `docs/concurrency.md`
2. Add front matter at the top
3. Write the note in normal Markdown
4. Commit and push

Example note:

````markdown
---
title: Concurrency
nav_order: 5
---

# Concurrency

Notes about threads and synchronization.

```rust
use std::thread;
```
````

## Required front matter

Use this at the top of every note:

```yaml
---
title: Your Note Title
nav_order: 5
---
```

Recommended fields:

- `title`: the page title shown in navigation
- `nav_order`: controls sidebar order

## How to write code blocks

Use fenced code blocks with triple backticks and a lower-case language tag.

Examples:

````markdown
```c
printf("hello\n");
```

```python
print("hello")
```

```bash
ls -la
```
````

Good language tags for this setup include:

- `c`
- `cpp`
- `python`
- `bash`
- `javascript`
- `typescript`
- `rust`
- `go`
- `sql`
- `nasm`
- `yaml`
- `toml`
- `json`

Rouge highlighting is most reliable when language tags are lower-case. For assembly, prefer `nasm` over generic `asm`.

## GitHub Pages setup

For the simplest setup:

1. Push this repository to GitHub
2. Open **Settings -> Pages**
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**
4. Select your default branch (usually `main`) and the `/ (root)` folder
5. Save

After that, GitHub Pages will build the site automatically when you push commits.

If this repository is your user site (for example `username.github.io`), it will publish at that domain. If it is a project repository, it will publish under a repository path.

## Local development

Local setup is optional. This repo is intended to work directly through GitHub Pages.

If you already use Jekyll locally, you can preview the site before pushing. Otherwise, just commit and push your Markdown files.
