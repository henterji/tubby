import { URLSearchParams } from '@angular/http';

export const objToSearchParams = (obj: any): URLSearchParams => {
  let params = new URLSearchParams();
  for (let k in obj) {
    if (obj[k]) {
      params.append(k, obj[k]);
    }
  }
  return params;
};

export const getQueryStringByName = (name, url): string => {
  if (!url) {
    url = location.search;
  }
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}