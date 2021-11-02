export class Frame {

    private readonly name: string
    private readonly lexicalUnits: Array<string>
    private readonly frameElements: Array<string>

    /**
     * Constructor of {@link Frame} class which takes inputStream as input and reads the frame
     *
     * @param name  Name of the frame
     */
    constructor(name: string) {
        this.name = name
        this.lexicalUnits = []
        this.frameElements = []
    }

    addLexicalUnit(lexicalUnit: string){
        this.lexicalUnits.push(lexicalUnit)
    }

    addFrameElement(frameElement: string){
        this.frameElements.push(frameElement)
    }

    lexicalUnitExists(lexicalUnit: string): boolean{
        return this.lexicalUnits.includes(lexicalUnit)
    }

    getLexicalUnit(index: number): string{
        return this.lexicalUnits[index]
    }

    getFrameElement(index: number): string{
        return this.frameElements[index]
    }

    lexicalUnitSize(): number{
        return this.lexicalUnits.length
    }

    frameElementSize(): number{
        return this.frameElements.length
    }

    getName(): string{
        return this.name
    }
}