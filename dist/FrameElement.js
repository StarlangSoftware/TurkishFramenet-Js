export class FrameElement {
    /**
     * A constructor of {@link FrameElement} class which takes frameElement string which is in the form of frameElementType$id
     * and parses this string into frameElementType and id. If the frameElement string does not contain '$' then the
     * constructor return a NONE type frameElement.
     *
     * @param frameElement  Argument string containing the argumentType and id
     * @param frame  Frame of the frameElement
     * @param id  Id of the frameElement
     */
    constructor(frameElement, frame, id) {
        if (frame == undefined) {
            if (frameElement.includes("$")) {
                this.frameElementType = frameElement.substr(0, frameElement.indexOf("$"));
                this.frame = frameElement.substring(frameElement.indexOf("$") + 1, frameElement.lastIndexOf("$"));
                this.id = frameElement.substring(frameElement.lastIndexOf("$") + 1);
            }
            else {
                this.frameElementType = "NONE";
            }
        }
        else {
            this.frameElementType = frameElement;
            this.frame = frame;
            this.id = id;
        }
    }
    /**
     * Accessor for frameElementType.
     *
     * @return frameElementType.
     */
    getFrameElementType() {
        return this.frameElementType;
    }
    /**
     * Accessor for frame.
     *
     * @return frame.
     */
    getFrame() {
        return this.frame;
    }
    /**
     * Accessor for id.
     *
     * @return id.
     */
    getId() {
        return this.id;
    }
    /**
     * Mutator for id.
     *
     * @param id New id.
     * @return id.
     */
    setId(id) {
        this.id = id;
    }
    /**
     * toString converts an {@link FrameElement} to a string. If the frameElementType is "NONE" returns only "NONE", otherwise
     * it returns argument string which is in the form of frameElementType$id
     *
     * @return string form of frameElement
     */
    toString() {
        if (this.frameElementType == "NONE") {
            return this.frameElementType;
        }
        else {
            return this.frameElementType + "$" + this.frame + "$" + this.id;
        }
    }
}
//# sourceMappingURL=FrameElement.js.map