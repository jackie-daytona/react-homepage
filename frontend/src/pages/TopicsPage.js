import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#servers">Servers</a>
                <a href="#frontend">Frontend</a>
                <a href="#images">Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    In standard practice, an index.html file in the root directory acts as a website's homepage. When entering the <strong>URL</strong>, if a user does not specify anything after the <strong>domain</strong> name, they will be brought to that site's index.html file. When viewing my index.html in Chrome, the <strong>web server's</strong> URL ends at the folder name /a1-casparyd/, but the local computer's URL goes all the way to the file itself -- a path of a1-casparyd/index.html. The web server's path ending at "/" demonstrates how the web server recognizes the index.html file as the <strong>designated homepage</strong>. 
                </p>
                <p>
                    In the general headers, the request URLs show the aforementioned difference in resource paths. Also, the scheme on the local computer is file, and, through the web server, the scheme is <strong>HTTPS</strong>. The <strong>response headers</strong> on the web server are much more detailed than on the local computer: the local version only shows Content-Type: text/html and Last-Modified. To name a few, the web server's response headers contain Accept-Ranges, Connection, Content-Length and Server. Unsurprisingly, the difference between the <strong>request headers</strong> is similar to the response headers. The local computer page has three things listed, and the web server has 18 items listed.
                </p>
                <p>
                    The favicon is automatically provided by the OSU server. It has a <strong>status code</strong> of 200 because the response was handled successfully by the server, and as a result it is displayed in my browser's <strong>tab</strong>. Both the main.css and main.js are showing 400 status codes which occur when an invalid request is made, so a server cannot process the request successfully. For the two main.css and main.js files, the status code I receive is a 404 code: meaning that neither of those files were found on the server (which makes sense since neither were created for this file).
                </p>
                <p>
                    The <strong>URL</strong> to my web file is https://web.engr.oregonstate.edu/~casparyd/a1-casparyd/. The <strong>scheme</strong> or <strong>protocol</strong> of it is HTTPS, the encrypted variant of HTTP. The <strong>subdomain</strong>, the subsection of the server, is web.engr, and the domain or hostname is oregonstate with a .edu extension. The resources for this URL is the path name to the file on the web server, and the "/" at the end of the URL maps to the index.html designated homepage. The <strong>port</strong> number is 443 because the scheme is HTTPS, but, since the default number is being used, the number is omitted from this URL.
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> is centered around users and the user experience in a website or application. A page's visual design, the graphical user-interface (GUI for short) and the interactive experience are the three key areas developers focus on for optimal frontend design. Consistency across color scheme, font, photography/illustrations and navigation are imperative for an appealing visual design.
                </p>
                <h4>The Five "E's" of Usability:</h4>
                <dl>
                    <dt>Effective</dt>
                    <dd>The product (or system) helps users meet their goals.</dd>
                    <dt>Efficient</dt>
                    <dd>The product enables users to perform tasks with the fewest number of steps.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>Users can immediately understand how to locate their objectives or goals.</dd>
                    <dt>Error-free</dt>
                    <dd>Prevents users from running into roadblocks.</dd>
                    <dt>Enjoyable/engaging</dt>
                    <dd>The product fits the needs of the audience.</dd>
                </dl>
                <p>
                    <strong>Page Layout Tags</strong> organize a page's content by breaking up the flow to improve usability. The <strong>header</strong> element contains a site's banner: it usually contains a name, publisher and slogan. The <strong>main</strong> element contains the primary block of content on a page. The <strong>section</strong> element groups content that is related by theme, and the <strong>article</strong> element is used inside a section to expound upon a single topic relevant to the theme. The <strong>nav</strong> element provides blocks of navigation whereby users can move from the current page to other pages. Lastly, the <strong>footer</strong> element sits below the main tag and provides legal or contact information and links to important company pages; a website owner's copyright statement is found in the footer as well.
                </p>
                <h4>How anchors link to external content, internal content and from page-to-page:</h4>
                <ol>
                    <li>When linking externally, anchor elements use the href attribute in their opening tags to specify the complete URL where the link will take the user once clicked. A complete URL to a resource is known as an <strong>absolute path</strong>, and it is commonly used when linking externally.</li>
                    <li>When linking internally, anchor elements use the href attribute to specify the ID of another element within the same page. A <strong>relative path</strong> is used to link to other pages within the same site, so a partial URL is used for the location of the file relative to the current one.</li>
                    <li>When linking page-to-page, an anchor grouping is used inside a nav element to create a row of tabs or menu for a user to move from page-to-page.</li>
                </ol>
            </article>
            <article id="images">
                <h3>Image Optimization</h3>
                <p>
                    Web images should have descriptive file names (who, what, when, where) for better search engine optimization. Small file sizes are imperative to ensure the fastest load time possible. Images should be cropped to the exact dimensions of their space on the page -- this also improves load times. Using the correct file format for each type of image is important for proper compression and image quality. Reducing resolution is another specification; this matches images better with the capabilities of monitors. Matching the proper <strong>color mode</strong> to the file type is the last specification: <strong>RGB</strong> is used for PNG, JPG, SVG and WebP. Indexed color mode is used for GIF and occasionally PNG.
                </p>
                <p>
                    Certain file formats are best used for specific types of images. JPG and WebP are best used for images of photography with JPG being the most common. The high resolution and detail of photos creates an enormous file size for the web, and JPG and WebP can compress file sizes down to increase load times and lessen server load. PNG can be used for photos if quality compression is used, but pixelation should be expected. GIF, PNG and SVG are used for line art graphics and animated images. GIF is the most common for line art, and 24-bit PNG is used for graphics with true transparency. These are used because they maintain a clear and crisp image around text and shapes.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    Browsers and devices use <strong>favicons</strong> for brand recognition: a favicon lets a user quickly identify what site they're using. In a browser, a favicon is displayed in the browser tab next to a site/page's title. On a device, a favicon is used as the touchable or clickable logo for a website or application. Favicons can also be displayed in the results list of a search engine. 
                </p>
            </article>
            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>
                    <strong>Cascading Stylesheets</strong> or <strong>CSS</strong>  is a styling language that is used to change the presentation and look of a web document. In modern web development, HTML (and other markup languages) provide the structure for a site or app, and CSS alters that structures to provide style and polish. CSS is a useful tool to improve the usability and readability of webpages. It also helps developers modify websites so they can better work with marketing departments and follow brand requirements.
                </p>
                <p>
                    There are five ways to incorporate stylesheets into an HTML document. The first and primarily used method is through <strong>external</strong> linking. This is done by creating a separate CSS stylesheet and linking to it in the head section of an HTML document. It is a useful method because one CSS sheet can style multiple documents. The second method is through <strong>importing</strong> other stylesheets into others, and this is good to combine specific components of certain sheets. <strong>Embedding</strong> directly into HTML and JS files is the third method: styles can be embedded directly with a style tag. <strong>Inline</strong> styling is the fourth way, and it is done within an element's tag using an attribute. The final method is manipulation of the <strong>Document Object Model (DOM)</strong> in <strong>regular JavaScript</strong>. These last three embedded methods are usually used for one-off changes.
                </p>
            </article>
            <article id="forms">
                <h3>HTML Forms</h3>
                <p>
                    There are 6 major goals to make HTML Forms more accessible. The first three are: <strong>provide clear instructions</strong>, <strong>let users know why you're gathering data</strong>, and <strong>setting the first field to autofocus</strong>. The last three are to: <strong>ensure each form control can be filled in using the keyboard</strong>, <strong>add tab indexing to complex forms</strong> and <strong>ensure validation messages are screen readable</strong>. These goals serve an important purpose to enable new users, people with disabilities, and non-tech-savvy people to fill out online forms efficiently and without frustration. Per the Americans with Disabilities Act (ADA), the US government requires websites to be accessible.
                </p>
                <p>
                    When creating a form with HTML, certain tags are required or more important than others. The <strong>form tag</strong> is used to add a form to an HTML document, and it has two attributes. The <strong>action</strong> attribute specifies the URL where the form's output will be sent, and <strong>method</strong> specifies which HTTP method will be used in the HTTP request: <strong>GET</strong> and <strong>POST</strong> being the two most common. The <strong>label</strong> tag pairs with form controls to help users using screen readers better understand their entries; it's <strong>for</strong> attribute matches with the ID of the form control. The <strong>input</strong> tag is the most widely used tag for getting a user's input. Its <strong>type</strong> attribute changes its display dramatically which makes the tag versatile. Input's <strong>name</strong> attribute is necessary because that is how the server can identify the data items in the form. The <strong>select</strong> tag is an important element because it displays choices in a drop-down list for users to select. Like the input element, it has a name attribute providing the same functionality, and select also has the <strong>option</strong> attribute which defines choices in the drop-down menu. The <strong>textarea</strong> tag displays a text box for users to write messages in forms, and it has too many attributes to list here! Lastly, the <strong>button</strong> element displays the button for a user to submit their form when they're done.
                </p>
                <p>
                    There are several ways to style forms, but a few certain practices are recommended to improve usability. One obvious recommendation is to augment form elements so they can be filled in on a cellphone or with a touchscreen. This requires the height and width of inputs, selects and buttons to be increased closer to fingertip size. Increasing font size and padding between form controls is important as well to accommodate people with arthritic hands and people with larger fingers. Changing a <strong>fieldset's</strong> background color helps differentiate areas of the form, and adding placeholder values in text boxes improves usability.
                </p>
            </article>
            <article id="express">
                <h3>Node, npm, and Express</h3>
                <p>
                    <strong>Node.js</strong> or simply <strong>Node</strong> is an open-source runtime system used to make server side applications in <strong>JavaScript</strong>. Node allows developers to execute JS code outside a web browser. Node's package manager, or <strong>npm</strong>, allows users of Node to install and utilize the large number of open-source packages (developed and tested pieces of code) that Node comes with. <strong>Express.js</strong> or <strong>Express</strong> is a popular framework that has been developed to assist building web applications with Node. Express allows Node users several features to alter their applications' data and handle said data's routing. All three of these technologies provide web developers with pre-written software and functionality to both increase the capabilities of their web applications and abstract away problems through package use.
                </p>
            </article>
            <article id="javascript">
                <h3>Properties of JavaScript</h3>
                <p>
                    <strong>JavaScript</strong> has several data types. The number data type represents integers, and the string type represents characters. The boolean type, like most languages, is either true or false to handle logical evaluations. Two special values, <strong>null</strong> and <strong>undefined</strong>, are used to indicate the absence of a value. Undefined is used when a variable is declared but not initialized, if a function is called with fewer arguments than parameters, or if a function does not return a value. Null is used for other instances of the absence of a value. The <strong>object</strong> type contains a set of name:value pairs, and the pairs are known as properties.
                </p>
                <p>
                    The properties of an object can be created (or added), read, updated (or modified) and deleted. These four operations are known as <strong>CRUD</strong> operations. Creating or updating an object is done by using the "." operator on a variable in its assignment statement, and the "." operator is used for reading an object property. The delete operator removes an object. One type of object in JavaScript is an <strong>array</strong>. The array is similar to ones in other languages: JS arrays are zero-indexed like others and used to contain a list of elements. Since arrays are objects, the property names of arrays are not numbers starting at 0, but those numbers as strings, e.g., '0', '1', '2'. JSON, or <strong>JavaScript Object Notation</strong>, is a popular data interchange format that is language independent, so several languages have libraries to incorporate JSON files. This language independence allows data to be exchanged by different programs that are written in different languages. In JavaScript, the primary use of JSON is to read in JSON files as JavaScript objects and vice versa.
                </p>
                <p>
                    Like most languages, conditionals in JS are used to support branching and provide logic in a program. <strong>If</strong> and <strong>switch</strong> statements are the statements used for conditional branching in JS. If statements can be chained into an <strong>if-then-else</strong> of logic like in other languages, and <strong>else if</strong> is used to create additional branches. For looping in JS, <strong>while</strong> statements are composed as "while(expression)statement(s) to execute". "While" the expression evaluates to true, execute the statement or statements. <strong>Do while</strong> statements are reversed, so the statement executes first and then the while(expression) is evaluated for truth or falsehood. <strong>For</strong> loops (again like most other languages) are used to execute a segmented amount of code a specified number of times. For loops are generally used to iterate over elements -- such as an array.
                </p>
                <p>
                    <strong>Object-oriented programming</strong>, or OOP, is a programming paradigm that designs programs by creating objects and implementing methods for objects to interact with one another. Several of the most commonly used programming languages today support OOP, and JavaScript is no exception. Conceptually, objects are supposed to have <strong>identity</strong>, <strong>state</strong>, and <strong>behavior</strong>. Identity shows that an object is distinct, each's objects state is in its properties, and functions can be added to an object's properties to create behavior. In keeping data and functions bound together in objects, OOP excels at abstracting background implementation details and only providing users with essential data or information.
                </p>
                <p>
                    <strong>Functional programming</strong> is a programming paradigm whereby functions are the main tools used in the construction of programs. In JS, functions are "first-class" values meaning: functions can be assigned to variables, functions can be used as parameters in other functions, and functions can return other functions. This additional functionality (heh) gives developers several opportunities to create efficient and dynamic programs. By keeping the mutation of data limited inside functions, functional programming is claimed to make programs that are more organized and easier to debug.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;