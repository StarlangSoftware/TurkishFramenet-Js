export class FrameElement {

    private readonly frameElementType: string
    private readonly frame: string
    private readonly id: string

    /**
     * A constructor of {@link FrameElement} class which takes frameElement string which is in the form of frameElementType$id
     * and parses this string into frameElementType and id. If the frameElement string does not contain '$' then the
     * constructor return a NONE type frameElement.
     *
     * @param frameElement  Argument string containing the argumentType and id
     * @param frame  Frame of the frameElement
     * @param id  Id of the frameElement
     */
    constructor(frameElement: string, frame?: string, id?: string) {
        if (frame == undefined){
            if (frameElement.includes("$")){
                this.frameElementType = frameElement.substr(0, frameElement.indexOf("$"))
                this.frame = frameElement.substring(frameElement.indexOf("$") + 1, frameElement.lastIndexOf("$"))
                this.id = frameElement.substring(frameElement.lastIndexOf("$") + 1)
            } else {
                this.frameElementType = "NONE"
            }
        } else {
            this.frameElementType = frameElement
            this.frame = frame
            this.id = id
        }
    }

    /**
     * Accessor for frameElementType.
     *
     * @return frameElementType.
     */
    getFrameElementType(): string{
        return this.frameElementType
    }

    /**
     * Accessor for frame.
     *
     * @return frame.
     */
    getFrame(): string{
        return this.frame
    }

    /**
     * Accessor for id.
     *
     * @return id.
     */
    getId(): string{
        return this.id
    }

    /**
     * toString converts an {@link FrameElement} to a string. If the frameElementType is "NONE" returns only "NONE", otherwise
     * it returns argument string which is in the form of frameElementType$id
     *
     * @return string form of frameElement
     */
    toString(): string{
        if (this.frameElementType == "NONE"){
            return this.frameElementType
        } else {
            return this.frameElementType + "$" + this.frame + "$" + this.id;
        }
    }
}