# Confetti Component

<h4>by Anderson Mancini and Romain Herault</h4>

Adds confetti explosions to your projects with many customization options. Download it here.

[![screenshot](/public/cover.jpg)](https://r3f-confetti-component.vercel.app/)

[See the demo here](https://r3f-confetti-component.vercel.app/)
[See the on Code Sandbox](https://codesandbox.io/s/r3f-confetti-component-jt4qd3)
[See minimal example on Code Sandbox](https://codesandbox.io/s/r3f-confetti-simple-example-ysfytq)

# HOW TO USE?

#### 1. Download the files component and save it on your project

[Download the Confetti component source code](https://gist.github.com/ektogamat/f810b36ea0d990fe480ed2d634380c8f) and save into your project

#### 2. Import the component

```jsx
import ExplosionConfetti from './components/Confetti'
```

Then add the Confetti to your Canvas

```jsx
<Canvas>
  <ExplosionConfetti />
</Canvas>
```

That's all you need ✨

---

### Props

You can add this to your project to have a debug interface to change the parameters.

| Name          | Type    | Default                        | Description                                                                     |
| ------------- | ------- | ------------------------------ | ------------------------------------------------------------------------------- |
| isExploding   | Boolean | false                          | Enable exploding (Start the confetti).                                         |
| Amount        | Number  | 100                            | The amount of particles.                                                        |
| Rate          | Number  | 3                              | Increases or decreases the frequency for particles. Don't set it too high.      |
| Radius        | Number  | 15                             | The radius of each explosion.                                                   |
| AreaWidth     | Number  | 3                              | The area width for explosion.                                                   |
| AreaHeight    | Number  | 1                              | The area width for explosion.                                                   |
| FallingHeight | Number  | 10                             | Height for the particles to fall from                                           |
| FallingSpeed  | Number  | 8                              | The speed of particles.                                                         |
| Colors        | Array   | [0x0000ff, 0xff0000, 0xffff00] | Array of Hex color codes for particles. Example: [0x0000ff, 0xff0000, 0xffff00] |
| enableShadows | Boolean | false                          | Enable particle shadows. Set false for better performance.                      |

### Improving performance

⚠️ Turn off shadows so you can have better performance.

### Getting Started using this demo project

Download and install Node.js on your computer (https://nodejs.org/en/download/).

Then, open VSCODE, drag the project folder to it. Open VSCODE terminal and install dependencies (you need to do this only in the first time)

```shell
npm install
```

Run this command in your terminal to open a local server at localhost:3000

```shell
npm run dev
```

### License

A CC0 license is used for this project. You can do whatever you want with it, no attribution is required. However, if you do use it, I'd love to hear about it!

### Can you leave a star please?

I genuinely appreciate your support! If you're willing to show your appreciation, you can <strong>give me a star on GitHub 🎉 </strong>or consider buying a coffee to support my development at https://www.buymeacoffee.com/andersonmancini. The funds received will be utilized to create more valuable content about Three.js and invest in acquiring new courses. Thank you for your consideration!

### Credits

Thanks a lot Romain for the help: https://github.com/Romaixn

Based on: https://github.com/JamesChan21/threejs-confetti

Based on: https://github.com/daniel-lundin/dom-confetti
