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


import { Model5 } from './model5';

/**
 * 
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    /**
     * 业务消息
     * @type {string}
     * @memberof InlineResponse2008
     */
    message: string;
    /**
     * 业务状态码
     * @type {number}
     * @memberof InlineResponse2008
     */
    code: number;
    /**
     * 
     * @type {Model5}
     * @memberof InlineResponse2008
     */
    data: Model5;
}


