# Frame Rate (FPS) Visualizer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, interactive, and responsive web application designed to visually demonstrate the difference in motion smoothness at various frame rates. This tool provides a clear, side-by-side comparison to help users intuitively understand the impact of FPS on perceived motion.

### [**View the Live Demo Here**](https://djmoore711.github.io/fps-viz/)

## About The Project

The concept of "frames per second" can be abstract. It's easy to say that 120 FPS is smoother than 30 FPS, but it can be difficult to visualize *why*. This project was built to solve that problem by providing an unambiguous, hands-on demonstration.

The core principle of this visualizer is that all animated objects travel at the **exact same speed**. They cover the same distance in the same amount of time. The only difference is the number of "in-between" frames rendered, which starkly highlights the jarring stutter of low frame rates versus the fluid motion of high frame rates.

## Features

* **Five-Way Comparison:** Simultaneously view animations running at 24 FPS (cinema standard), 30 FPS (early video), 60 FPS (modern video), and 120 FPS (high-performance gaming), alongside a user-controlled animation.
* **Interactive Controls:** Use the intuitive slider or the precise number input to adjust the frame rate of the central animation from 1 to 120 FPS in real-time.
* **Responsive Design:** The layout intelligently adapts to any screen size. It uses a "dice-five" grid on desktops for easy comparison and automatically stacks into a clean, single column on mobile devices.
* **Light & Dark Mode:** Includes a theme toggle to switch between light and dark modes, with the user's preference saved locally.
* **Accurate Simulation:** Powered by the GSAP (GreenSock Animation Platform) ticker for precise timing, ensuring the demonstration is as accurate as the browser and hardware will allow.

## Technologies Used

* **HTML5:** For the core structure of the application.
* **Pico.css:** As the core CSS framework for modern, theme-able styling of components.
* **CSS3:** For custom layout styles (like the 5-box grid) and media queries.
* **Vanilla JavaScript (ES6+):** For all the user interaction logic, including the new theme switcher.
* **GSAP (GreenSock Animation Platform):** For the high-performance animation ticker that drives the simulation, ensuring timing is precise and reliable across different devices and refresh rates.

## How To Use

1.  **Visit the live demo link above.**
2.  Observe the motion of the objects in the five boxes. Note the differences in smoothness between them.
3.  Use the slider or the number input box labeled "Your Chosen FPS" to change the frame rate of the central animation.
4.  Compare the central box to the others to see how, for example, 15 FPS compares to 60 FPS, or how 90 FPS starts to approach the smoothness of 120 FPS.

## How To Run Locally

Since this is a self-contained application, running it locally is simple:

1.  Clone or download this repository.
2.  Open the `index.html` file in any modern web browser.

## License

This project is distributed under the MIT License. See the `LICENSE` file in the repository for more information.
