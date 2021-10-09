import {
  AuditedEntityDto,
  PagedAndSortedResultRequestDto,
  PagedResultDto,
} from '/@/api/model/baseModel';

export interface Language extends AuditedEntityDto {
  id: string;
  enable: boolean;
  cultureName: string;
  uiCultureName: string;
  displayName: string;
  flagIcon: string;
}

export interface LanguageCreateOrUpdate {
  enable: boolean;
  cultureName: string;
  uiCultureName: string;
  displayName: string;
  flagIcon: string;
}

export class LanguagePagedResult extends PagedResultDto<Language> {}

export class GetLanguagePagedRequest extends PagedAndSortedResultRequestDto {
  filter = '';
  subjectId = '';
}
