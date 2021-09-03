import axios from 'axios';

const frete = axios.create({
  baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210903T011004Z&X-Amz-Expires=86400&X-Amz-Signature=39e0b1ea3d0b9c529fd74b43da3bd97698238238732b7e1f3b64929bdbbf6756&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22',
});

export default frete;