import { Container } from 'unstated';
import WebApi from 'services/WebApi';

class ResolutionController extends Container {
  state = {
    currentStep: null,
  };

  start = async exerciseId => {
    const currentStep = await new WebApi(`/api/student/me/exercises/${exerciseId}/currentStep`).all();

    this.setState({
      currentStep,
    });
  }
}


export default ResolutionController;
