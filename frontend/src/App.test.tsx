import { shallow } from 'enzyme';
import NotificationButton from '.components/NotificationButton';

describe('NotificationButton', () => {
    it('deve ser renderizado com sucesso com a propriedade saleId correta', () => {
        const saleId = 123;  
        const wrapper = shallow(<NotificationButton saleId={saleId} />);
  
        expect(wrapper.exists()).toBe(true);
    });
  
    it('deve chamar axios e exibir um toast de sucesso ao clicar no botão', async () => {
        const saleId = 123;
        const axiosMock = jest.spyOn(axios, 'get').mockResolvedValue({ data: {} });
        const toastInfoMock = jest.spyOn(toast, 'info');
        
        const wrapper = shallow(<NotificationButton saleId={saleId} />);
        wrapper.find('div.dsmeta-red-btn').simulate('click');
        await Promise.resolve(); 
  
        expect(axiosMock).toHaveBeenCalledWith(`${BASE_URL}/sale/${saleId}/notification`);
        expect(toastInfoMock).toHaveBeenCalledWith('SMS enviado com sucesso!');
    });
  });
  