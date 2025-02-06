import renderApi from '@api/render-api';

renderApi.auth('rnd_BowNn7C1SqvnVTaSzStIbTcC8qYW');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
