# Section 6: Advanced CSS ( Classes, Ids, Parallax )

In this section, you will learn about advanced CSS concepts, including classes, IDs, and parallax scrolling effects. These concepts will help you enhance the styling and visual effects of your web pages.

## styling anchor tags with :before and :after

- The `:before` and `:after` pseudo-elements in CSS allow you to insert content before or after an element's content.
- You can use these pseudo-elements to add decorative elements, such as icons or text, to anchor tags.
- To style anchor tags with `:before` and `:after`, you can use the following CSS code:

```css
a:before {
  content: "\f08e"; /* Unicode character for a font icon */
  font-family: "Font Awesome";
  margin-right: 5px;
}

a:after {
  content: " (external link)";
}
```

### Classes and IDs

- Classes and IDs are used to apply styles to specific elements on a web page.
- Classes are used to group elements that share the same styles.
- IDs are used to uniquely identify an element on a web page.
- To apply a class or ID to an element, use the `class` or `id` attribute in the HTML tag.

## Designing a Navbar from scratch

- A navigation bar (navbar) is a common UI element used to navigate a website.
- You can design a navbar from scratch using HTML and CSS.

### Navbar Requirements

1. Create a new folder named `navbar` in your project directory.
2. Inside the `navbar` folder, create the following files:
   - `index.html`: The main HTML file for the navbar.
   - `styles.css`: The CSS file for styling the navbar.
3. Design and implement a responsive navbar with the following elements:
   - Logo or brand name.
   - Navigation links to different sections of the website.
   - Responsive design that adapts to different screen sizes.
   - Dropdown menu for additional navigation options (optional).

### Navbar Guidelines

- Use HTML and CSS to create the structure and style of the navbar.
- Use CSS Flexbox or Grid to create a responsive layout for the navbar.
- Use CSS animations or transitions to add visual effects to the navbar elements.

example of a navbar:

```html
<nav class="navbar">
  <div class="logo">Company Name</div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  a
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

.logo {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}
```

## Designing a Footer from scratch

- A footer is a common UI element used to display information at the bottom of a web page.
- You can design a footer from scratch using HTML and CSS.

### Footer Requirements

1. Create a new folder named `footer` in your project directory.
2. Inside the `footer` folder, create the following files:

   - `index.html`: The main HTML file for the footer.
   - `styles.css`: The CSS file for styling the footer.

3. Design and implement a responsive footer with the following elements:

   - Company or product name.
   - Contact information, such as email, phone number, and address.
   - Social media links.

### Footer Guidelines

- Use HTML and CSS to create the structure and style of the footer.
- Use CSS Flexbox or Grid to create a responsive layout for the footer.
- Use CSS animations or transitions to add visual effects to the footer elements.

example of a footer:

```html
<footer class="footer">
  <div class="footer-logo">Company Name</div>
  <ul class="footer-links">
    <li><a href="mailto:letphil.contact.gmail.com">Email</a></li>
    <li><a href="tel:123-456-7890">Phone</a></li>
    <li><a href="#address">Address</a></li>
  </ul>
  <div class="social-links">
    <a href="https://facebook.com"><i class="fab fa-facebook"></i></a>
    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
  </div>
</footer>
```

```css
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

.footer-logo {
  font-size: 1.5rem;
}

.footer-links {
  display: flex;
  list-style: none;
}

.footer-links li {
  margin-right: 20px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}

.social-links a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}
```

## linear-gradient

- The `linear-gradient()` function in CSS is used to create a gradient background for an element.
- You can specify the direction, color stops, and color values for the gradient.
- To create a linear gradient, use the following CSS code:

```css
background: linear-gradient(to right, red, blue);
```

### Linear Gradient Syntax

- The `linear-gradient()` function takes the following parameters:
  - `to`: Specifies the direction of the gradient (e.g., top, bottom, left, right).
  - Color stops: Specifies the color stops and color values for the gradient.

example of a linear gradient:

```css
.gradient {
  background: linear-gradient(to right, red, blue);
}
```

## radial-gradient

- The `radial-gradient()` function in CSS is used to create a radial gradient background for an element.
- You can specify the shape, size, position, and color stops for the gradient.
- To create a radial gradient, use the following CSS code:

```css
background: radial-gradient(circle, red, blue);
```

### Radial Gradient Syntax

- The `radial-gradient()` function takes the following parameters:
  - Shape: Specifies the shape of the gradient (e.g., circle, ellipse).
  - Size: Specifies the size of the gradient (e.g., closest-side, farthest-corner).
  - Position: Specifies the position of the gradient.
  - Color stops: Specifies the color stops and color values for the gradient.

