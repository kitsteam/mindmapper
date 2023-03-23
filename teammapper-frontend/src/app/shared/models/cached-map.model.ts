export interface CachedMapEntry {
  cachedMap: CachedMap;
  key: string;
}

export interface CachedMap {
  lastModified: number;
  data: any;
  uuid: string;
  deleteAfterDays: number;
  deletedAt: number;
  options: CachedMapOptions;
}

export interface CachedMapOptions {
  fontMaxSize: number;
  fontMinSize: number;
  fontIncrement: number;
}

export interface CachedAdminMapValue {
  adminId: string;
  modificationSecret: string;
  ttl: Date;
  rootName: string | null;
}

export interface CachedAdminMapEntry {
  id: string;
  cachedAdminMapValue: CachedAdminMapValue;
}