import { account, common, wallet } from './resources/index';
export const resources = {
  account,
  common,
  wallet,
};
export type * as Resources from './resources/index';

import { account as accountUtils } from './utils/index';
export const utils = {
  account: accountUtils,
};
export type * as Utils from './utils/index';

import {
  clientId,
  client,
  clientMetadata,
  clientMetadataTable,
  clientsTable,
  permission,
  permissionsStore,
  permissionsTable,
  resource,
  resourcesTable,
} from './store';
export const store = {
  clientId,
  client,
  clientMetadata,
  clientMetadataTable,
  clientsTable,
  resource,
  resourcesTable,
  permission,
  permissionsTable,
  permissionsStore,
};
export type * as Store from './store';

export const permissions = {
  resources,
  utils,
  store,
};
