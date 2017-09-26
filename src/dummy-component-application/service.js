import axios from 'axios';

const dummyComponentApplicationServiceFactory = () => (
  {
    getDummyComponentApplication: patientId => (
      axios.get(`/patients/${patientId}/dummy-component-application`, {
        headers: {
          Accept: 'application/json',
        },
      }).then(response => (
        response.data.dummyComponentApplication
      ))
    ),
  }
);

export default dummyComponentApplicationServiceFactory();
