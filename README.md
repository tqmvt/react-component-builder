# React Component Renderer

[npm package](https://www.npmjs.com/package/react-component-renderer)

### How To Use

1. Install package

```bash
npm install react-component-renderer
```

```bash
yarn add react-component-renderer
```

```bash
pnpm add react-component-renderer
```

2. Import render component

```typescript
import { PageEditor } from "react-component-renderer";

<PageEditor
  baseImageUrl={baseImageUrl}
  components={components}
  placeholderImageUrl={placeholderImageUrl}
/>;
```

3. Example component props data

`baseImageUrl`:
```bash
https://your-api-domain.com # without slash at the end
```

`components`:
```json
[
  {
    "type": 0,
    "id": "Section 1",
    "content": "Input title.",
    "settings": {
      "fontSize": "24px"
    }
  },
  {
    "type": 0,
    "id": "Section 2",
    "content": "Any description goes here."
  },
  {
    "type": 1,
    "id": "Section 3",
    "content": "product/images/shirt.png",
    "settings": {
      "width": 300,
      "height": 300,
      "imageAltText": "shirt"
    }
  }
]
```

`placeholderImageUrl`:

```bash
https://your-api-domain.com/placeholder.png # full image url
```