# PyxiVortex

**PyxiVortex** is a lightweight and minimal search engine designed for demo and efficient searching. It is powered by the **PyxiVortex API**, offering a streamlined and easy-to-use interface for developers and end-users.

## Features

- **Lightweight Design**: Minimalistic yet powerful.
- **API-Powered**: Utilizes the robust and efficient [PyxiVortex API](https://pyxilab-pyxivortex.hf.space) for handling search queries.
- **Search Engine Demo**: A user-friendly demo showcasing the capabilities of PyxiVortex is available at [pyxivortex.run.place](https://www.pyxivortex.run.place).

## Getting Started

### PyxiVortex API

Base URL: [https://pyxilab-pyxivortex.hf.space](https://pyxilab-pyxivortex.hf.space)

### Search Endpoint
``` GET /search?q={query}&type={type}&limit={limit} ```
# Search for content across different media types.

`q (required): Search query string
type: Content type (web, images, videos, news)
limit: Number of results (default: 10)
market: Market/language code (default: en-US)`

### Suggestions Endpoint
```GET /suggestions?q={query}&limit={limit}```
# Get search suggestions based on partial query input.

`q (required): Partial search query
limit: Number of suggestions (default: 5)
market: Market/language code (default: en-US)`
