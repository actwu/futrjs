# futrjs
A lightweight js that makes Elements for you

---

# doc
**Futr JS Documentation**

**What is Futr JS?**

Futr JS is a lightweight JavaScript library that makes your htmlEl as types like **_Typescript_**
that make it easier to dynamically add, modify, and style elements within your web pages.

**Futr JS: Type-Like Element Creation, Effortlessly**

** Get Started:**

**1. Import:**

   ```html
 <script src="https://actwu.github.io/futrjs/f.js"></script>
   ```

**2. Unleash Creativity:**

   ```javascript
   // Craft a paragraph with attitude
   el({ name: "p", val: "Greetings, earthlings!", clas: "bold-text" });
   ```

**⚡ Core Functions:**

**Mastering Element Generation:**

* **`el(op)`:** Breathes life into HTML elements with ease.
   - `op`: An object specifying element details:
     - `name`: Element type (e.g., "div", "p", "span").
     - `par` (optional): Parent element's CSS selector.
     - `val` (optional): Text content.
     - `clas` (optional): Space-separated class names.
     - `did` (optional): ID for element identification.
     - `at` (optional): Object for additional attributes.

**Class-y Moves:**

* **`elClass(op)`:** Creates an element with class attitude.
* **`elAddClass(op)`:** Enhances an element with a stylish class.
* **`elRemClass(op)`:** Strips an element of its classiness.
* **`elTogClass(op)`:** Toggles a class for a change of scenery.

**Attribute Aficionado:**

* **`setAttribute(op)`:** Empowers elements with attributes for greater depth.
* **`removeAttribute(op)`:** Strips elements of unwanted attributes.

**Identity Mastery:**

* **`elId(op)`:** Assigns unique IDs for pinpoint targeting.

** Additional Delights:**

* **TypeScript-like Experience:** Enjoy element creation with a similar feel to TypeScript, within JavaScript!
* **Concise Syntax:** Write less, achieve more with a streamlined approach to DOM manipulation.

***✨ Examples That Shine:***

```javascript
// Craft an attention-grabbing button


const myElement = el({
name: "p",
par: "app",
val: "rsa",
clas: "black smallFont",
did: "title",
at: "",
});

```

**Stay Tuned:**

More exciting features are on the horizon! Share your feedback to shape the future of Futr JS.

**_Credit Where Credit Is Due:_**
Created by ACTWU with passion for a simpler, more elegant approach to element manipulation.

