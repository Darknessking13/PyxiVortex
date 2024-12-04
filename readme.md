# PyxiVortex

**PyxiVortex** is a lightweight and minimal search engine designed for demo and efficient searching. It is powered by the **PyxiVortex API**, offering a streamlined and easy-to-use interface for developers and end-users.

## Features

- **Lightweight Design**: Minimalistic yet powerful.
- **API-Powered**: Utilizes the robust and efficient [PyxiVortex API](https://pyxilab-pyxivortex.hf.space) for handling search queries.
- **Search Engine Demo**: A user-friendly demo showcasing the capabilities of PyxiVortex is available at [pyxivortex.run.place](https://www.pyxivortex.run.place).

## Getting Started

### PyxiVortex API

Base URL: [https://pyxilab-pyxivortex.hf.space](https://pyxilab-pyxivortex.hf.space)

#### API Endpoints

- **`/search?query=<Query>&page=<page>&search_type=<type of search // image, news, video etc..>&limit=<search limit>`**
  - **Method**: `GET`
  - **Description**: Execute a search query.
  - **Request Body** (JSON):
