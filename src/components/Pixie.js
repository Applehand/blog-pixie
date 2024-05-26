import { ImageContainer } from "./ImageContainer";
import { InputsContainer } from "./InputsContainer";
import { ImageExport } from "./ImageExport";

import '../styles/Pixie.css';


export function Pixie() {
    return (
        <div id="Pixie">
        <ImageContainer id="ImageContainer"/>
        <InputsContainer id="InputsContainer"/>
        <ImageExport id="ImageExport"/>
        </div>
    )
  }
  