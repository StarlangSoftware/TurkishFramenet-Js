(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Frame", "nlptoolkit-xmlparser/dist/XmlDocument"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FrameNet = void 0;
    const Frame_1 = require("./Frame");
    const XmlDocument_1 = require("nlptoolkit-xmlparser/dist/XmlDocument");
    class FrameNet {
        constructor() {
            let xmlDocument;
            xmlDocument = new XmlDocument_1.XmlDocument("framenet.xml");
            xmlDocument.parse();
            this.frames = [];
            let rootNode = xmlDocument.getFirstChild();
            let frameNode = rootNode.getFirstChild();
            while (frameNode != undefined) {
                let currentFrame = new Frame_1.Frame(frameNode.getAttributeValue("NAME"));
                let lexicalUnits = frameNode.getFirstChild();
                let lexicalUnit = lexicalUnits.getFirstChild();
                while (lexicalUnit != undefined) {
                    currentFrame.addLexicalUnit(lexicalUnit.getPcData());
                    lexicalUnit = lexicalUnit.getNextSibling();
                }
                let frameElements = lexicalUnits.getNextSibling();
                let frameElement = frameElements.getFirstChild();
                while (frameElement != undefined) {
                    currentFrame.addFrameElement(frameElement.getPcData());
                    frameElement = frameElement.getNextSibling();
                }
                this.frames.push(currentFrame);
                frameNode = frameNode.getNextSibling();
            }
        }
        lexicalUnitExists(synSetId) {
            for (let frame of this.frames) {
                if (frame.lexicalUnitExists(synSetId)) {
                    return true;
                }
            }
            return false;
        }
        getFrames(synSetId) {
            var result = [];
            for (let frame of this.frames) {
                if (frame.lexicalUnitExists(synSetId)) {
                    result.push(frame);
                }
            }
            return result;
        }
        size() {
            return this.frames.length;
        }
        getFrame(index) {
            return this.frames[index];
        }
    }
    exports.FrameNet = FrameNet;
});
//# sourceMappingURL=FrameNet.js.map