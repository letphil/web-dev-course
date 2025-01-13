# Section 2 HTML Basics

## Overview HTML

### HTML -> Hyper Text Markup Language

### Hypertext Markup Language (HTML) is a markup language used to structure and define the content of web pages:

#### What it does

    HTML is a fundamental technology that tells web browsers how to display a page's content, including text, images, and other media.

#### How it works

    HTML uses markup symbols, or tags, to annotate content. Tags are written between angle brackets, such as < and >. The name of an element inside a tag can be written in uppercase, lowercase, or a mixture.

#### How it's used

    HTML is used to create and structure sections, paragraphs, headings, links, and blockquotes.

#### Related technologies

    HTML is often used with other technologies, such as Cascading Style Sheets (CSS) and JavaScript. CSS is used to style HTML elements, while JavaScript adds interactive features.

#### History

    HTML has been used by the World Wide Web since 1990. The latest version of HTML is HTML5.

## HTML Structure

<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

### Explanation

    - The <!DOCTYPE html> declaration defines this document to be HTML5
    - The <html> element is the root element of an HTML page
    - The <head> element contains meta information about the document
    - The <title> element specifies a title for the document
    - The <body> element contains the visible page content
    - The <h1> element defines a large heading
    - The <p> element defines a paragraph

## explain meta tags

### Meta tags

    - Meta tags are snippets of text that describe a page's content; the meta tags don't appear on the page itself, but only in the page's code.
    - Meta tags are essentially little content descriptors that help tell search engines what a web page is about. ( SEO )
    - Meta tags are placed in the <head> section of an HTML document.

### Common Meta Tags

    - <meta charset="UTF-8">: Declares the character encoding for the document.
    - <meta name="description" content="Free Web tutorials">: Provides a description of the page. Search engines can pick up this description to show with the results of searches.
    - <meta name="keywords" content="HTML, CSS, JavaScript">: Provides keywords that describe the page. Search engines can use these keywords to index the page.
    - <meta name="author" content="John Doe">: Provides the name of the author of the page.
    - <meta http-equiv="refresh" content="30">: Redirects the browser to another URL after 30 seconds.

## HTML Elements

### HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page.

### Text Tags

    - <h1> to <h6>: Headings
    - <p>: Paragraph
    - <br>: Line Break
    - <hr>: Horizontal Rule

### List Tags

    - <ul>: Unordered List
    - <ol>: Ordered List
    - <li>: List Item

### Divs and Spans

    - <div>: Division Block : Used to group block-elements to format them with CSS.

    - <span>: Inline Division : Used to group inline-elements to format them with CSS.

## difference between div and span

### Div ( takes up as much width as possible )

    - The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
    - The <div> tag is easily styled by using the class or id attribute.
    - The <div> tag is a block-level element, which means it will take up the full width available.

### Span ( takes up as much width as the content inside )

    - The <span> tag is used to group inline-elements in a document.
    - The <span> tag provides no visual change by itself.
    - The <span> tag provides a way to add a hook to a part of a text or a part of a document.

### Tables

    - <table>: Table
    - <tr>: Table Row
    - <td>: Table Data
    - <th>: Table Header

### Forms

    - <form>: Form
    - <input>: Input Field
    - <textarea>: Text Area
    - <button>: Button
    - <select>: Dropdown List
    - <option>: Option

### Exercise: Create a basic form with name, email, and password fields.
