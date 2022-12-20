
import { render, screen } from "@testing-library/react";
import { Relog } from "../src/Relog";



describe('pruebas en <Relog/>', () => { 

    const hour = 10;
    const minute= 30;
    const time = 'PM';

    
    test('debe hacer match con el snapshot', () => { 
        const {container}=render(<Relog/>);
        expect(container).toMatchSnapshot();
     });

     
     test('deberia de mostrar la hora enviada con los proptypes', () => { 

        render(<Relog hora={hour} min={minute} tiempo={time}/>);
        // screen.debug();
        expect(screen.getByTestId('test-hour').innerHTML).toContain(`${hour}:${minute} ${time}`);
      });


      test('debe de incrementar la hora al hacer clic en el boton hora', () => { 
        


        
       })
     


 });