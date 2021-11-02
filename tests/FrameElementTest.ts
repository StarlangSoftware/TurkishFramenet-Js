import * as assert from "assert";
import {FrameElement} from "../dist/FrameElement";

describe('FrameElementTest', function() {
    describe('FrameElementTest', function() {
        it('Frame Element', function() {
            let frameElement = new FrameElement("Agent$Apply_Heat$TUR10-0100230")
            assert.strictEqual("Agent", frameElement.getFrameElementType())
            assert.strictEqual("Apply_Heat", frameElement.getFrame())
            assert.strictEqual("TUR10-0100230", frameElement.getId())
            assert.strictEqual("Agent$Apply_Heat$TUR10-0100230", frameElement.toString())
        });
    });
});
