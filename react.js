class ElementWrap {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(component) {
        this.root.appendChild(component.root);
    }

}

class TextWrap {
    constructor(type) {
        this.root = document.createTextNode(type);
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }

    setAttribute(name, value) {
        this.props[name] = value

    }

    appendChild(child) {
        this.children.push(child);

    }
    get root() {
        if(!this._root) {
            this._root = this.render().root;
        }
        return this._root;
    }

}

export const createElement = (type, attrs, ...children) => {
    let el = null; 
    if(typeof type === 'string') {
        el = new ElementWrap(type);
    } else {
        el = new type;
    }
    for(let attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
    }
    let insertChildren = (children) => {
        for(let child of children) {
            if(typeof child === 'string') {
                child = new TextWrap(child);
            }
            if(typeof child === 'object' && child instanceof Array) {
                insertChildren(child)
            } else {
                el.appendChild(child);
            }
        }
    }
    insertChildren(children);
    return el;
};

export const render = (dom) => {
    document.body.appendChild(dom.root);
};