example of a radial gradient:

```css
.gradient {
  background: radial-gradient(circle, red, blue);
}
```

### media queries

- Media queries in CSS are used to apply different styles based on the device or screen size.
- You can use media queries to create responsive designs that adapt to different screen sizes.
- To create a media query, use the `@media` rule followed by the media type and conditions.

example of a media query:

```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

### Media Query Syntax

- The `@media` rule takes the following parameters:
  - Media type: Specifies the type of media (e.g., screen, print).
  - Media features: Specifies the conditions for applying the styles (e.g., width, height).

example of a media query with multiple conditions:

```css
@media screen and (max-width: 600px) and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

## Parallax Scrolling Effects

- Parallax scrolling is a visual effect where the background content moves at a different speed than the foreground content.
- You can create parallax scrolling effects using CSS and Javascript.
- To create a parallax effect, you can use the `background-attachment` property in CSS.

### Parallax Scrolling Guidelines

- Use CSS to set the background image and position for the parallax effect.
- Use Javascript to handle the scrolling behavior and speed of the parallax effect.
- Use media queries to create a responsive parallax effect that adapts to different screen sizes.

example of a parallax effect:

```html
<head>
<style>
body, html {
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 "Lato", sans-serif;
  color: #777;
}

.bgimg-1, .bgimg-2, .bgimg-3 {
  position: relative;
  opacity: 0.65;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.bgimg-1 {
  background-image: url("https://images.pexels.com/photos/30145498/pexels-photo-30145498/free-photo-of-traditional-vietnamese-new-year-celebration.jpeg");
  min-height: 100%;
}

.bgimg-2 {
  background-image: url("https://images.pexels.com/photos/30145498/pexels-photo-30145498/free-photo-of-traditional-vietnamese-new-year-celebration.jpeg");
  min-height: 400px;
}

.bgimg-3 {
  background-image: url("https://images.pexels.com/photos/30145498/pexels-photo-30145498/free-photo-of-traditional-vietnamese-new-year-celebration.jpeg");
  min-height: 400px;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: scroll;
  }
}
</style>
</head>
<body>

<div class="bgimg-1">
  <div class="caption">
  <span class="border">SCROLL DOWN</span>
  </div>
</div>

<div style="color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;">
  <h3 style="text-align:center;">Parallax Demo</h3>
  <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
</div>

<div class="bgimg-2">
  <div class="caption">
  <span class="border" style="background-color:transparent;font-size:25px;color: #f7f7f7;">LESS HEIGHT</span>
  </div>
</div>

<div style="position:relative;">
  <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
  </div>
</div>

<div class="bgimg-3">
  <div class="caption">
  <span class="border" style="background-color:transparent;font-size:25px;color: #f7f7f7;">SCROLL UP</span>
  </div>
</div>

<div style="position:relative;">
  <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
  </div>
</div>

<div class="bgimg-1">
  <div class="caption">
  <span class="border">COOL!</span>
  </div>
</div>

</body>
</html>
```

## Project

```
In this section, you will learn how to apply advanced CSS techniques to create visually appealing web pages. These techniques will help you enhance the design and layout of your projects and create engaging user experiences.

```

## Project: Parallax Website

In this project, you will create a parallax scrolling website that showcases your HTML and CSS skills. The website will feature multiple sections with parallax scrolling effects and interactive elements.

### Project Requirements

1. Create a new folder named `parallax-website` in your project directory.
2. Inside the `parallax-website` folder, create the following files:
   - `index.html`: The main HTML file for the website.
   - `styles.css`: The CSS file for styling the website.
3. Design and implement a parallax scrolling website with the following elements:

   - Multiple sections with parallax scrolling effects.
   - Interactive elements, such as buttons, links, and images.
   - Responsive design that adapts to different screen sizes.
   - Custom fonts and colors to enhance the visual appeal of the website.

### Project Guidelines

- Use HTML and CSS to create the structure and style of the website.
- Use CSS to style the elements of the website, including fonts, colors, layout, and spacing.
- Use CSS Flexbox or Grid to create a responsive layout that adapts to different screen sizes.
- Use CSS animations or transitions to add visual effects to the website elements.
- Use Google Fonts to choose and include custom fonts for the website.
- Use media queries to create a responsive design that adapts to different screen sizes.

### Project Submission

Once you have completed the parallax scrolling website project, submit the following items:

1. A screenshot of the website showing the design and layout.
2. The code files (`index.html` and `styles.css`) for the project.
3. A brief description of the website and its features.
