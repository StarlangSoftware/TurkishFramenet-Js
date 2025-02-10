import { Frame } from "./Frame";
export declare class FrameNet {
    private readonly frames;
    /**
     * A constructor of {@link FrameNet} class which reads all frame files inside the files2.txt file. For each
     * filename inside that file, the constructor creates a FrameNet.Frame and puts in inside the frames {@link ArrayList}.
     */
    constructor();
    /**
     * Checks if the given lexical unit exists in any frame in the frame set.
     * @param synSetId Id of the lexical unit
     * @return True if any frame contains the given lexical unit, false otherwise.
     */
    lexicalUnitExists(synSetId: string): boolean;
    /**
     * Returns an array of frames that contain the given lexical unit in their lexical units
     * @param synSetId Id of the lexical unit.
     * @return An array of frames that contains the given lexical unit.
     */
    getFrames(synSetId: string): Array<Frame>;
    /**
     * Returns number of frames in the frame set.
     * @return Number of frames in the frame set.
     */
    size(): number;
    /**
     * Returns the element at the specified position in the frame list.
     * @param index index of the element to return
     * @return The element at the specified position in the frame list.
     */
    getFrame(index: number): Frame;
}
