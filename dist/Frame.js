export class Frame {
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
    /**
     * Adds a new lexical unit to the current frame
     * @param lexicalUnit Lexical unit to be added
     */
    addLexicalUnit(lexicalUnit) {
        this.lexicalUnits.push(lexicalUnit);
    }
    /**
     * Adds a new frame element to the current frame
     * @param frameElement Frame element to be added
     */
    addFrameElement(frameElement) {
        this.frameElements.push(frameElement);
    }
    /**
     * Checks if the given lexical unit exists in the current frame
     * @param lexicalUnit Lexical unit to be searched.
     * @return True if the lexical unit exists, false otherwise.
     */
    lexicalUnitExists(lexicalUnit) {
        return this.lexicalUnits.includes(lexicalUnit);
    }
    /**
     * Accessor for a given index in the lexicalUnit array.
     * @param index Index of the lexical unit
     * @return The lexical unit at position index in the lexicalUnit array
     */
    getLexicalUnit(index) {
        return this.lexicalUnits[index];
    }
    /**
     * Accessor for a given index in the frameElements array.
     * @param index Index of the frame element
     * @return The frame element at position index in the frameElements array
     */
    getFrameElement(index) {
        return this.frameElements[index];
    }
    /**
     * Returns number of lexical units in the current frame
     * @return Number of lexical units in the current frame
     */
    lexicalUnitSize() {
        return this.lexicalUnits.length;
    }
    /**
     * Returns number of frame elements in the current frame
     * @return Number of frame elements in the current frame
     */
    frameElementSize() {
        return this.frameElements.length;
    }
    /**
     * Accessor for the name of the frame
     * @return Name of the frame
     */
    getName() {
        return this.name;
    }
}
//# sourceMappingURL=Frame.js.map