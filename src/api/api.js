import axios from 'axios';

function api() {
  const API_HOST = 'http://private-06d33-wizeradar.apiary-mock.com';
  const headers = {
    Accept: 'application/json',
  };

  const configObject = {
    baseURL: API_HOST,
    timeout: 10000,
    headers,
  };

  return axios.create(configObject);
}

export default {
  teams: {
    getTeams: config =>
      api().get(`/teams`, config),
    getTeam: config =>
      api().get('/teams/${config.teamId}', config),
    getTeamRadar: config =>
      api().get('/teams/${config.teamId}/radar', config),
    getTeamHealthStatus: config =>
      api().get('/teams/${config.teamId}/health-status', config),
  },
};
