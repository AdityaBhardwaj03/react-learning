const heading = React.createElement("h1", {
    id: "heading-id",
    class: "heading-class",
},
    "Hello React!");

/**
 * <div id = "parent">
 *      <div id = "child">
 *       <h1></h1>
 *      </div>
 * </div>
 */


const heading2 = React.createElement("div",
    { id: "parent" },

    React.createElement("div",
        { id: "child" },
        React.createElement("h1", {}, "Hi from h1 tag")
    )
);

const parent = React.createElement("div", { id: "parent" }, [

    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
]);

//first element is tags.
//Second is object for attributes.
//thirt is the value.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(heading2);
root.render(parent);