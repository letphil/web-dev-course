# Section 4: Introduction to CSS

## Overview CSS

### CSS

- CSS stands for Cascading Style Sheets.
- It is a style sheet language used to describe the presentation of a document written in HTML.
- CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

### CSS Syntax

- CSS is a rule-based language.
- Each rule consists of a selector and a declaration block.
- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.

### Where to Write CSS

- CSS can be written in an external style sheet, in a `<style>` element in the `<head>` section of an HTML document, or inline in an HTML element.
- External style sheets are the most common way to write CSS.

### External Style Sheet

- An external style sheet is a separate file that contains CSS rules.
- To link an external style sheet to an HTML document, use the `<link>` element in the `<head>` section of the HTML document.

### Internal Style Sheet

- An internal style sheet is CSS code written inside the `<style>` element in the `<head>` section of an HTML document.
- The CSS code is enclosed in `<style>` tags.

### Inline Style

- Inline styles are CSS rules applied directly to an HTML element.
- To apply an inline style, use the `style` attribute in the HTML element.

### CSS Comments

- CSS comments are used to add notes to the code.
- Comments are ignored by the browser and are not displayed on the webpage.
- CSS comments start with `/*` and end with `*/`.

### Example

```css
/* This is a CSS comment */
p {
  color: red;
  text-align: center;
}
```

### CSS Hierarchy

- CSS rules are applied based on a hierarchy.
- The hierarchy determines which styles are applied to an element when multiple styles are defined.
- The hierarchy is based on the specificity of the selector, the order of the rules, and the importance of the rule.

### Example

```css
/* Selects all <p> elements */
p {
  color: red;
  text-align: center;
}

/* Selects all elements with class="example" */
.example {
  color: blue;
}
```

## CSS Selectors

### CSS Selectors

- CSS selectors are used to select the HTML elements you want to style.
- There are several types of CSS selectors, including element selectors, class selectors, ID selectors, and more.

### Element Selector

- The element selector selects HTML elements based on the element name.
- To select an element, write the element name without any special characters.

### Class Selector

- The class selector selects HTML elements based on the class attribute.
- To select a class, write a period (`.`) followed by the class name.

### ID Selector

- The ID selector selects an HTML element based on the ID attribute.
- To select an ID, write a hash (`#`) followed by the ID name.

### Grouping Selector

- The grouping selector selects multiple elements based on their selectors.
- To group selectors, separate them with a comma (`,`).

### Descendant Selector

- The descendant selector selects an element that is a descendant of another element.
- To select a descendant, write the parent element followed by a space and the child element.

### Child Selector

- The child selector selects an element that is a child of another element.

### Universal Selector

- The universal selector selects all elements on the page.
- To select all elements, use an asterisk (`*`).

### Attribute Selector

- The attribute selector selects elements based on their attributes.
- To select an element with a specific attribute, write the attribute name in square brackets.

### Pseudo-class Selector

- The pseudo-class selector selects elements based on their state or position.
- To select a pseudo-class, write a colon (`:`) followed by the pseudo-class name.

### Pseudo-element Selector

- The pseudo-element selector selects a specific part of an element.
- To select a pseudo-element, write two colons (`::`) followed by the pseudo-element name.

### Example

```css
/* Selects all <p> elements */
p {
  color: red;
}

/* Selects all elements with class="example" */
.example {
  color: blue;
}

/* Selects the element with ID="intro" */
#intro {
  font-size: 24px;
}

/* Selects all <h1> and <h2> elements */
h1,
h2 {
  text-align: center;
}

/* Selects all <li> elements that are descendants of <ul> elements */
ul li {
  list-style-type: square;
}

/* Selects all <a> elements with a title attribute */
a[title] {
  color: green;
}

/* Selects the first letter of a <p> element */
p::first-letter {
  font-size: 24px;
}
```

## CSS Properties

### CSS Properties

- CSS properties are used to style HTML elements.
- Each property has a name and a value.
- The value of a property can be a keyword, a number, a color, or a string.

### Color Property

- The color property sets the color of the text.
- The value can be a color name, a hex code, an RGB value, or an HSL value.

### Sizing ( Height and Width) Property

- The height and width properties set the height and width of an element.
- The value can be a length, a percentage, or auto.
