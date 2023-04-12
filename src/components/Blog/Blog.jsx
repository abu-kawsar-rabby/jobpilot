import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div>
            <Header
                props="Blog"
            ></Header>
            <section className="px-5 md:px-36 mx-auto text-left">
                <div className="shadow my-2 p-3 rounded">
                    <h1 className="mt-4 mb-2 text-xl font-bold">1. When should  use context API?</h1>
                    <h1 className="text-sm"><span className="text-green-600 font-semibold">Answer: </span>Context API used for access data from many components at different nested levels. </h1>
                </div>
                <div className="shadow my-2 p-3 rounded">
                    <h1 className="mt-4 mb-2 text-xl font-bold">2. What is a custom hook?</h1>
                    <h1 className="text-sm"><span className="text-green-600 font-semibold">Answer: </span>Custom hook is a hook that create by us for reuseble data that we will use for many different components and it will reduce code repeat and custom hook name start with use....</h1>
                </div>
                <div className="shadow my-2 p-3 rounded">
                    <h1 className="mt-4 mb-2 text-xl font-bold">3. What is useRef?</h1>
                    <h1 className="text-sm"><span className="text-green-600 font-semibold">Answer: </span>useRef is a react build in hook. it will manipulate DOM directly by using ref attribute for particular element.</h1>
                </div>
                <div className="shadow my-2 p-3 rounded">
                    <h1 className="mt-4 mb-2 text-xl font-bold">4. What is useMemo?</h1>
                    <h1 className="text-sm"><span className="text-green-600 font-semibold">Answer: </span>useMemo hook memorise value on it so that same thing doesn't do every time. that's why application performance and speed boost up.</h1>
                </div>

            </section>
        </div>
    );
};

export default Blog;