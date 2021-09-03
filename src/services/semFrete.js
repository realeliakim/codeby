import axios from 'axios';

const no_frete = axios.create({
  baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210903T010153Z&X-Amz-Expires=86400&X-Amz-Signature=dc29a153e9a6cc0f314b7ed15d614ba08a8b59c018abc4018944ddc74d7af8f8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22',
});

export default no_frete;