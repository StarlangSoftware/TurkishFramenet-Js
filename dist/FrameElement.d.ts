export declare class FrameElement {
    private readonly frameElementType;
    private readonly frame;
    private id;
    /**
     * A constructor of {@link FrameElement} class which takes frameElement string which is in the form of frameElementType$id
     * and parses this string into frameElementType and id. If the frameElement string does not contain '$' then the
     * constructor return a NONE type frameElement.
     *
     * @param frameElement  Argument string containing the argumentType and id
     * @param frame  Frame of the frameElement
     * @param id  Id of the frameElement
     */
    constructor(frameElement: string, frame?: string, id?: string);
    /**
     * Accessor for frameElementType.
     *
     * @return frameElementType.
     */
    getFrameElementType(): string;
    /**
     * Accessor for frame.
     *
     * @return frame.
     */
    getFrame(): string;
    /**
     * Accessor for id.
     *
     * @return id.
     */
    getId(): string;
    /**
     * Mutator for id.
     *
     * @param id New id.
     * @return id.
     */
    setId(id: string): void;
    /**
     * toString converts an {@link FrameElement} to a string. If the frameElementType is "NONE" returns only "NONE", otherwise
     * it returns argument string which is in the form of frameElementType$id
     *
     * @return string form of frameElement
     */
    toString(): string;
}
