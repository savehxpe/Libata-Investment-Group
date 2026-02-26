# animations-in-react-getting-started-with-framer-motion.pdf

Animations in React - Getting started with Framer Motion Written by Seth Corker on Benevolent Bytes 

Framer motion is a library by the folks over at Framer, it’s focused on creating animations easily in React. For some it might seem familiar, that’s because it’s marketed as a successor to Pose by Popmotion – a library that I loved but didn’t get as much backing as a product. Backing from Framer will ensure that the library will continue to evolve and receive more attention. 

What we’re creating The final result, the animation we’re aiming for 

This tutorial will focus on creating an animated React component which reveals itself when the user scrolls up and hides again when the user scrolls down. 

Animations on the web can be challenging if you don’t know where to start. There are a lot of ways to animate something and it can be particularly difficult finding the best way to animate a component in React. So we’re going to explore framer-motion because I think it’s an easy way to get started and it gives great results. 

The video tutorial Video tutorial explaining how to make an animation with framer-motion 

Showing an animation on mount The most simple building block we can use is the motion element. We simply access the DOM element we want to create with the equivalent from motion and add an animate prop. The property we want to animate is opacity so let’s set that to 1. This is the end state we want the animation to finish at. 

<motion.div className="actions" initial={{ opacity: 0 }} animate={{ opacity: shouldShowActions ? 1 : 0 }} transition={{ opacity: { duration: 0.2 } }} 

> <button> 

<span className="fas fa-share-square" /> </button> <button> 

<span className="fas fa-user" /> </button> <button> 

<span className="fas fa-times" /> </button> 

</motion.div> 

Note about performance 

If you have a look at the profiler, you’ll notice that the component re-renders every time we scroll. To improve performance we can wrap the actual DOM elements we are rendering in a new component so that even when the container renders, the child should only render when we are animating between the two states. We could also try and reduce the number of state updates that happen due to scroll. 

Why use Framer Motion? The library is easy to use, the documentation is good and it’s backed by Framer. These three things make framer-motion a great fir for animation in React. Although the animation we want to reproduce could be done in CSS or plain JavaScript, I want to introduce you to framer-motion so you can get used to using it in an increasingly more complex capacity to cover more useful scenarios. 

Resources: 

 Source Code for the tutorial is available on GitHub 

 Framer Motion documentation 