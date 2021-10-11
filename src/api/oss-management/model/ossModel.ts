import { PagedAndSortedResultRequestDto } from '../../model/baseModel';

export enum FileType {
  Folder = 0,
  File = 1,
}

export interface OssContainer {
  name: string;
  size?: number;
  creationDate: Date;
  lastModifiedDate?: Date;
  metadata: { [key: string]: string };
}

export interface OssContainersResult {
  prefix: string;
  marker: string;
  nextMarker: string;
  maxKeys: number;
  containers: OssContainer[];
}

export interface OssObject {
  isFolder: boolean;
  name: string;
  path: string;
  size?: number;
  extension: string;
  creationTime: Date;
  lastModifiedDate?: Date;
  metadata: { [key: string]: string };
}

export interface OssObjectCreate {
  bucket: string;
  path: string;
  object: string;
  overwrite: boolean;
  expirationTime?: number;
}

export interface OssObjectsResult {
  bucket: string;
  prefix: string;
  delimiter: string;
  marker: string;
  nextMarker: string;
  maxKeys: number;
  objects: OssObject[];
}

export interface OssCopyOrMove {
  path: string;
  name: string;
  toPath: string;
  toName?: string;
}

export class GetOssContainerPagedRequest extends PagedAndSortedResultRequestDto {
  prefix = '';
  marker = '';
}

export class GetOssObjectPagedRequest extends PagedAndSortedResultRequestDto {
  bucket = '';
  prefix = '';
  delimiter = '';
  marker = '';
  encodingType = '';
}

export interface GetOssObjectRequest {
  bucket: string;
  path: string;
  object: string;
}
