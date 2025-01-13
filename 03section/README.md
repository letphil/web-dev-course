# Section 3 Semantic HTML, Media, and YouTube (45 min)

## Overview Semantic HTML

### Semantic HTML

    - Semantic HTML is a coding style that focuses on the meaning of the content, not its appearance.
    - It helps search engines and developers understand the structure of a webpage.
    - Semantic HTML tags are used to define the different parts of a webpage, such as headers, footers, and navigation menus.

### Semantic HTML Tags

    - <header>: Defines a header for a document or a section.
    - <nav>: Defines a set of navigation links.
    - <main>: Defines the main content of a document.
    - <article>: Defines an article.
    - <section>: Defines a section in a document.
    - <aside>: Defines content aside from the content (like a sidebar).
    - <footer>: Defines a footer for a document or a section.

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <header>
      <h1>Company Name</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2022 Company Name</p>
    </footer>
  </body>
</html>
```

## anchor tags

### Anchor Tags

    - Anchor tags are used to create hyperlinks to other web pages or resources.
    - The href attribute specifies the URL of the page the link goes to.
    - The target attribute specifies where to open the linked document.
    - can use href with mailto: to send an email.
    - can use href with tel: to make a phone call.

### Example

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```
