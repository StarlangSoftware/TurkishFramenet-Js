export declare class Frame {
    private readonly name;
    private readonly lexicalUnits;
    private readonly frameElements;
    /**
     * Constructor of {@link Frame} class which takes inputStream as input and reads the frame
     *
     * @param name  Name of the frame
     */
    constructor(name: string);
    /**
     * Adds a new lexical unit to the current frame
     * @param lexicalUnit Lexical unit to be added
     */
    addLexicalUnit(lexicalUnit: string): void;
    /**
     * Adds a new frame element to the current frame
     * @param frameElement Frame element to be added
     */
    addFrameElement(frameElement: string): void;
    /**
     * Checks if the given lexical unit exists in the current frame
     * @param lexicalUnit Lexical unit to be searched.
     * @return True if the lexical unit exists, false otherwise.
     */
    lexicalUnitExists(lexicalUnit: string): boolean;
    /**
     * Accessor for a given index in the lexicalUnit array.
     * @param index Index of the lexical unit
     * @return The lexical unit at position index in the lexicalUnit array
     */
    getLexicalUnit(index: number): string;
    /**
     * Accessor for a given index in the frameElements array.
     * @param index Index of the frame element
     * @return The frame element at position index in the frameElements array
     */
    getFrameElement(index: number): string;
    /**
     * Returns number of lexical units in the current frame
     * @return Number of lexical units in the current frame
     */
    lexicalUnitSize(): number;
    /**
     * Returns number of frame elements in the current frame
     * @return Number of frame elements in the current frame
     */
    frameElementSize(): number;
    /**
     * Accessor for the name of the frame
     * @return Name of the frame
     */
    getName(): string;
}
