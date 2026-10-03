# 🧩 Browser Extensions Manager UI

A responsive browser extensions manager built with HTML, CSS, Bootstrap and vanilla JavaScript. It is based on the Frontend Mentor "Browser Extensions Manager UI" challenge.

🔗 **Live demo:** _add your GitHub Pages link here_

## ✨ Features

- 🗂️ **Extension cards grid**: each card shows an icon, name, description, a Remove button and an ON/OFF toggle. Cards sit in a centered flex grid and wrap onto new lines automatically.
- 🔘 **Toggle switch**: every card has a Bootstrap `form-switch` toggle, styled in coral red to match the design.
- 🗑️ **Remove button**: removes that card from the page. Refreshing the page brings all cards back.
- 🔍 **Filter buttons (All / Active / Inactive)**:
  - All shows every card.
  - Active shows only cards whose toggle is ON.
  - Inactive shows only cards whose toggle is OFF.
  - Switching a toggle while a filter is selected updates the visible cards immediately.
- 🌙☀️ **Dark / Light mode**:
  - The moon/sun button in the header switches the theme.
  - The icon changes between moon and sun.
  - The chosen theme is saved in `localStorage`, so it stays after a page refresh.
  - Dark mode uses a deep blue gradient background and semi-transparent cards.
- 📱 **Responsive layout**: a `viewport` meta tag and a `@media (max-width: 768px)` query stack the header and cards neatly on phones and tablets.

## ⚙️ How it works

| Feature | How it is built |
|---|---|
| Card layout | CSS Flexbox (`display: flex`, `flex-wrap: wrap`, `justify-content: center`) |
| Equal card heights | `align-items: stretch` with the action row pinned to the bottom using `mt-auto` |
| Toggle | Bootstrap `form-check form-switch` with custom checked color in CSS |
| Remove button | `querySelectorAll(".remove-btn")`, a click listener on each button, and `closest(".card").remove()` to delete only that button's own card |
| Theme switch | JavaScript adds or removes a `dark` class on `<body>`; CSS rules under `body.dark` change the colors |
| Theme memory | `localStorage.setItem` and `localStorage.getItem` |
| Icon swap | JavaScript changes the `src` and `alt` of the moon/sun image |
| Filtering | `querySelectorAll`, `forEach`, the toggle's `.checked` value, and `card.style.display` to show or hide cards |
| Active filter button | `classList.add` and `classList.remove` keep only one button highlighted |
| Responsiveness | CSS media queries |

## 🛠️ Tech stack

- 🌐 HTML5
- 🎨 CSS3 (Flexbox, media queries, transitions)
- 🅱️ Bootstrap 5.3.8 (loaded from CDN)
- ⚡ JavaScript (ES6, no frameworks)

## 📁 Project structure

```
Browser-Extensions-Manager-Ui-Main/
├── index.html
├── style.css
├── app.js
├── logo.svg
├── icon-moon.svg
├── icon-sun.svg
└── logo-*.svg        (extension icons)
```

## 🚀 Run locally

1. Download or clone this repository.
2. Open `index.html` in any browser.

No build step or installation is needed. ✅

## 📚 What I learned

- Building grid layouts with Flexbox
- Using CSS media queries for responsive design
- Creating dark/light themes with a CSS class toggle
- DOM selection and events in JavaScript
- Removing elements with `closest()` and `remove()`
- Saving user preferences with `localStorage`
- Filtering elements dynamically with JavaScript
- Debugging with the browser Console (a single typo can stop all the JavaScript below it)

## 🔮 Possible improvements

- 🖼️ Make the logo text turn white in dark mode
- 💾 Save each toggle state and removed cards in `localStorage`
- ➕ Add more extensions and a search box

## 👤 Author

- **Abhijeet Saini**
- **GitHub:**
  [@abhijeetsaini832-blip](https://github.com/abhijeetsaini832-blip)
- **LinkedIn:**
  [abhijeet-saini-b0aaa3363](https://linkedin.com/in/abhijeet-saini-b0aaa3363)
- **Email:** abhijeetsaini832@gmail.com

## 🙏 Credits

Design and challenge by [Frontend Mentor](https://www.frontendmentor.io).
