import {FrameElement} from "./FrameElement";

export class FrameElementList{

    private readonly _frameElements: Array<FrameElement>

    /**
     * Constructor of frame element list from a string. The frame elements for a word is a concatenated list of
     * frame element separated via '#' character.
     * @param frameElementList String consisting of frame elements separated with '#' character.
     */
    constructor(frameElementList: string){
        this._frameElements = []
        let items = frameElementList.split("#");
        for (let item of items) {
            this._frameElements.push(new FrameElement(item));
        }
    }

    /**
     * Overloaded toString method to convert a frame element list to a string. Concatenates the string forms of all
     * frame element with '#' character.
     * @return String form of the frame element list.
     */
    toString(): string {
        if (this._frameElements.length == 0){
            return "NONE"
        } else {
            let result = this._frameElements[0].toString()
            for (let i = 1; i < this._frameElements.length; i++){
                result += "#" + this._frameElements[i].toString()
            }
            return result;
        }
    }

    /**
     * Replaces id's of predicates, which have previousId as synset id, with currentId.
     * @param previousId Previous id of the synset.
     * @param currentId Replacement id.
     */
    updateConnectedId(previousId: string, currentId: string){
        for (let frameElement of this._frameElements) {
            if (frameElement.getId() == previousId){
                frameElement.setId(currentId);
            }
        }
    }

    /**
     * Adds a predicate argument to the frame element list of this word.
     * @param predicateId Synset id of this predicate.
     */
    addPredicate(predicateId: string){
        if (this._frameElements.length != 0 && this._frameElements[0].getFrameElementType() == "NONE"){
            this._frameElements.shift();
        }
        this._frameElements.push(new FrameElement("PREDICATE", "NONE", predicateId));
    }

    /**
     * Removes the predicate with the given predicate id.
     */
    removePredicate(){
        let i = 0
        for (let frameElement of this._frameElements) {
            if (frameElement.getFrameElementType() == "PREDICATE"){
                this._frameElements.splice(i, 1);
                break;
            }
            i++
        }
    }

    /**
     * Checks if one of the frame elements is a predicate.
     * @return True, if one of the frame elements is predicate; false otherwise.
     */
    containsPredicate(): boolean{
        for (let frameElement of this._frameElements) {
            if (frameElement.getFrameElementType() == "PREDICATE"){
                return true;
            }
        }
        return false;
    }

    /**
     * Checks if one of the frame element is a predicate with the given id.
     * @param predicateId Synset id to check.
     * @return True, if one of the frame element is predicate; false otherwise.
     */
    containsPredicateWithId(predicateId: string): boolean{
        for (let frameElement of this._frameElements) {
            if (frameElement.getFrameElementType() == "PREDICATE" && frameElement.getId() == predicateId){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns the frame elements as an array list of strings.
     * @return Frame elements as an array list of strings.
     */
    getFrameElements(): Array<string>{
        let result = []
        for (let frameElement of this._frameElements) {
            result.push(frameElement.toString());
        }
        return result;
    }

    /**
     * Checks if the given argument with the given type and id exists or not.
     * @param frameElementType Type of the frame element to search for.
     * @param frame frame Name of the frame to search for
     * @param id Id of the frame element to search for.
     * @return True if the frame element exists, false otherwise.
     */
    containsFrameElement(frameElementType: string, frame: string, id: string): boolean{
        for (let frameElement of this._frameElements) {
            if (frameElement.getFrameElementType() == frameElementType &&
                frameElement.getFrame() == frame &&
                frameElement.getId() == id){
                return true;
            }
        }
        return false;
    }
}