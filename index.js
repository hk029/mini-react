const createElement = (tag, attrs, ...children) => {
    const el = document.createElement(tag);
    for(attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }
    children.forEach(child => {
        let node = child;
        if(typeof child === 'string') {
            node = document.createTextNode(child);
        }
        el.appendChild(node);
    });
    return el;
};

const render = (dom) => {
    document.body.appendChild(dom);
};


render(<div>
    <div style="color:red;">123</div>
    <p></p>
</div>);
