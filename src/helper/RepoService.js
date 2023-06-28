import axios from 'axios';

function RepoService() {
  let events = {
    onInit: function () {}
  };

  const API__DOMAIN = 'https://api.github.com';

  let isInit = false;

  let repoList = [];

  /*****************************/

  function ObjtoQuery(obj) {
    let keys = Object.keys(obj);
    let result = '?';
    keys.forEach(item => {
      result += item + '=' + obj[item] + '&';
    });
    return result;
  }

  function getAPI(_api, _dataObj, _callback) {
    // console.log('getAPI', _api, ObjtoQuery(_dataObj));
    axios({
      method: 'get',
      url: API__DOMAIN + _api + ObjtoQuery(_dataObj)
    })
      .then(({ data }) => {
        console.log('RepoService getAPI :', data);
        _callback(data);
      })
      .catch(err => {
        console.log('RepoService getAPI :', err);
        alert(err.message);
      });
  }

  function postAPI(_api, _dataObj, _callback) {
    // console.log('postAPI', _api, ObjtoQuery(_dataObj));
    axios({
      method: 'post',
      url: API__DOMAIN + _api,
      data: _dataObj
    })
      .then(({ data }) => {
        console.log('RepoService postAPI :', data);
        _callback(data);
      })
      .catch(err => {
        console.log('RepoService postAPI :', err);
        alert(err.message);
      });
  }

  /****************************************************/

  function init(_option) {
    console.log('RepoService init.', _option);

    getAPI(
      '/users/burton85/repos',
      { per_page: 5, sort: 'created:%20asc', page: 1 },
      res => {
        isInit = true;
        repoList.push(res);
        events.onInit(res);
      }
    );
  }

  function getRepoList(_page) {
    console.log('RepoService getRepoList', _page);

    getAPI(
      '/users/burton85/repos',
      { per_page: 5, sort: 'created:%20asc', page: _page },
      res => {
        repoList.push(res);
        events.onRepoChange(res);
      }
    );
  }

  /***********************************************/

  function onInit(_callback = callbackDefault) {
    console.log('RepoService onInit');
    events.onInit = _callback;
  }

  function onChange(_callback = callbackDefault) {
    console.log('RepoService onChange:');
    events.onChange = _callback;
  }

  function onRepoChange(_callback = callbackDefault) {
    console.log('RepoService onRepoChange:');
    events.onRepoChange = _callback;
  }

  /***********************************************/

  function callbackDefault() {}

  return {
    init,
    onInit,
    onChange,
    onRepoChange,
    getRepoList
  };
}

export default RepoService;
