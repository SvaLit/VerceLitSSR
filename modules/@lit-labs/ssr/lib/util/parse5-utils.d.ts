/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * TODO(usergenic): The following set of helper functions are more-or-less
 * copied from the npm package dom5 which could not be brought in at this
 * time because it is bound to `parse5@4` where this package uses `parse5@5`.
 * Once dom5 is updated, we can just use that package and not maintain these
 * here.
 */
import { DefaultTreeNode, DefaultTreeElement, Node, DefaultTreeCommentNode, DefaultTreeDocumentFragment, DefaultTreeParentNode } from 'parse5';
import * as parse5lib from 'parse5';
export declare const parseFragment: typeof parse5lib.parseFragment;
export declare function filter(iter: any, predicate: any, matches?: any[]): any[];
export declare function getAttr(ast: Node, name: string): any;
export declare function getTextContent(node: any): string;
export declare function setAttr(ast: any, name: any, value: any): void;
export declare function insertBefore(parent: any, oldNode: any, newNode: any): void;
export declare function insertNode(parent: any, index: any, newNode: any, replace?: any): void;
export declare function isElement(node: DefaultTreeNode): node is DefaultTreeElement;
export declare function isCommentNode(node: DefaultTreeNode): node is DefaultTreeCommentNode;
export declare function isDocumentFragment(node: DefaultTreeNode): node is DefaultTreeDocumentFragment;
export declare function isTextNode(node: DefaultTreeNode): node is parse5lib.DefaultTreeTextNode;
export declare type GetChildNodes = (node: DefaultTreeParentNode) => Array<DefaultTreeNode> | undefined;
export declare const defaultChildNodes: GetChildNodes;
export declare function depthFirst(node: DefaultTreeNode | DefaultTreeDocumentFragment, getChildNodes?: GetChildNodes): Iterable<DefaultTreeNode>;
export declare function nodeWalkAll(node: any, predicate: any, matches?: any, getChildNodes?: any): any[];
export declare function removeFakeRootElements(node: any): void;
export declare function removeNode(node: any): void;
export declare function removeNodeSaveChildren(node: any): void;
export declare function setTextContent(node: any, value: any): void;
export declare function newTextNode(value: any): {
    nodeName: string;
    value: any;
    parentNode: undefined;
    attrs: never[];
    __location: undefined;
};
export interface Visitor {
    pre?: (node: DefaultTreeNode, parent?: DefaultTreeParentNode) => boolean | void;
    post?: (node: DefaultTreeNode, parent?: DefaultTreeParentNode) => boolean | void;
    getChildNodes?: GetChildNodes;
}
export declare const traverse: (node: DefaultTreeNode, visitor: Visitor, parent?: DefaultTreeParentNode | undefined) => void;
//# sourceMappingURL=parse5-utils.d.ts.map