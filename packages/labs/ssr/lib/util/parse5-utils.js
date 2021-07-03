/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const parse5 = require('parse5');
export const parseFragment = parse5.parseFragment;
export function filter(iter, predicate, matches = []) {
    for (const value of iter) {
        if (predicate(value)) {
            matches.push(value);
        }
    }
    return matches;
}
export function getAttr(ast, name) {
    if (ast.hasOwnProperty('attrs')) {
        const attr = (ast.attrs).find(({ name: attrName }) => attrName === name);
        if (attr) {
            return attr.value;
        }
    }
}
export function getTextContent(node) {
    if (isCommentNode(node)) {
        return node.data || '';
    }
    if (isTextNode(node)) {
        return node.value || '';
    }
    const subtree = nodeWalkAll(node, isTextNode);
    return subtree.map(getTextContent).join('');
}
export function setAttr(ast, name, value) {
    const attr = ast.attrs.find(({ name: attrName }) => attrName === name);
    if (attr) {
        attr.value = value;
    }
    else {
        ast.attrs.push({ name, value });
    }
}
export function insertBefore(parent, oldNode, newNode) {
    const index = parent.childNodes.indexOf(oldNode);
    insertNode(parent, index, newNode);
}
export function insertNode(parent, index, newNode, replace = undefined) {
    if (!parent.childNodes) {
        parent.childNodes = [];
    }
    let newNodes = [];
    let removedNode = replace ? parent.childNodes[index] : null;
    if (newNode) {
        if (isDocumentFragment(newNode)) {
            if (newNode.childNodes) {
                newNodes = Array.from(newNode.childNodes);
                newNode.childNodes.length = 0;
            }
        }
        else {
            newNodes = [newNode];
            removeNode(newNode);
        }
    }
    if (replace) {
        removedNode = parent.childNodes[index];
    }
    Array.prototype.splice.apply(parent.childNodes, [index, replace ? 1 : 0].concat(newNodes));
    newNodes.forEach((n) => {
        n.parentNode = parent;
    });
    if (removedNode) {
        removedNode.parentNode = undefined;
    }
}
export function isElement(node) {
    return node.tagName !== undefined;
}
export function isCommentNode(node) {
    return node.nodeName === '#comment';
}
export function isDocumentFragment(node) {
    return node.nodeName === '#document-fragment';
}
export function isTextNode(node) {
    return node.nodeName === '#text';
}
export const defaultChildNodes = (node) => node.childNodes;
export function* depthFirst(node, getChildNodes = defaultChildNodes) {
    yield node;
    const childNodes = getChildNodes(node);
    if (childNodes === undefined) {
        return;
    }
    for (const child of childNodes) {
        yield* depthFirst(child, getChildNodes);
    }
}
export function nodeWalkAll(node, predicate, matches = [], getChildNodes = defaultChildNodes) {
    return filter(depthFirst(node, getChildNodes), predicate, matches);
}
export function removeFakeRootElements(node) {
    const fakeRootElements = [];
    traverse(node, {
        pre: (node) => {
            if (node.nodeName &&
                node.nodeName.match(/^(html|head|body)$/i) &&
                !node.sourceCodeLocation) {
                fakeRootElements.unshift(node);
            }
        },
    });
    fakeRootElements.forEach(removeNodeSaveChildren);
}
export function removeNode(node) {
    const parent = node.parentNode;
    if (parent && parent.childNodes) {
        const idx = parent.childNodes.indexOf(node);
        parent.childNodes.splice(idx, 1);
    }
    node.parentNode = undefined;
}
export function removeNodeSaveChildren(node) {
    // We can't save the children if there's no parent node to provide
    // for them.
    const fosterParent = node.parentNode;
    if (!fosterParent) {
        return;
    }
    const children = (node.childNodes || []).slice();
    for (const child of children) {
        insertBefore(node.parentNode, node, child);
    }
    removeNode(node);
}
export function setTextContent(node, value) {
    if (isCommentNode(node)) {
        node.data = value;
    }
    else if (isTextNode(node)) {
        node.value = value;
    }
    else {
        const tn = newTextNode(value);
        tn.parentNode = node;
        node.childNodes = [tn];
    }
}
export function newTextNode(value) {
    return {
        nodeName: '#text',
        value: value,
        parentNode: undefined,
        attrs: [],
        __location: undefined,
    };
}
export const traverse = (node, visitor, parent) => {
    const getChildNodes = visitor.getChildNodes ?? defaultChildNodes;
    let visitChildren = true;
    if (typeof visitor.pre === 'function') {
        visitChildren = visitor.pre(node, parent);
    }
    if (visitChildren !== false) {
        const childNodes = getChildNodes(node);
        if (childNodes !== undefined) {
            for (const child of childNodes) {
                traverse(child, visitor, node);
            }
        }
    }
    if (typeof visitor.post === 'function') {
        visitor.post(node, parent);
    }
};
//# sourceMappingURL=parse5-utils.js.map