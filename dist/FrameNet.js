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
        /**
         * A constructor of {@link FrameNet} class which reads all frame files inside the files2.txt file. For each
         * filename inside that file, the constructor creates a FrameNet.Frame and puts in inside the frames {@link ArrayList}.
         */
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
        /**
         * Checks if the given lexical unit exists in any frame in the frame set.
         * @param synSetId Id of the lexical unit
         * @return True if any frame contains the given lexical unit, false otherwise.
         */
        lexicalUnitExists(synSetId) {
            for (let frame of this.frames) {
                if (frame.lexicalUnitExists(synSetId)) {
                    return true;
                }
            }
            return false;
        }
        /**
         * Returns an array of frames that contain the given lexical unit in their lexical units
         * @param synSetId Id of the lexical unit.
         * @return An array of frames that contains the given lexical unit.
         */
        getFrames(synSetId) {
            var result = [];
            for (let frame of this.frames) {
                if (frame.lexicalUnitExists(synSetId)) {
                    result.push(frame);
                }
            }
            return result;
        }
        /**
         * Returns number of frames in the frame set.
         * @return Number of frames in the frame set.
         */
        size() {
            return this.frames.length;
        }
        /**
         * Returns the element at the specified position in the frame list.
         * @param index index of the element to return
         * @return The element at the specified position in the frame list.
         */
        getFrame(index) {
            return this.frames[index];
        }
    }
    exports.FrameNet = FrameNet;
});
//# sourceMappingURL=FrameNet.js.map