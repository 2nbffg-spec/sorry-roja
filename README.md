# 💔 I'm Sorry, Roja

A beautiful, interactive apology website built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Interactive Character**: Responds to slaps with animations and expressions
- **Progressive Speech**: Reveals an apology message piece by piece with each interaction
- **Emotional Animations**: Smooth transitions between different emotional states
- **Heart Shower Effect**: Beautiful falling hearts on forgiveness
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Keyboard Shortcuts**: S for slap, F for forgive, R for reset
- **Progress Tracking**: Visual progress bar and slap counter
- **Dark Emotional Theme**: Professional design with red and teal accents

## 📁 Project Structure

```
sorry-roja/
├── index.html              # Main HTML file
├── README.md               # This file
├── js/
│   ├── config.js           # Configuration & speeches
│   ├── character.js        # Character state management
│   ├── effects.js          # Visual effects
│   ├── ui.js               # UI interactions
│   └── main.js             # Application entry point
├── styles/
│   ├── main.css            # Main styles
│   ├── animations.css      # Animation definitions
│   └── responsive.css      # Responsive design rules
└── .gitignore              # Git ignore rules
```

## 🚀 How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/2nbffg-spec/sorry-roja.git
   cd sorry-roja
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

3. **Interact with the app**
   - Click "Slap Me" button to hear the apology (or press S)
   - After 3 slaps, "Forgive Me" button becomes active (or press F)
   - Click to trigger celebration effects
   - Use "Start Over" to reset (or press R)

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| S | Slap the character |
| F | Forgive (after 3 slaps) |
| R | Reset/Start over |

## 🎨 Customization

### Change the Speech
Edit `js/config.js` and modify the `SPEECHES` array with your own messages.

### Change Colors
Edit `styles/main.css` and update the CSS variables in the `:root` selector:

```css
:root {
    --accent-red: #ff6b6b;
    --accent-teal: #4ecdc4;
    /* ... */
}
```

### Add Background Music
Edit `index.html` and add before the closing `</body>` tag:

```html
<audio autoplay loop style="display:none;">
    <source src="your-music-url.mp3" type="audio/mpeg">
</audio>
```

Recommended songs:
- "Tum Se Hi" (Jab We Met)
- "Tera Mera" (Bodyguard)
- Any soft acoustic ballad

## 🌐 Live Demo

Open `index.html` in your browser to see it in action!

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Animations, gradients, flexbox
- **Vanilla JavaScript** - No dependencies!

## 🛠 Development

### Project Structure

The project is organized into modules:

- **config.js**: App configuration and speech content
- **character.js**: Character state and animations
- **effects.js**: Visual effects (hearts, confetti, etc.)
- **ui.js**: User interface and interactions
- **main.js**: Application initialization

### Adding Features

1. Add new speeches to `SPEECHES` in `config.js`
2. Add new effects to `Effects` module in `effects.js`
3. Add new UI interactions to `UI` module in `ui.js`
4. Add corresponding animations to `animations.css`

## 📄 License

This project is open source and available under the MIT License.

## 💬 About

This website was created as a sincere apology with hope for forgiveness. Built with love and JavaScript. 💔

---

**Made with 💔 by 2nbffg-spec**

*"I will stand here in the silence, holding onto the memory of us, hoping that the echo of my sincerity reaches your heart."*