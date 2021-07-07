import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchema } from '/@/components/Form/index';
import { Data } from '/@/api/platform/model/dataModel';
import { DataItem } from '/@/api/platform/model/dataItemModel';

import { valueTypeOptions } from './BasicType';

const { t } = useI18n();

/**
 * 构建数据字典表单
 * @param data 数据字典
 * @returns 返回表单定义
 */
export function getDateFormSchemas(data?: Data): FormSchema[] {
  return [
    {
      field: 'id',
      component: 'Input',
      label: 'id',
      colProps: { span: 24 },
      defaultValue: data?.id,
      show: false,
    },
    {
      field: 'parentId',
      component: 'Input',
      label: 'parentId',
      colProps: { span: 24 },
      defaultValue: data?.parentId,
      show: false,
    },
    {
      field: 'name',
      component: 'Input',
      label: t('AppPlatform.DisplayName:Name'),
      colProps: { span: 24 },
      required: true,
      defaultValue: data?.name,
    },
    {
      field: 'displayName',
      component: 'Input',
      label: t('AppPlatform.DisplayName:DisplayName'),
      colProps: { span: 24 },
      required: true,
      defaultValue: data?.displayName,
    },
    {
      field: 'description',
      component: 'InputTextArea',
      label: t('AppPlatform.DisplayName:Description'),
      colProps: { span: 24 },
      defaultValue: data?.description,
    },
  ];
}

/**
 * 构建数据字典项目表单
 * @param dataItem 数据字典项目
 * @returns 返回表单定义
 */
export function getDataItemFormSchemas(dataItem?: DataItem): FormSchema[] {
  return [
    {
      field: 'id',
      component: 'Input',
      label: 'id',
      colProps: { span: 24 },
      defaultValue: dataItem?.id,
      show: false,
    },
    {
      field: 'name',
      component: 'Input',
      label: t('AppPlatform.DisplayName:Name'),
      colProps: { span: 24 },
      required: true,
      defaultValue: dataItem?.name,
      dynamicDisabled: dataItem?.id !== undefined,
    },
    {
      field: 'displayName',
      component: 'Input',
      label: t('AppPlatform.DisplayName:DisplayName'),
      colProps: { span: 24 },
      required: true,
      defaultValue: dataItem?.displayName,
    },
    {
      field: 'valueType',
      component: 'Select',
      label: t('AppPlatform.DisplayName:ValueType'),
      colProps: { span: 24 },
      required: true,
      defaultValue: dataItem?.valueType,
      componentProps: {
        options: valueTypeOptions,
      },
    },
    {
      field: 'defaultValue',
      component: 'Input',
      label: t('AppPlatform.DisplayName:DefaultValue'),
      colProps: { span: 24 },
      defaultValue: dataItem?.defaultValue,
      // dynamicRules: ({ values }) => {
      //   return [
      //     {
      //       required: values.allowBeNull !== undefined || !values.allowBeNull,
      //     },
      //   ];
      // },
    },
    {
      field: 'allowBeNull',
      component: 'Checkbox',
      label: t('AppPlatform.DisplayName:AllowBeNull'),
      colProps: { span: 24 },
      defaultValue: dataItem?.allowBeNull,
    },
    {
      field: 'description',
      component: 'InputTextArea',
      label: t('AppPlatform.DisplayName:Description'),
      colProps: { span: 24 },
      defaultValue: dataItem?.description,
    },
  ];
}
