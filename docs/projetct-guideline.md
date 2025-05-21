## Datei- & Ordnerstruktur

```bash
/lib
  /db
    dbConnect.js
  styles.js ← zentrale Farb-/Variablen-Mixins
/data
  /models
    Place.js, User.js ← Mongoose-Schemas
/components
  /Button
    index.jsx
    Button.styled.js
    Button.test.js
  /Form
    index.jsx
    Form.styled.js
    Form.test.js
/pages
  index.jsx
  create.jsx
  api/
    /places/
        [id]
            index.js
        index.js
```

- Jeder Component bekommt einen eigenen Ordner im PascalCase (/Button/Button.jsx, /Button/styles.js)

## Komponenten-Design

```js
export default function MeineKomponente({ propA, propB }) { … }
```

- Hooks statt Klassen, descriptive Props (isLoading, hasError, userData).
- Dateiendungen: .jsx für Components, .styled.js für styled-Components.
- Modularisierung: Wiederholungen vermeiden, lieber Utility-Hooks oder kleine Helper-Funktionen.

## Styling & UI

- styled-components im Component-Ordner.
- Mobile-first, keine Desktop-Breakpoints.
- Grid/Flex mit % oder fr.
- Interaktive Zustände via Props:

```js
const StyledButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#ccc" : "#0070f3")};
  &:hover {
    opacity: 0.9;
  }
`;
```

## Accessibility

1. Semantisches HTML: `<header>, <nav>, <main>, <footer>.`
2. Headings: 1× `<h1>`, dann `<h2>, <h3>` ohne Level-Sprünge.

3. Alt-Text bei Bildern:

```html
<img src="…" alt="Beschreibung" />
```

4. Interaktive Elemente brauchen Text oder aria-label:

```html
<button aria-label="Schließen">×</button>
```

5. ARIA bei komplexen Fällen: role="alert", aria-labelledby="id".

## Daten-Fetching & Mutation

- useSWR für GET:

```js
const { data, error, isLoading } = useSWR("/api/places", fetcher);
```

- fetch API für Mutationen:

```js
await fetch("/api/places", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(place),
});
```

### API-Handler ex. (Next.js)

```js
import dbConnect from "@/lib/dbConnect";
import Place from "@/data/models/Place";

export default async function handler(req, res) {
  await dbConnect();
  try {
    if (req.method === "GET") {
      const places = await Place.find();
      return res.status(200).json(places);
    }

    if (req.method === "POST") {
      await Place.create(req.body);
      return res.status(201).json({ status: "created" });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
}
```

## Error Handling

- try/catch überall.
- Frontend-UI: nur freundliche Meldung („Hoppla, da lief was schief.“), kein Stacktrace.
- State für Errors:

```js
const [hasError, setHasError] = useState(false);
```

Tests

1. Unit-Tests (Jest)

- Datei neben Code: calculator.test.js.
- Beispiel:

```js
import { add } from "./calculator";

test("addiert 1,2,3 zu 6", () => {
  expect(add(1, 2, 3)).toBe(6);
});
```

2. Komponententests (React Testing Library)

- Platzierung: direkt neben Component, Endung .test.js.
- Rendern & Abfragen:

```js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FahrenheitConverter from "./index";

test("zeigt Überschrift", () => {
  render(<FahrenheitConverter />);
  expect(
    screen.getByRole("heading", { name: /temperature unit converter/i })
  ).toBeInTheDocument();
});
```

- User-Interaktionen simulieren:

```js
const user = userEvent.setup();
await user.type(screen.getByLabelText(/°C/i), "5");
await user.click(
  screen.getByRole("button", { name: /convert to fahrenheit/i })
);
expect(screen.getByText(/41 °F/i)).toBeInTheDocument();
```

Queries:

- getByRole, getByLabelText, getByText
- Für nicht-vorhandene Elemente queryBy…

## Ressourcen

- MDN Accessibility: https://developer.mozilla.org/de/docs/Web/Accessibility
- A11y Project Checklist: https://www.a11yproject.com/checklist/
- Testing Library Docs: https://testing-library.com/docs/react-testing-library/intro
- Jest-Mock-Functions: https://jestjs.io/docs/mock-functions
- Next.js Pages Router: https://nextjs.org/docs/pages

- React Component Testing: https://github.com/neuefische/hh-web-25-1/blob/main/sessions/react-component-testing/react-component-testing.md
- Accessibility: https://github.com/neuefische/hh-web-25-1/blob/main/sessions/accessibility/accessibility.md
- React State: https://github.com/neuefische/hh-web-25-1/blob/main/sessions/react-state-1/react-state-1.md

  - https://github.com/neuefische/hh-web-25-1/blob/main/sessions/react-state-2/react-state-2.md
  - https://github.com/neuefische/hh-web-25-1/blob/main/sessions/react-state-3/react-state-3.md

- Styled Component: https://github.com/neuefische/hh-web-25-1/blob/main/sessions/react-styled-components/react-styled-components.md
- React Data Fetching: https://github.com/neuefische/hh-web-25-1/blob/main/sessions/react-data-fetching/react-data-fetching.md
- React Effects and Fetch: https://github.com/neuefische/hh-web-25-1/blob/main/sessions/react-effects-and-fetch/react-effects-and-fetch.md
