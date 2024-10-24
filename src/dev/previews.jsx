import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Services from "../components/Projects";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Services">
                <Services/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews