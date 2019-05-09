import { schema } from 'normalizr';

export const event = new schema.Entity('events', {}, { idAttribute: 'id' });
export const feed = new schema.Entity('feed', {}, { idAttribute: 'id' });
export const user = new schema.Entity('users', {}, { idAttribute: 'id' });
