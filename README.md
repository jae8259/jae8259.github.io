# CS Notes on GitHub Pages

Minimal GitHub Pages setup for writing CS notes in Markdown with Jekyll, Just the Docs, and Rouge syntax highlighting.

## What this repo does

- Stores notes as plain Markdown files
- Builds a static documentation-style site with Jekyll
- Uses Just the Docs for navigation and layout
- Uses Rouge for fenced code block syntax highlighting
- Keeps the workflow simple: add one Markdown file, commit, push

## Where to put notes

Put standalone notes in the `docs/` directory. Put multi-page series in `series/`.

Example:

```text
docs/
  operating-systems.md
  memory-allocator.md
  networks.md

series/
  memory-allocator-series/
    index.md
    01-overview.md
    02-free-lists.md

assets/
  images/
    memory-allocator-series/
      allocator-layout.svg
```

## How to add a new note

1. Create a new Markdown file in `docs/`, for example `docs/concurrency.md`
2. Add front matter at the top
3. Write the note in normal Markdown
4. Commit and push

For a series, create a folder in `series/` with an `index.md` landing page and numbered child pages such as `01-overview.md`, `02-details.md`, and so on.

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
- `parent`: use this on series child pages to nest them under the series landing page
- `has_children`: use this on a series landing page

## How to embed images

Store images under `assets/images/`, usually in a topic or series subfolder.

Example:

```markdown
![Allocator layout]({{ '/assets/images/memory-allocator-series/allocator-layout.svg' | relative_url }})
```

Using `relative_url` keeps links working on both user sites and project sites.

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
