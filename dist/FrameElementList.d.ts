export declare class FrameElementList {
    private readonly _frameElements;
    /**
     * Constructor of frame element list from a string. The frame elements for a word is a concatenated list of
     * frame element separated via '#' character.
     * @param frameElementList String consisting of frame elements separated with '#' character.
     */
    constructor(frameElementList: string);
    /**
     * Overloaded toString method to convert a frame element list to a string. Concatenates the string forms of all
     * frame element with '#' character.
     * @return String form of the frame element list.
     */
    toString(): string;
    /**
     * Replaces id's of predicates, which have previousId as synset id, with currentId.
     * @param previousId Previous id of the synset.
     * @param currentId Replacement id.
     */
    updateConnectedId(previousId: string, currentId: string): void;
    /**
     * Adds a predicate argument to the frame element list of this word.
     * @param predicateId Synset id of this predicate.
     */
    addPredicate(predicateId: string): void;
    /**
     * Removes the predicate with the given predicate id.
     */
    removePredicate(): void;
    /**
     * Checks if one of the frame elements is a predicate.
     * @return True, if one of the frame elements is predicate; false otherwise.
     */
    containsPredicate(): boolean;
    /**
     * Checks if one of the frame element is a predicate with the given id.
     * @param predicateId Synset id to check.
     * @return True, if one of the frame element is predicate; false otherwise.
     */
    containsPredicateWithId(predicateId: string): boolean;
    /**
     * Returns the frame elements as an array list of strings.
     * @return Frame elements as an array list of strings.
     */
    getFrameElements(): Array<string>;
    /**
     * Checks if the given argument with the given type and id exists or not.
     * @param frameElementType Type of the frame element to search for.
     * @param frame frame Name of the frame to search for
     * @param id Id of the frame element to search for.
     * @return True if the frame element exists, false otherwise.
     */
    containsFrameElement(frameElementType: string, frame: string, id: string): boolean;
}
