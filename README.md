
# Sketch Off Project Plan

## Team Name: Sketch Squad

## Project Idea

Sketch Off is a fun drawing game for two players. Each player gets a random word and a set time to draw it on their own board. They can't see each other's drawings while they work. When time's up, both drawings are shown side by side for comparison. The game uses peer-to-peer connections for real-time play without needing a backend server.

## Features

- [ ] Initialise React Application: Setup with Create React App and essential libraries.
- [ ] User Interface: Interactive and intuitive components including canvas and timer.
- [ ] Drawing Functionality: Utilise HTML5 Canvas for real-time drawing.
- [ ] WebRTC Connection: Establish real-time peer-to-peer connections using simple-peer.
- [ ] Fetch Random Words: Integrate with Random Word API to provide drawing prompts (high priority).
- [ ] Implement Timer: Countdown timer to limit drawing time (high priority).
- [ ] Display Results: Compare drawings side by side after the timer ends (medium priority).
- [ ] Styling: Apply CSS for better visual appeal (nice-to-have).
- [ ] Deployment: Prepare and deploy the application to a live environment.

## Routes

- [ ] "/": Homepage where users can start a new drawing game.
- [ ] "/draw": The drawing interface with real-time connection to another player.
- [ ] "/results": Page to display and compare the final drawings

## Task Breakdown for Self-Assignment

### Day 1: Project Setup and Basic UI

**Project Initialisation**
- Initialise React project using Create React App.
- Set up the initial project structure and install necessary dependencies (axios, simple-peer, CSS libraries).

**Basic Layout Design**
- Design the main layout including header, drawing boards, timer, and results area.
- Implement basic CSS for the layout.

### Day 2: Core Functionalities

**Drawing Board Implementation**
- Develop the drawing board component using HTML5 Canvas.
- Implement start, draw, and finish actions on the canvas.

**Timer Component**
- Create a countdown timer component.
- Implement the timer to count down from a specified duration and trigger end-of-timer actions.

### Day 3: Random Word Generator and Integration

**Random Word Generator**
- Fetch and display random words for the drawing prompt.
- Integrate with an external API to fetch random words and display them.

**Integrate Drawing Board with Timer**
- Connect the drawing board with the timer to enable/disable drawing based on the timer.
- Ensure the drawing board is enabled at the start and disabled when the timer ends.

### Day 4: WebRTC Integration

**WebRTC Setup**
- Set up WebRTC connections for real-time drawing synchronisation.
- Implement WebRTC using simple-peer to establish peer-to-peer connections.

**Data Synchronisation**
- Ensure drawing data is transmitted between peers in real-time.
- Handle the sending and receiving of drawing actions (start, draw, finish).

### Day 5: Display Results

**Capture and Display Drawings**
- Capture the canvas drawings as images.
- Display both drawings side by side after the timer ends.

**UI Enhancements**
- Improve the overall UI/UX, ensuring responsiveness and mobile compatibility.
- Refine the design, add animations, and enhance user interaction.

### Day 6: Testing and Debugging

**Component Testing**
- Perform unit testing on individual components.
- Ensure each component functions correctly in isolation.

**End-to-End Testing**
- Conduct end-to-end testing to ensure smooth gameplay and synchronisation.
- Test the complete flow from start to finish.

### Day 7: Final Touches and Presentation

**Final Bug Fixes**
- Address any remaining bugs identified during testing.
- Ensure the app is stable and bug-free.

**Presentation Preparation**
- Prepare a demo for the presentation.
- Create a brief overview of the app, its features, and a live demonstration.
