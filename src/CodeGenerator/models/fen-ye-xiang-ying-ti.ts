// tslint:disable
/**
 * OJPlus
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Model8 } from './model8';

/**
 * 
 * @export
 * @interface FenYeXiangYingTi
 */
export interface FenYeXiangYingTi {
    /**
     * 业务消息
     * @type {string}
     * @memberof FenYeXiangYingTi
     */
    message: string;
    /**
     * 业务状态码
     * @type {number}
     * @memberof FenYeXiangYingTi
     */
    code: number;
    /**
     * 
     * @type {Model8}
     * @memberof FenYeXiangYingTi
     */
    data: Model8;
}

