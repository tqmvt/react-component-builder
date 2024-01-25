### How To Use

1. install package

```bash
npm install react-component-renderer
```

```bash
yarn add react-component-renderer
```

```bash
pnpm add react-component-renderer
```

2. make sure you have env variable in your project

```
NEXT_PUBLIC_IMAGE_STORAGE_API=""
```

3. import render component

```typescript
import { PageEditor } from "react-component-renderer";

<PageEditor components={components} />;
```

4. example components data

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
