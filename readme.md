# PyxiVortex

**PyxiVortex** is a lightweight and minimal search engine designed for efficient and effective searching. It is powered by the **PyxiVortex API**, providing a streamlined and user-friendly experience for developers and end-users.

---

## Key Features

- **Lightweight Design**: Minimalistic yet powerful for quick and efficient searching.
- **API-Powered**: Harnesses the robust [PyxiVortex API](https://pyxilab-pyxivortex.hf.space) for search queries.
- **Versatile Search Options**: Supports web, images, videos, and news searches.
- **User-Friendly Demo**: Explore PyxiVortex capabilities through a live demo at [pyxivortex.run.place](https://www.pyxivortex.run.place).

---

## Getting Started

### PyxiVortex API (Version 0.0.2-alpha)

#### What's New in Version 0.0.2-alpha:

1. Enhanced support for images, videos, and news searches.
2. Significant performance improvements.
3. Comprehensive documentation available on the [PyxiVortex API homepage](https://pyxilab-pyxivortex.hf.space).
4. Increased request limit: Up to 5,000 daily requests (previously 1,000).
5. Improved request rate: Up to 20 requests per minute (RPM).

> **Note**: PyxiVortex is free to use and will remain so. AI search capabilities are planned for the next update.

---

## API Reference

### Base URL

```
https://pyxilab-pyxivortex.hf.space
```

### Endpoints

#### 1. Search Endpoint

**Description**: Search for content across various media types (web, images, videos, news).

**Request**:
```
GET /search?q={query}&type={type}&limit={limit}&market={market}
```

| Parameter      | Description                              | Default  |
|----------------|------------------------------------------|----------|
| `q` (required) | The search query string.                | N/A      |
| `type`         | Content type: `web`, `images`, `videos`, `news`. | `web`    |
| `limit`        | Number of results to return.            | 10       |
| `market`       | Market/language code (e.g., `en-US`).   | `en-US`  |

#### Example Request
```
GET /search?q=climate+change&type=news&limit=5&market=en-US
```

---

#### 2. Suggestions Endpoint

**Description**: Get search suggestions based on partial query input.

**Request**:
```
GET /suggestions?q={query}&limit={limit}&market={market}
```

| Parameter      | Description                              | Default  |
|----------------|------------------------------------------|----------|
| `q` (required) | Partial search query string.            | N/A      |
| `limit`        | Number of suggestions to return.        | 5        |
| `market`       | Market/language code (e.g., `en-US`).   | `en-US`  |

#### Example Request
```
GET /suggestions?q=climate&limit=3&market=en-US
```

---

Explore the API and build innovative solutions with PyxiVortex! For more details and support, visit the [PyxiVortex API homepage](https://pyxilab-pyxivortex.hf.space).

