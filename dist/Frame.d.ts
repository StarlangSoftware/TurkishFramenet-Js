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
    addLexicalUnit(lexicalUnit: string): void;
    addFrameElement(frameElement: string): void;
    lexicalUnitExists(lexicalUnit: string): boolean;
    getLexicalUnit(index: number): string;
    getFrameElement(index: number): string;
    lexicalUnitSize(): number;
    frameElementSize(): number;
    getName(): string;
}
