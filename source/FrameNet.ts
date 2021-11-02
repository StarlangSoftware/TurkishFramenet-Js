import {Frame} from "./Frame";
import {XmlDocument} from "nlptoolkit-xmlparser/dist/XmlDocument";

export class FrameNet {

    private frames: Array<Frame>

    constructor() {
        let xmlDocument: XmlDocument;
        xmlDocument = new XmlDocument("framenet.xml")
        xmlDocument.parse()
        this.frames = []
        let rootNode = xmlDocument.getFirstChild()
        let frameNode = rootNode.getFirstChild()
        while (frameNode != undefined){
            let currentFrame = new Frame(frameNode.getAttributeValue("NAME"))
            let lexicalUnits = frameNode.getFirstChild()
            let lexicalUnit = lexicalUnits.getFirstChild()
            while (lexicalUnit != undefined){
                currentFrame.addLexicalUnit(lexicalUnit.getPcData())
                lexicalUnit = lexicalUnit.getNextSibling()
            }
            let frameElements = lexicalUnits.getNextSibling()
            let frameElement = frameElements.getFirstChild()
            while (frameElement != undefined){
                currentFrame.addFrameElement(frameElement.getPcData())
                frameElement = frameElement.getNextSibling()
            }
            this.frames.push(currentFrame)
            frameNode = frameNode.getNextSibling()
        }
    }

    lexicalUnitExists(synSetId: string): boolean{
        for (let frame of this.frames){
            if (frame.lexicalUnitExists(synSetId)){
                return true
            }
        }
        return false
    }

    getFrames(synSetId: string): Array<Frame>{
        var result: Array<Frame> = []
        for (let frame of this.frames){
            if (frame.lexicalUnitExists(synSetId)){
                result.push(frame)
            }
        }
        return result
    }

    size(): number{
        return this.frames.length
    }

    getFrame(index: number): Frame{
        return this.frames[index]
    }
}