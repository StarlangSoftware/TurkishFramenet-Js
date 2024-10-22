import * as assert from "assert";
import {FrameNet} from "../dist/FrameNet";

describe('FrameNetTest', function() {
    describe('FrameNetTest', function() {
        let frameNet = new FrameNet()
        it('testFrameSize', function() {
            assert.strictEqual(809, frameNet.size())
        });
        it('testLexicalUnitSize', function() {
            let count = 0
            for (let i = 0; i < frameNet.size(); i++){
                count += frameNet.getFrame(i).lexicalUnitSize()
            }
            assert.strictEqual(8489, count)
        });
        it('testFrameElementSize', function() {
            let count = 0
            for (let i = 0; i < frameNet.size(); i++){
                count += frameNet.getFrame(i).frameElementSize()
            }
            assert.strictEqual(8656, count)
        });
        it('testDistinctFrameElements', function() {
            var elements : Set<string> = new Set()
            for (let i = 0; i < frameNet.size(); i++){
                for (let j = 0; j < frameNet.getFrame(i).frameElementSize(); j++){
                    elements.add(frameNet.getFrame(i).getFrameElement(j))
                }
            }
            assert.strictEqual(1012, elements.size)
        });
    });
});
