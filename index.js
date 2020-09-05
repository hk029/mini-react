const createElement = (tag, attrs, ...children) => {
    const el = document.createElement(tag);
    for(attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }
    children.forEach(child => {
        el.appendChild(child);
    });
    return el;
};

const render = (dom) => {
    document.body.appendChild(dom);
};


render(<div>
    <div></div>
    <p></p>
</div>);
