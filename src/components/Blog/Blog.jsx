import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div>
            <Header
                props="Blog"
            ></Header>
            <section class="px-5 md:px-36 mx-auto text-left">
                <div class="shadow my-2 p-3 rounded">
                    <h1 class="mt-4 mb-2 text-xl font-bold">1. When should you use context API?</h1>
                    <h1 class="text-sm"><span class="text-green-600 font-semibold">Answer: </span>anshere.</h1>
                </div>
                <div class="shadow my-2 p-3 rounded">
                    <h1 class="mt-4 mb-2 text-xl font-bold">2. What is a custom hook?</h1>
                    <h1 class="text-sm"><span class="text-green-600 font-semibold">Answer: </span>anshere.</h1>
                </div>
                <div class="shadow my-2 p-3 rounded">
                    <h1 class="mt-4 mb-2 text-xl font-bold">3. What is useRef?</h1>
                    <h1 class="text-sm"><span class="text-green-600 font-semibold">Answer: </span>ans.</h1>
                </div>
                <div class="shadow my-2 p-3 rounded">
                    <h1 class="mt-4 mb-2 text-xl font-bold">4. What is useMemo?</h1>
                    <h1 class="text-sm"><span class="text-green-600 font-semibold">Answer: </span>anshere.</h1>
                </div>

            </section>
        </div>
    );
};

export default Blog;