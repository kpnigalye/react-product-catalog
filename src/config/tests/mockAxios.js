import axios from "axios";
import axiosMock from "axios-mock-adapter";

const MockAdapter = new axiosMock(axios);

afterEach(() => {
  MockAdapter.reset();
});

export default MockAdapter;
