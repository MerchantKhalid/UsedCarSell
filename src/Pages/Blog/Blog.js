import React from 'react';
import About from '../About/About'

const Blog = () => {
    return (
        <section>
            <div>
                <h2 className='font-bold'>1. What are the different ways to manage a state in a React application?</h2>
                    <h3>Ans:There are several ways to manage a state in React application such as
                        Hooks, ContextApi,apollo link state,useState,useReducer.
                        a Package Zustand can also e used to manage a state etc.<br />
                        React useState is the best option for local state management.<br />
                        For global state solution Redux, MobX and built in context api can e used. 
                    </h3>
            </div>
            <br />
            <hr></hr>
            <div>      
            <h2 className='font-bold'>2.How does prototypical inheritance work?</h2>
                <h3>Ans:The Prototypal Inheritance is a feature in javascript used to
                 add methods and properties in objects. It is a method by which an object can
                  inherit the properties and methods of another object. Traditionally, in order to get and set the [ProtoType] of an object, we use Object. getPrototypeOf and Object.
                    <br />
                    When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                    <br />
                    JavaScript does not support multiple inheritance. Inheritance of property values occurs at run time by JavaScript searching the prototype chain of an object to find a value. Because an object has a single associated prototype, JavaScript cannot dynamically inherit from more than one prototype chain.
                </h3>
                </div>
                <br />
                <hr></hr>

                <div>
                    <h2 className='font-bold'>3.What is a unit test? Why should we write unit tests?</h2>
                    <h3>
                        Ans:A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.<br />

                        <h2 className='font-bold'>Why should we write unit tests</h2>
                        <h3>Ans:Unit tests are an essential part of maintaining high-quality code. <br/>
                        # Speed up development testing
                        <p>When we start building applications, the most natural thing is to test the code with the user interface. we can make this process way faster and more reliable by writing a script that will check the code for us. With tests in place, rerunning all of them takes no mental energy from us we can do it as often as we feel like. This leads to a shorter feedback loop too, which will help us stay focused and productive.</p>

                        # Discover edge cases
                        <p>
                        Writing unit tests makes us think about edge cases???all the situations that are rare, unexpected, or wrong. When we write the logic, its normal to focus on the happy path, or whats normal and expected to happen. When we write tests, we can set up checks for the edge cases and define what should happen in each of them. This makes our code more resilient in cases of unexpected inputs.
                        </p>

                        </h3>
                    </h3>
                </div>
                <br />
                <hr></hr>
                <br />
                <br />
                <div>
                    <h2 className='font-bold'>4.What is  the difference between React vs. Angular vs. Vue?</h2>
                    <h3> Angular is an open-source JavaScript framework that is currently the oldest on the market and is considered the best platform when it comes to front-end development.

Based on TypeScript , Angular is considered a heavyweight framework and used for mobile and desktop PCs. It was developed with MVC (Model-View-Controller), which has powerful features for developers to build rich, single-page applications.</h3><br />

<h2>
React is a JavaScript library built by Facebook and launched in 2013. React is known for its efficiency and dynamism, as well as its backwards compatibility and seamless integration with other frameworks. It is maintained by a large community of users and developers.
</h2> <br />
<h2>
Vue is the newest JavaScript framework, created by a former Google developer.

Vue.js is one of the best JavaScript development frameworks, used to improve web page interfaces. It is an open source, dynamic, simple, lightweight and fully backward compatible framework.
</h2><br />

</div>
<hr></hr>
<br />

<About />

                
        </section>
    );
};

export default Blog;