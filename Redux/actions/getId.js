import { ID_CHANGE } from '../constants/index';
export function changeid(id) {
return {
type: ID_CHANGE,
payload: id
}
}