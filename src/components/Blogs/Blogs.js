import React from 'react';

const Blogs = () => {
    return (
        <div className='border m-24 p-8 grid grid-cols-3'>
            <div className='border m-12 p-6'>
                <b>Q1. What is Semantic Tag and give some examples ?</b>
                <br /><br />
                <strong>Answer:</strong> <br /> Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Examples: Although nearly every HTML4 tag and all the HTML5 tags have semantic meanings, some tags are primarily semantic.strong, span, em, blockquote,h1, h2, h3, h4, h5, etc. You can use heading tags to make fonts bigger and bolder, but if the text is not a heading, use the font weight and font size CSS properties instead.
            </div>
            <div className='border m-12 p-6'>
                <b>Q2.What is Context API ?</b>
                <br /><br />
                <strong>Answer:</strong> <br /> Context provides a way to pass data through the component tree without having to pass props down manually at every level.In a typical React application, data is passed top - down(parent to child) via props, but sometimes it is very painful and repeat same code in many times that causes problem to handle the codes. Yes, here is a solution, context api provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
            </div>

            <div className='border m-12 p-6'>
                <b>Q3. What is Inline and Inline-Block element ?</b>
                <br /><br />
                <strong>Answer:</strong> <br />
                <b>Inline:</b> The element doesn't start on a new line and only occupy just the width it requires.You can't set the width or height. <br />
                <b>Inline-Block:</b> It's formatted just like the inline element, where it doesn't start on a new line.BUT, you can set width and height values. <br />
                <b>Block:</b> The element will start on a new line and occupy the full width available.And you can set width and height values.
            </div>
        </div>
    );
};

export default Blogs;