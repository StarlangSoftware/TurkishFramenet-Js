import { Frame } from "./Frame";
export declare class FrameNet {
    private frames;
    constructor();
    lexicalUnitExists(synSetId: string): boolean;
    getFrames(synSetId: string): Array<Frame>;
    size(): number;
    getFrame(index: number): Frame;
}
