# futrjs
A lightweight js that makes Elements for you

---

# doc
**Futr JS Documentation**

**What is Futr JS?**

Futr JS is a lightweight JavaScript library that makes your htmlEl as types like **_Typescript_**
that make it easier to dynamically add, modify, and style elements within your web pages.

**Getting Started:**

1. **Include the CDN:**

   ```html
   <script src="https://actwu.github.io/futrjs/f.js"></script>
   ```

2. **Start using the functions:**

   ```javascript
   // Create a paragraph element with text and a class
   el("p", "body", "Hello, world!", "greeting");

   // Create a div element with an ID
   el("div", "container", "", "content-area", "main-content");

   // Create a button with an attribute and disabled state
   el("button", "body", "Click Me", "", "", "disabled", "data-action", "submit");
   ```

**Functions:**

**Creating Elements:**

* **`el(element, parent, dval, dclas, did, datt)`:**
   - Creates a new element of the specified type:
     - `element`: The type of element to create (e.g., "div", "p", "span").
     - `parent (optional)`: The selector (CSS selector string) of the parent element to append the new element to. If not provided, the element is appended to the body.
     - `dval (optional)`: The text content of the element.
     - `dclas (optional)`: A space-separated string of class names to apply to the element.
     - `did (optional)`: The ID to assign to the element.
     - `datt (optional)`: Additional attributes to set on the element as an object (e.g., `{ "data-action": "submit" }`).

**Working with Classes:**

* **`elClass(element, dclas)`:**
   - Creates a new element and sets its class(es):
     - `element`: The type of element to create.
     - `dclas`: A space-separated string of class names to apply.

* **`elAddClass(element, dclas)`:**
   - Adds a class(es) to an existing element:
     - `element`: The CSS selector of the existing element.
     - `dclas`: A space-separated string of class names to add.

* **`elRemClass(element, dclas)`:**
   - Removes a class(es) from an existing element:
     - `element`: The CSS selector of the existing element.
     - `dclas`: A space-separated string of class names to remove.

* **`elTogClass(element, dclas)`:**
   - Toggles a class(es) on an existing element, adding it if it's not present and removing it if it is:
     - `element`: The CSS selector of the existing element.
     - `dclas`: A space-separated string of class names to toggle.

**Setting Attributes:**

* **`elAt(element, datt, dval)`:**
   - Sets an attribute on an existing element:
     - `element`: The CSS selector of the existing element.
     - `datt`: The name of the attribute to set.
     - `dval`: The value to assign to the attribute.

* **`elRemAt(element, datt)`:**
   - Removes an attribute from an existing element:
     - `element`: The CSS selector of the existing element.
     - `datt`: The name of the attribute to remove.

**Setting Element ID:**

* **`elId(element, did)`:**
   - Sets the ID of an existing element:
     - `element`: The CSS selector of the existing element.
     - `did`: The ID to assign to the element.

**Additional Notes:**

- The `el` function automatically sets a "b" attribute for "p" and "box" elements, but details regarding its purpose are unavailable and require clarification from the library developer.
- For clarity and consistency, consider replacing "elAt" and "elRemAt" with more conventional function names like "setAttribute" and "removeAttribute", respectively.

**Examples:**

How to i use it
```javascript
el(
// Name
"box",
// Parent
"app",
// Value
"TEXT",
// Class
"",
// Id
"",
// Attribute
"b"
);
```
