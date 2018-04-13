import * as APIUtil from '../util/tag_api_util';
import { receiveAllGalleries } from './gallery_actions';

export const fetchTag = (id) => dispatch => (
  APIUtil.fetchTag(id).then(
    (galleries) => dispatch(receiveAllGalleries({galleries}))
  )
);
