(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Frame = void 0;
    class Frame {
        /**
         * Constructor of {@link Frame} class which takes inputStream as input and reads the frame
         *
         * @param name  Name of the frame
         */
        constructor(name) {
            this.name = name;
            this.lexicalUnits = [];
            this.frameElements = [];
        }
        addLexicalUnit(lexicalUnit) {
            this.lexicalUnits.push(lexicalUnit);
        }
        addFrameElement(frameElement) {
            this.frameElements.push(frameElement);
        }
        lexicalUnitExists(lexicalUnit) {
            return this.lexicalUnits.includes(lexicalUnit);
        }
        getLexicalUnit(index) {
            return this.lexicalUnits[index];
        }
        getFrameElement(index) {
            return this.frameElements[index];
        }
        lexicalUnitSize() {
            return this.lexicalUnits.length;
        }
        frameElementSize() {
            return this.frameElements.length;
        }
        getName() {
            return this.name;
        }
    }
    exports.Frame = Frame;
});
//# sourceMappingURL=Frame.js.map