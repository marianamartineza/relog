
import { render, screen } from "@testing-library/react";
import { Relog } from "../src/Relog";



describe('pruebas en <Relog/>', () => { 
    
    test('debe hacer match con el snapshot', () => { 
        const {container}=render(<Relog/>);
        expect(container).toMatchSnapshot();
     });

     


 });